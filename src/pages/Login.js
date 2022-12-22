import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useContext } from "react";
import "../css/custom.css";
import { CurrentUser } from "../context/CurrentUser";
import { useNavigate } from "react-router-dom";




const Login = () => {

    const { setCurrentUser } = useContext(CurrentUser);
    const navigate = useNavigate()


    const [ credentials, setCredentials] = useState({
      email: '',
      password: '',
    })
    const [errorMessage, setErrorMessage ] = useState(null)

    const onSubmit= async (e)=>{
      e.preventDefault()

      const response = await fetch('http://localhost:5050/authentication/', {
        method: 'POST',
        credentials: 'include',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      })
      const data = await response.json()
      console.log(data)
      if( response.status === 200 ){
        setCurrentUser(data.user)
        localStorage.setItem('token', data.token)
        navigate('/')
      } else{
        setErrorMessage(data.message)
      }

    }

    return (
      <Card >
        <Card.Body>
          <div className="form-box">
            <Card.Title className="form-title">Log In</Card.Title>
            <Form>
              <Form.Group
                className="mb-3 form-field"
                controlId="formBasicEmail"
              >
                <div>
                  <Form.Label>Email Address</Form.Label>
                </div>
                <Form.Control
                  value={credentials.email}
                  type="email"
                  placeholder="Enter Email"
                  onChange={(e) => setCredentials({...credentials, email: e.target.value})}
                  required
                />
              </Form.Group>

              <Form.Group
                className="mb-3 form-field"
                controlId="formBasicPassword"
              >
                <div>
                  <Form.Label>Password</Form.Label>
                </div>
                <Form.Control
                  value={credentials.password}
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                  required
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                onClick={(e) => onSubmit(e)}
              >
                LOG IN
              </Button>
              <Button
                variant="primary"
                type="submit"
                onClick={(e) => onSubmit(e)}
              >
                SIGN UP
              </Button>
            </Form>
          </div>
        </Card.Body>
      </Card>
    );

}

export default Login;
