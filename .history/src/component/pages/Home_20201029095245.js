import axios from 'axios'
import React, { useEffect, useState } from 'react'

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
                                    <th scope="col">{index + 1}</th>
                                    <th>{users.name}</th>
                                    <th>{users.username}</th>
                                    <th>{users.email}</th>
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
