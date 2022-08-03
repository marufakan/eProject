import React, { useState } from 'react'
import { save } from './Services'
import { useNavigate } from 'react-router-dom'

function Register() {

    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [bloodType, setBloodType] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    const fncSend = (evt: React.FormEvent) => {
        evt.preventDefault()
        save(name, surname, bloodType, phone, address).then(res => {
            if(res.status){
                alert("Registration is successful\n ")
                navigate('/detail')
            }
        }).catch(err => alert("registration could not be made"));

    }

    return (
        <>
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <h2>Register Page</h2>
                    <form onSubmit={fncSend}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input onChange={(evt) => setName(evt.target.value)} className="form-control" id="name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="surname" className="form-label">Surname</label>
                            <input onChange={(evt) => setSurname(evt.target.value)} type="content" className="form-control" id="surname" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="bloodType" className="form-label">Blood Type</label>
                            <input onChange={(evt) => setBloodType(evt.target.value)} type="content" className="form-control" id="bloodType" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input onChange={(evt) => setPhone(evt.target.value)} type="content" className="form-control" id="phone" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input onChange={(evt) => setAddress(evt.target.value)} type="content" className="form-control" id="address" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col-sm-4"></div>
            </div>
        </>
    )
}

export default Register