import React from 'react'
import {Row,Container,Col,Card} from 'react-bootstrap'

function Shirt() {
    return (
        <div>
            <Container>
                <Row>
                  <Col>
                  <Card style={{ height: '18rem' }}>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/73101970_om1?wid=559&hei=559&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>shirt 1 </Card.Title>
                  <Card.Text>
                    <p>$130</p>
                    <p>4.5 out of 5</p>
                  </Card.Text>
                
                </Card.Body>
              </Card>
              
              </Col>
              <Col>
                  <Card style={{ height: '18rem' }}>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/73817100_om1?wid=559&hei=559&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>Nike Tee</Card.Title>
                  <Card.Text>
                    $130
                    <p>4.5 out of 5</p>
                  </Card.Text>
                
                </Card.Body>
              </Card>
              
              </Col>
              <Col>
                  <Card style={{ height: '18rem' }}>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/75270310_a1?wid=559&hei=559&fmt=png-alpha"/>
                <Card.Body>
                  <Card.Title>plain tee</Card.Title>
                  <Card.Text>
                    $130
                    <p>4.5 out of 5</p>
                  </Card.Text>
                
                </Card.Body>
              </Card>
             
              </Col>
              <Col>
                  <Card style={{ height: '18rem' }}>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/74009760_om1?wid=559&hei=559&fmt=png-alpha"/>
                <Card.Body>
                  <Card.Title>Adidas</Card.Title>
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

export default Shirt
