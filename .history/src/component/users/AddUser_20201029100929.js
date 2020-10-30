import React from 'react'

const AddUser = () => {
    return (
        <div className="container">
                <div className="py-4">
                    <h1>Contact page</h1>
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" placeholder="Enter email" />
                            
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control"  placeholder="Password" />
                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
    )
}

export default AddUser
