import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'

const SignUp = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const navigate = useNavigate()
    const {signUp} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async(e) => {
        e.preventDefault()

        if(passwordConfirmRef.current.value !== passwordRef.current.value) {return setError("Password mismatched")}
        setLoading(true)
        try{
            setError("")
            await signUp(emailRef.current.value, passwordRef.current.value)
            navigate("/")
        } catch(err) {
            setError("Sign up fails")
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Sign Up</h2>
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
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" required ref={passwordConfirmRef}></Form.Control>
                        </Form.Group>
                        <Button type="submit" className='w-100 mt-4' disabled={loading}>Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account?<Link to={"/login"}>Log In</Link>
            </div>
        </>
    )
}

export default SignUp