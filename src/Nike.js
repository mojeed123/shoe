import React from 'react'
import { Container, Row,Col,Card } from 'react-bootstrap'

function Nike() {
    return (
        <div>
            <Container>
                <Row>
                <Col>
                  <Card style={{ height: '18rem' }}>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/96905032_a1?wid=559&hei=559&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>Nike Bag</Card.Title>
                  <Card.Text>
                    <p>$130</p>
                    <p>4.5 out of 5</p>
                  </Card.Text>
                
                </Card.Body>
              </Card>
              
              </Col>
              <Col>
                  <Card>
                <Card.Img className='casual1' variant="top" src="https://images.pexels.com/photos/10726876/pexels-photo-10726876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <Card.Body>
                  <Card.Title>Nike Air Force 1</Card.Title>
                  <Card.Text>
                    $130
                    <p>4.5 out of 5</p>
                  </Card.Text>
                
                </Card.Body>
              </Card>
              
              </Col>
              <Col>
                  <Card>
                <Card.Img className='casual1' variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcZinGI61q7WKMCczx106vOPHtWRjczq4DvQ&usqp=CAU" />
                <Card.Body>
                  <Card.Title>Nike slides</Card.Title>
                  <Card.Text>
                    $130
                    <p>4.5 out of 5</p>
                  </Card.Text>
                
                </Card.Body>
              </Card>
              
              </Col>
              <Col>
                  <Card>
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
                </Row>
            </Container>
            
        </div>
    )
}

export default Nike
