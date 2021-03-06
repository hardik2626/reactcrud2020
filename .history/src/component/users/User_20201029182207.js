import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""

    })

    const { id } = useParams()

    const loadUser = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    }
    setUser(res.data)
    return (
        <div>
            <h1>User</h1>
        </div>
    )
}

export default User
