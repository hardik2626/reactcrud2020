import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const AddUser = () => {
    let history = useHistory()
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""

    })

    const {name, username, email, phone, website} = user
    const onInputChange = e => {
        console.log(e.target.value)
        setUser({...user,[e.target.name]: e.target.value})
    }

    const onSubmit = async e => {
        e.preventDefualt()
        await axios.post('http://localhost:3003/users', user)
        history.push('/')
    }
    return (
        <div className="container">
                <div className="py-4">
                <h2 className="text-center mb-4">Add A User</h2>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="form-group">
                            <input type="text" value={name} name="name" onChange={e => onInputChange(e)} className="form-control" placeholder="Enter Name" />
                            
                        </div>
                        <div className="form-group">
                            <input type="text" value={username} name="username" onChange={e => onInputChange(e)} className="form-control" placeholder="Enter Username" />
                            
                        </div>
                        <div className="form-group">
                            <input type="email" value={email} name="email" onChange={e => onInputChange(e)} className="form-control" placeholder="Enter email" />
                            
                        </div>
                        <div className="form-group">
                            <input type="number" value={phone} name="phone" onChange={e => onInputChange(e)} className="form-control" placeholder="Enter Phone" />
                            
                        </div>
                        <div className="form-group">
                            <input type="text" value={website} name="website" onChange={e => onInputChange(e)} className="form-control"  placeholder="Enter Website Name" />
                        </div>

                        <button type="submit" className="btn btn-primary">Add User</button>
                    </form>
                </div>
            </div>
    )
}

export default AddUser
