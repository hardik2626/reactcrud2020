import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const [users, setUser] = useState([])

    useEffect(() => {
        loadUsers();//display data from URL through loadUsr()
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUser(result.data.reverse())// display new data on TOP - desc order
    }

    const deleteUser = async id =>{
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        loadUsers()
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
                                users.map((user, index) => (
                                    <tr>
                                    <td scope="col">{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link class="btn btn-primary mr-2">View</Link>
                                        <Link class="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
                                        <Link class="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</Link>
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
