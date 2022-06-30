import React from 'react'
import { Container, Row,Col,Card } from 'react-bootstrap'

function Adidas() {
    return (
        <div>
            <Container>
                <Row>
                <Col>
                  <Card>
                <Card.Img   variant="top" src="https://images.footlocker.com/is/image/EBFL2/4520977_fr?wid=520&hei=520&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>Adidas Yeezy Boost</Card.Title>
                  <Card.Text>
                  $130
                  <p>4.5 out of 5</p>
                  </Card.Text>
                
                </Card.Body>
              </Card>
             
              </Col>
              <Col>
                  <Card>
                <Card.Img  variant="top" src="https://images.footlocker.com/is/image/EBFL2/64721543_a1?wid=559&hei=559&fmt=png-alpha

" />
                <Card.Body>
                  <Card.Title>Adidas Hoodie</Card.Title>
                  <Card.Text>
                    $130
                    <p>4.5 out of 5</p>
                  </Card.Text>
                
                </Card.Body>
              </Card>
              
              </Col>
                </Row>
                
            </Container>
            
        </div>
    )
}

export default Adidas
