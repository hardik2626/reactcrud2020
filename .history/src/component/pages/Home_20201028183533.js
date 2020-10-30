import Axios from 'axios'
import React, { useState } from 'react'

const Home = () => {
    const [users, setUsers] = useState([])
    return (
        <>
            <div className="container">
                <div className="py-4">
                    <h1>Homepage</h1>
                    <Axios />
                </div>
            </div>
        </>
    )
}

export default Home
