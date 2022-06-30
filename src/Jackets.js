import React from 'react'
import {Row,Col,Container,Card} from 'react-bootstrap'

function Jackets() {
    return (
        <div>
            <Container>
                <Row>
                  <Col>
                  <Card style={{ height: '18rem' }}>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/7977652_om1?wid=559&hei=559&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>Womens Nike Swoosh Jacket</Card.Title>
                  <Card.Text>
                    <p>$130</p>
                    <p>4.5 out of 5</p>
                  </Card.Text>
                
                </Card.Body>
              </Card>
              
              </Col>
              <Col>
                  <Card style={{ height: '18rem' }}>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/79776001_om1?wid=559&hei=559&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>Womens Nike Sharp Jacket</Card.Title>
                  <Card.Text>
                    $130
                    <p>4.5 out of 5</p>
                  </Card.Text>
                
                </Card.Body>
              </Card>
              
              </Col>
              <Col>
                  <Card style={{ height: '18rem' }}>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/47606992_a1?wid=559&hei=559&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>Mens Iconcic T7 Puma Jacket</Card.Title>
                  <Card.Text>
                    $130
                    <p>4.5 out of 5</p>
                  </Card.Text>
                
                </Card.Body>
              </Card>
             
              </Col>
              <Col>
                  <Card style={{ height: '18rem' }}>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/48691760_om1?wid=559&hei=559&fmt=png-alpha
" />
                <Card.Body>
                  <Card.Title>Mens Adidas Jacket</Card.Title>
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

export default Jackets
