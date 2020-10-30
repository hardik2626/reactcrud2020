import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users")
        setUsers(result.data)
    }

    return (
        <>
            <div className="container">
                <div className="py-4">
                    <h1>Homepage</h1>
                    <table class="table border shadow">
                        <thead class="thead-dark">
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">UserName</th>
                            <th scope="col">Email</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((users, index) => (
                                    <tr>
                                    <td scope="col">{index + 1}</td>
                                    <td>{users.name}</td>
                                    <td>{users.username}</td>
                                    <td>{users.email}</td>
                                    <td>
                                        <Link class="btn btn-primary">View</Link>
                                        <Link class="btn btn-outline-primary">Edit</Link>
                                        <Link class="btn btn-danger">Delete</Link>
                                    </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <axios />
                </div>
            </div>
        </>
    )
}

export default Home
