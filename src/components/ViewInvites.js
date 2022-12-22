import Accordian from "react-bootstrap/esm/Accordion";
import Card from "react-bootstrap/esm/Card";

const ViewInvites = () => {
  return (
    <Card style={{ width: "40rem" }}>
      <Card.Body>
        <Accordian>
          <Accordian.Item eventKey="0">
            <Accordian.Header>Invites Awaiting Your Response</Accordian.Header>
            <Accordian.Body>
              An array of cards showing events youre invited to
            </Accordian.Body>
          </Accordian.Item>
        </Accordian>
      </Card.Body>
    </Card>
  );
};

export default ViewInvites;
