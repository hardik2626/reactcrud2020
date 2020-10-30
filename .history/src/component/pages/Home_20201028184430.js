import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        
    }, [])

    const loadUsers = async () => {
        const result = axios.get("http://localhost:3003/users")
    }

    return (
        <>
            <div className="container">
                <div className="py-4">
                    <h1>Homepage</h1>
                    <axios />
                </div>
            </div>
        </>
    )
}

export default Home
