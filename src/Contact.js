import React from 'react'
import {Form,Button, Container, Row,Col,Card} from 'react-bootstrap'

function Contact() {
    return (
       

        
        <div className='conta'>
            <Container>
                <Row>
                <Col>
                  <Card>
                <Card.Img className='co1' variant="top" src="https://images.footlocker.com/content/dam/final/footlockercanada/site/backpages/2022/asp/220311-flca-asp-sms-m-asp-v1.jpg" />
                
              </Card>
              
              </Col>

                </Row>
            </Container>
             <h1>Contact Us</h1>
             <p>Have a question? Contact Us. We do our best to respond within one business day.</p>
             <p>Email us</p>
             <p>7 days a week</p>
             <p>Phone:</p> 
             <p>5198939607</p>
            <p>Monday-Friday 10 am - 9 pm (EST)</p>
            


            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

  <Form.Group className="mb-3" controlId="Name">
    <Form.Label>Name</Form.Label>
    <Form.Control type="Name" placeholder="Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="Phone Number">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="Phone Number" placeholder="Phone Number" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            
        </div>
    )
}

export default Contact
