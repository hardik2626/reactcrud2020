import React, { useState } from 'react'

const AddUser = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""

    })

    const {name, username, email, phone, website} = user

    const onInputChange = (e) => {
        console.log(e.target.value)
        setUser({...user,[e.target.name]: e.target.value})
    }
    return (
        <div className="container">
                <div className="py-4">
                    <h1>Add User</h1>
                    <form>
                        <div className="form-group">
                            <input type="text" value={name} onChange={e => onInputChange(e)} className="form-control" placeholder="Enter Name" />
                            
                        </div>
                        <div className="form-group">
                            <input type="text" value={username} onChange={e => onInputChange(e)} className="form-control" placeholder="Enter Username" />
                            
                        </div>
                        <div className="form-group">
                            <input type="email" value={email} onChange={e => onInputChange(e)} className="form-control" placeholder="Enter email" />
                            
                        </div>
                        <div className="form-group">
                            <input type="number" value={phone} onChange={e => onInputChange(e)} className="form-control" placeholder="Enter Phone" />
                            
                        </div>
                        <div className="form-group">
                            <input type="text" value={website} onChange={e => onInputChange(e)} className="form-control"  placeholder="Enter Website Name" />
                        </div>

                        <button type="submit" className="btn btn-primary">Add User</button>
                    </form>
                </div>
            </div>
    )
}

export default AddUser
