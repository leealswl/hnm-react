import React from 'react'
import { Form,Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'




const Login = ({setAuthenticate}) => {
  const navigate = useNavigate()
  const loginUser=(e)=>{
    e.preventDefault(); //form을 쓸때 계속리프레시 하는걸 막아줄수있음
    setAuthenticate(true)
    navigate('/')
  }
  return (
  <Container>
    <div>
      <Form onSubmit={(e)=>loginUser(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="danger" type="submit">
        Login
      </Button>
    </Form>
    </div>
    </Container>
  )
}

export default Login