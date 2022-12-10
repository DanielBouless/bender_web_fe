import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import "../css/custom.css";



const Login = () => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const onSubmit=(e)=>{
  e.preventDefault()
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
              >
                <div>
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
