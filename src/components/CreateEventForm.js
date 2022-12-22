import Accordian from 'react-bootstrap/esm/Accordion'
import Form from 'react-bootstrap/esm/Form'
import Card from 'react-bootstrap/esm/Card'
import Button from "react-bootstrap/esm/Button";
import { useState, useEffect } from 'react';
const CreateEventForm = ()=>{

    const [image, setImage ] = useState([])
    const [ eventInfo, setEventInfo ]   = useState({
        name:'',
        street:'',
        city:'',
        zip:'',
        max_guests: '1',
        images: '',
        private: false,
    })

useEffect(()=>{
    setEventInfo({...eventInfo, images: image})
},[image])


    const handleChange = (event) =>{
      // const imageBlob = new Blob([event.target.file], {type: 'images/*'} );
      const reader = new FileReader()
      reader.onload = ()=>{
        const fileBlob = reader.results
      }
            reader.readAsArrayBuffer(event.target.file);
                const URL.createObjectURL(fileBlob)
                // reader.onloadend = async ()=>{
                //      const imageData = new Uint8Array(reader.result)
                //     setImage([...image, imageData])
   
                console.log(image);
                 }
}



    const handleSubmit = (event)=>{
        event.preventDefault()
        console.log(eventInfo.images)
        // const sendEvent = async ()=>{
        //     await fetch('http://localhost:5050/events', {
        //         method: "POST",
        //         headers:{
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify(eventInfo),
        //     })
        // }
        // sendEvent()
    }

    return (
      <Card style={{ width: "40rem" }}>
        <Card.Body>
          <Accordian>
            <Accordian.Item eventKey="0">
              <Accordian.Header>Create an Event</Accordian.Header>
              <Accordian.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formEventName">
                    <Form.Label>Event Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Event's Name"
                      onChange={(e) =>
                        setEventInfo({ ...eventInfo, name: e.target.value })
                      }
                    />
                    <Form.Text className="text-muted">
                      Your Event Name is what people will see. Make it good cuz
                      you cant Change it!
                    </Form.Text>
                  </Form.Group>
                  <Form.Label>Event Location</Form.Label>
                  <Form.Group className="mb-3" controlId="formStreetAddress">
                    <Form.Label>Street Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Street Address"
                      onChange={(e) =>
                        setEventInfo({ ...eventInfo, street: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="City"
                      onChange={(e) =>
                        setEventInfo({ ...eventInfo, city: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Zip"
                      onChange={(e) =>
                        setEventInfo({ ...eventInfo, zip: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formZip">
                    <Form.Label>Max Number of Guests</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="1"
                      onChange={(e) =>
                        setEventInfo({ ...eventInfo, max_guests: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formPic">
                    <Form.Label>Add Pics</Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={event=> handleChange(event)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Keep This Hush Hush" />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="button"
                    onClick={event=>handleSubmit(event)}
                  >
                    Create
                  </Button>
                </Form>
              </Accordian.Body>
            </Accordian.Item>
          </Accordian>
        </Card.Body>
      </Card>
    );
}

export default CreateEventForm