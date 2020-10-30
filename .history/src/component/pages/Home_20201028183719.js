import Axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {

    }, [])
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
