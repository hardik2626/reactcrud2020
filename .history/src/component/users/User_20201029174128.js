import React, { useState } from 'react'

const User = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""

    })
    return (
        <div>
            <h1>User</h1>
        </div>
    )
}

export default User
