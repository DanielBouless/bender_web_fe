import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import { useEffect, useState } from 'react'
import '../Form.css'



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
}

    return (
      <Card style={{ width: "fit-content", margin: "auto" }}>
        <Card.Body>
          <div className="form-box">
          <Card.Title className='form-title'>Sign Up</Card.Title>
            <Form>
              <Form.Group className="mb-3 form-field" controlId="formFirstname">
                <div>
                <Form.Label>First Name</Form.Label>

                </div>
                <Form.Control
                  value={firstname}
                  type="text"
                  placeholder="Enter First Name"
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3 form-field" controlId="formLastname">
                <div>
                <Form.Label>Last Name</Form.Label>

                </div>
                <Form.Control
                  value={lastname}
                  type="text"
                  placeholder="Enter Last Name"
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group
                className="mb-3 form-field"
                controlId="formBasicEmail"
              >
                <div>
                <Form.Label>Email Address</Form.Label>

                </div>
                <Form.Control
                  value={email}
                  type="email"
                  placeholder="Enter Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group
                className="mb-3 form-field"
                controlId="formBasicPassword"
              ><div>
                <Form.Label>Password</Form.Label>
                
                </div> 
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
          </div>
        </Card.Body>
      </Card>
    );
}


export default SignUp