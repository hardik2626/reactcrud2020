import React from 'react'

const AddUser = () => {

    return (
        <div className="container">
                <div className="py-4">
                    <h1>Add User</h1>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter Name" />
                            
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter Username" />
                            
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Enter email" />
                            
                        </div>
                        <div className="form-group">
                            <input type="number" className="form-control" placeholder="Enter Phone" />
                            
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control"  placeholder="Enter Website Name" />
                        </div>

                        <button type="submit" className="btn btn-primary">Add User</button>
                    </form>
                </div>
            </div>
    )
}

export default AddUser
