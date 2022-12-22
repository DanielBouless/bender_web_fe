import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import { useEffect, useState} from 'react'
import '../css/custom.css'
import { useNavigate } from 'react-router-dom';



const SignUp=()=>{

  const navigate = useNavigate()

const [credentials, setCredentials] = useState({
  firstname:'',
  lastname: '',
  email: '',
  password: '',
})

useEffect(() => {
  console.log(credentials);
}, [credentials]);


const sendData = ( async (req, res)=>{
  await fetch (`http://localhost:5050/users`, {
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
  })
})

const onSubmit=(e)=>{
  e.preventDefault()
  sendData()
  navigate('/login')
  

}

    return (
      <Card>
        <Card.Body>
          <Card.Title>Sign Up</Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="formFirstname">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                value={credentials.firstname}
                type="text"
                placeholder="Enter First Name"
                onChange={(e) =>
                  setCredentials({ ...credentials, firstname: e.target.value })
                }
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLastname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                value={credentials.lastname}
                type="text"
                placeholder="Enter Last Name"
                onChange={(e) =>
                  setCredentials({ ...credentials, lastname: e.target.value })
                }
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                value={credentials.email}
                type="email"
                placeholder="Enter Email"
                onChange={(e) =>
                  setCredentials({ ...credentials, email: e.target.value })
                }
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={credentials.password}
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
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