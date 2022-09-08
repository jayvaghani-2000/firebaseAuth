import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap';
import { useAuth } from "../context/authContext";

const Dashboard = () => {
    const [error, setError] = useState("")
    const { currentUser } = useAuth()
    const handleLogOut = () => {
  
    }
    return (
        <>
            <h1>Dashboard</h1>
            <h1>Profile</h1>
            <h4>{currentUser && currentUser.email}</h4>
            {error && <Alert variant='danger'>{error}</Alert>}
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogOut}>Log Out</Button>
            </div>
        </>
    )
}

export default Dashboard