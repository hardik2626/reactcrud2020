import axios from 'axios'
import React, { useEffect, useState } from 'react'
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
    useEffect(() => {
        loadUser()
    },[])
    
    const loadUser = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        setUser(res.data)
    }

    
    return (
        <>
             <div className="container py-4">
                
             </div>
        </>
    )
}

export default User
