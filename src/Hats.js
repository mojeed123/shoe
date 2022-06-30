import React from 'react'
import {Row,Container,Col,Card} from 'react-bootstrap'

function Hats() {
    return (
        <div>
            <Container>
                <Row>
                  <Col>
                  <Card style={{ height: '18rem' }}>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/9358982_a1?wid=559&hei=559&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>Black Cap</Card.Title>
                  <Card.Text>
                    <p>$130</p>
                    <p>4.5 out of 5</p>
                  </Card.Text>
                
                </Card.Body>
              </Card>
              
              </Col>
              <Col>
                  <Card style={{ height: '18rem' }}>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/93464100_a1?wid=559&hei=559&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>Bucket Hat</Card.Title>
                  <Card.Text>
                    $130
                    <p>4.5 out of 5</p>
                  </Card.Text>
                
                </Card.Body>
              </Card>
              
              </Col>
              <Col>
                  <Card style={{ height: '18rem' }}>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/83991592_a1?wid=559&hei=559&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>White Cap</Card.Title>
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

export default Hats
