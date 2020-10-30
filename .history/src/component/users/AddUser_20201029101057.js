import React from 'react'

const AddUser = () => {
    return (
        <div className="container">
                <div className="py-4">
                    <h1>Contact page</h1>
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Enter Name" />
                            
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Enter Username" />
                            
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Enter email" />
                            
                        </div>
                        <div class="form-group">
                            <input type="number" class="form-control" placeholder="Enter Phone" />
                            
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control"  placeholder="Enter Website Name" />
                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
    )
}

export default AddUser
