import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import { useEffect, useState } from 'react'
import '../css/custom.css'




const SignUp=()=>{


const [firstname, setFirstname] = useState('')
const [lastname, setLastname] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const userCredentials = {
  firstname: firstname,
  lastname: lastname,
  email: email,
  password: password
}

useEffect(()=>{
  console.log(userCredentials)
},[userCredentials])

const onSubmit=(e)=>{
  e.preventDefault()

const sendData = ( async (req, res)=>{
    await fetch (`localhost:5050/users`, {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userCredentials)
    })
})
sendData()

}

    return (

      <Card>
        <Card.Body>
          <Card.Title>Sign Up</Card.Title>
            <Form>
              <Form.Group className="mb-3" controlId="formFirstname">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  value={firstname}
                  type="text"
                  placeholder="Enter First Name"
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formLastname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  value={lastname}
                  type="text"
                  placeholder="Enter Last Name"
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
              >
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  value={email}
                  type="email"
                  placeholder="Enter Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicPassword"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={password}
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={(e) => onSubmit(e)}
              >
                Create Account
              </Button>
            </Form>
        </Card.Body>
      </Card>
    );
}


export default SignUp