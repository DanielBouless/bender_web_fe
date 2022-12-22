import Accordian from "react-bootstrap/esm/Accordion";
import Card from "react-bootstrap/esm/Card";

const ViewEventsCreated = () => {
  return (
    <Card style={{ width: "40rem" }}>
      <Card.Body>
        <Accordian>
          <Accordian.Item eventKey="0">
            <Accordian.Header>Events You've Created</Accordian.Header>
            <Accordian.Body>
              An array of cards showing events created by currentUser
            </Accordian.Body>
          </Accordian.Item>
        </Accordian>
      </Card.Body>
    </Card>
  );
};

export default ViewEventsCreated;
