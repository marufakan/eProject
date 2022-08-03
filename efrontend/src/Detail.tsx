import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { list } from './Services'

function Detail() {

    const navigate = useNavigate()
    //const [arr, setArr] = useState<IExample>({})

    useEffect(() => {
        list().then(res => {
            //setArr(res.data)
        })
    }, [])

    return (
        <>
            <h2 className='m-3'>User Detail Page</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Surname</th>
                        <th scope="col">Blood Type</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </>
    )
}

export default Detail