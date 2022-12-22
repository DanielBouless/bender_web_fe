import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";

const EventCard = () => {
  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>Event Name</Card.Title>
        <Card.Body>
          <Card.Img src="/" alt="carousel of event images"/>
        </Card.Body>
        <Card.Body>
        </Card.Body>
          <Card.Text>
            This is where a brief description of the event will go
          </Card.Text>
          <Button type="button" name="skip">
            SKIP
          </Button>
          <Button type="button" name="request">
            Request Invite
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EventCard;
