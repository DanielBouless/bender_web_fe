import Accordian from "react-bootstrap/esm/Accordion";
import Card from "react-bootstrap/esm/Card";

const ViewEventAttend = () => {
  return (
    <Card style={{ width: "40rem" }}>
      <Card.Body>
        <Accordian>
          <Accordian.Item eventKey="0">
            <Accordian.Header>Events You're Attending</Accordian.Header>
            <Accordian.Body>
              An array of cards showing the events your were invited to and
              accepted
            </Accordian.Body>
          </Accordian.Item>
        </Accordian>
      </Card.Body>
    </Card>
  );
};

export default ViewEventAttend;
