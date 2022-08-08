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
            <div className="form-group row mb-3">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <h2>Register Page</h2>
                    <form onSubmit={fncSend}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input onChange={(evt) => setName(evt.target.value)} className="form-control" id="name" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="surname" className="form-label">Surname</label>
                            <input onChange={(evt) => setSurname(evt.target.value)} type="content" className="form-control" id="surname" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="bloodType" className="form-label">Blood Type</label>
                            <input onChange={(evt) => setBloodType(evt.target.value)} type="content" className="form-control" id="bloodType" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input type="tel" onChange={(evt) => setPhone(evt.target.value)} className="form-control" id="phone" placeholder="1234504510" pattern="[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input onChange={(evt) => setAddress(evt.target.value)} type="content" className="form-control" id="address" required/>
                        </div>
                        <button type="submit" className="btn btn-primary form-control">Submit</button>
                    </form>
                </div>
                <div className="col-sm-4"></div>
            </div>
        </>
    )
}

export default Register