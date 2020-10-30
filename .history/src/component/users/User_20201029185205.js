import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

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
        <div className="container py-4">
          <Link className="btn btn-primary" to="/">
            back to Home
          </Link>
          <h1 className="display-4">User Id: {user.name}</h1>
          <hr />
          <ul className="list-group w-50">
            <li className="list-group-item">name: {user.name}</li>
            <li className="list-group-item">user name: {user.username}</li>
            <li className="list-group-item">email: {user.email}</li>
            <li className="list-group-item">phone: {user.phone}</li>
            <li className="list-group-item">website: {user.website}</li>
          </ul>
        </div>
      );
    };
    
    export default User;