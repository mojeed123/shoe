import React from 'react'
import {Row,Col,Container,Card} from 'react-bootstrap'

function Hoodies() {
    return (
        <div>
             <Container>
                <Row>
                  <Col>
                  <Card style={{ height: '18rem' }}>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/74889141_om1?wid=559&hei=559&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>Nike Hoodie</Card.Title>
                  <Card.Text>
                    <p>$130</p>
                    <p>4.5 out of 5</p>
                  </Card.Text>
                
                </Card.Body>
              </Card>
              
              </Col>
              <Col>
                  <Card style={{ height: '18rem' }}>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/64721543_a1?wid=559&hei=559&fmt=png-alpha

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
              <Col>
                  <Card style={{ height: '18rem' }}>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/13864802_om1?wid=559&hei=559&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>Yeezy Hoodie</Card.Title>
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

export default Hoodies
