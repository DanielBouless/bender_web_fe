import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { useNavigate } from "react-router-dom";


const LoginOrSignUp = () => {
    
    const navigate = useNavigate()

    const navLogin = (e) =>{
        navigate('/login')
    }

    const navSignUp = (e) => {
    navigate("/signup");
    };


  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>Welcome to Bender</Card.Title>
          <Card.Img src="/" />
          <Card.Text>
            This is where a brief description of the event will go
          </Card.Text>
          <Button type="button" name="login" onClick={(e) => navLogin(e)}>
            Log In
          </Button>
          <Button type="button" name="signup" onClick={(e) => navSignUp(e)}>
            Sign Up
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LoginOrSignUp;
