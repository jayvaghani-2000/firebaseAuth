import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from '../context/authContext'
import { Link, useNavigate } from 'react-router-dom'

const LogIn = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const history = useNavigate()
    const {logIn} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async(e) => {
        e.preventDefault()
        setLoading(true)
        try{
            setError("")
            await logIn(emailRef.current.value, passwordRef.current.value)
            history("/")
        } catch(err) {
            setError("Log in fails")
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Log In</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form className='d-flex-column row gy-2' onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" required ref={emailRef}></Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" required ref={passwordRef}></Form.Control>
                        </Form.Group>
                        <Button type="submit" className='w-100 mt-4' disabled={loading}>Log In</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already haven't an account? <Link to={"/signup"}>Sign Up</Link>
            </div>
        </>
    )
}

export default LogIn