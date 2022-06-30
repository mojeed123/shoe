import React from 'react'
import {Row, Container, Col, Card} from 'react-bootstrap'

function Casual() {
    return (
        <div>
            <Container>
                <Row>
                  <Col>
                  <Card>
                <Card.Img className='casual1' variant="top" src="https://images.footlocker.com/is/image/EBFL2/4100365_a1?wid=520&hei=520&fmt=png-alpha" />
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
                <Card.Img className='casual1'  variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStIl4XMwu82DRzDu0gfRF16AM5Lt5ombRGCwtznHiG65ahyTpmqXwW-l1u4cqPlMa_KY8&usqp=CAU" />
                <Card.Body>
                  <Card.Title>Puma Suede</Card.Title>
                  <Card.Text>
                    $130
                    <p>4.5 out of 5</p>
                  </Card.Text>
                
                </Card.Body>
              </Card>
             
              </Col>
              <Col>
                  <Card>
                <Card.Img className='casual1'  variant="top" src="https://images.footlocker.com/is/image/EBFL2/4520977_fr?wid=520&hei=520&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>Converse</Card.Title>
                  <Card.Text>
                  $50
                  <p>5 out of 5</p>
                  </Card.Text>
                
                </Card.Body>
              </Card>
             
              </Col>
              

        </Row> 
        </Container> 
          

            
        </div>
    )
}

export default Casual
