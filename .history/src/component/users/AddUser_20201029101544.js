import React, { useState } from 'react'

const AddUser = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""

    })
    return (
        <div className="container">
                <div className="py-4">
                    <h1>Add User</h1>
                    <form>
                        <div className="form-group">
                            <input type="text" value={name} className="form-control" placeholder="Enter Name" />
                            
                        </div>
                        <div className="form-group">
                            <input type="text" value={username} className="form-control" placeholder="Enter Username" />
                            
                        </div>
                        <div className="form-group">
                            <input type="email" value={email} className="form-control" placeholder="Enter email" />
                            
                        </div>
                        <div className="form-group">
                            <input type="number" value={phone} className="form-control" placeholder="Enter Phone" />
                            
                        </div>
                        <div className="form-group">
                            <input type="text" value={website} className="form-control"  placeholder="Enter Website Name" />
                        </div>

                        <button type="submit" className="btn btn-primary">Add User</button>
                    </form>
                </div>
            </div>
    )
}

export default AddUser
