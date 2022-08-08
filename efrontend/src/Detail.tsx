import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IUser } from './models/User'
import { list } from './Services'

function Detail() {

    const navigate = useNavigate()
    const [arr, setArr] = useState<IUser>({})

    useEffect(() => {
        list().then(res => {
            setArr(res.data)
        })
    }, [])

    return (
        <>
            <div className="table table-responsive w-100 d-block d-md-table mb-3">
                <table className="table table-striped">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Surname</th>
                            <th scope="col">Blood Type</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr.result?.map((item, index) =>
                                <tr>
                                    <th scope="row"> {item.id} </th>
                                    <td> {item.name} </td>
                                    <td> {item.surname} </td>
                                    <td> {item.bloodType} </td>
                                    <td> {item.phone} </td>
                                    <td> {item.address} </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Detail