import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown,Container,Row,Col,Dropdown,NavItem,NavLink,Nav,Navbar, Card,Form,Button} from 'react-bootstrap';



function Navi() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="black">
        <Container>
          <Navbar.Brand  href="/home">SHOE LOUNGE</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='free'  activeKey={window.location.pathname}>

              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/location">location</Nav.Link>
              <Nav.Link href="#mens">Mens</Nav.Link>
              
              
              <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink}/>
                <Dropdown.Menu className="large-dropdown-menu">
                  <div className="dropdown-menu-wrapper">
                    <div>
                      <ul>
                        <li className="dropdown-header">
                          <div className="menu-icon-wrapper">
                            <div><i className="col-2 fa fa-2x fa-graduation-cap main-theme-color"/></div>
                            <div><NavDropdown.Item href="#mens"><b>Shoes</b></NavDropdown.Item></div>
                          </div>
                        </li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/running">Running</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/casual">Casual</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/shoes">Shoes</NavDropdown.Item></li>
                        
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li className="dropdown-header">
                          <div className="menu-icon-wrapper">
                            <div><i className="col-2 fa fa-2x fa-flask main-theme-color"/></div>
                            <div><NavDropdown.Item href="/clothing"><b>Clothing</b></NavDropdown.Item></div>
                          </div>
                        </li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/shirt">Shirt</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/hoodies">Hoodies</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/jackets">Jackets</NavDropdown.Item></li>
                        
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li className="dropdown-header">
                          <div className="menu-icon-wrapper">
                            <div><i className="col-2 fa fa-2x fa-envira main-theme-color"/></div>
                            <div><NavDropdown.Item href="/accessories"><b>Accessories</b></NavDropdown.Item></div>
                          </div>
                        </li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/hats">Hats</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/bags">Bags</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/socks">Socks</NavDropdown.Item></li>
                        
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li className="dropdown-header">
                          <div className="menu-icon-wrapper">
                            <div><i className="col-2 fa fa-2x fa-microchip main-theme-color"/></div>
                            <div><NavDropdown.Item href="/brands"><b>Brands</b></NavDropdown.Item></div>
                          </div>
                        </li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/Nike">Nike</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/Adidas">Adidas</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/Puma">Puma</NavDropdown.Item></li>
                        
                      </ul>
                    </div>
                    </div>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link href="#womens">Womens</Nav.Link>
              <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink}/>
                <Dropdown.Menu className="large-dropdown-menu">
                  <div className="dropdown-menu-wrapper">
                    <div>
                      <ul>
                        <li className="dropdown-header">
                          <div className="menu-icon-wrapper">
                            <div><i className="col-2 fa fa-2x fa-graduation-cap main-theme-color"/></div>
                            <div><NavDropdown.Item href="#mens"><b>Shoes</b></NavDropdown.Item></div>
                          </div>
                        </li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/running">Running</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/casual">Casual</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/shoes">Shoes</NavDropdown.Item></li>
                        
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li className="dropdown-header">
                          <div className="menu-icon-wrapper">
                            <div><i className="col-2 fa fa-2x fa-flask main-theme-color"/></div>
                            <div><NavDropdown.Item href="/clothing"><b>Clothing</b></NavDropdown.Item></div>
                          </div>
                        </li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/shirt">Shirt</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/hoodies">Hoodies</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/jackets">Jackets</NavDropdown.Item></li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li className="dropdown-header">
                          <div className="menu-icon-wrapper">
                            <div><i className="col-2 fa fa-2x fa-envira main-theme-color"/></div>
                            <div><NavDropdown.Item href="/accessories"><b>Accessories</b></NavDropdown.Item></div>
                          </div>
                        </li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/hats">Hats</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/bags">Bags</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/socks">Socks</NavDropdown.Item></li>
                        
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li className="dropdown-header">
                          <div className="menu-icon-wrapper">
                            <div><i className="col-2 fa fa-2x fa-microchip main-theme-color"/></div>
                            <div><NavDropdown.Item href="/brands"><b>Brands</b></NavDropdown.Item></div>
                          </div>
                        </li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/nike">Nike</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/adidas">Adidas</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/puma">Puma</NavDropdown.Item></li>
                      </ul>
                    </div>
                    
                    
                  </div>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link href="#kids">Kids</Nav.Link>
              <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink}/>
                <Dropdown.Menu className="large-dropdown-menu">
                  <div className="dropdown-menu-wrapper">
                    <div>
                      <ul>
                        <li className="dropdown-header">
                          <div className="menu-icon-wrapper">
                            <div><i className="col-2 fa fa-2x fa-graduation-cap main-theme-color"/></div>
                            <div><NavDropdown.Item href="#mens"><b>Shoes</b></NavDropdown.Item></div>
                          </div>
                        </li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/running">Running</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/casual">Casual</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/shoes">Shoes</NavDropdown.Item></li>
                        
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li className="dropdown-header">
                          <div className="menu-icon-wrapper">
                            <div><i className="col-2 fa fa-2x fa-flask main-theme-color"/></div>
                            <div><NavDropdown.Item href="/clothing"><b>Clothing</b></NavDropdown.Item></div>
                          </div>
                        </li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/shirt">Shirt</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/hoodies">Hoodies</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/jackets">Jackets</NavDropdown.Item></li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li className="dropdown-header">
                          <div className="menu-icon-wrapper">
                            <div><i className="col-2 fa fa-2x fa-envira main-theme-color"/></div>
                            <div><NavDropdown.Item href="/accessories"><b>Accessories</b></NavDropdown.Item></div>
                          </div>
                        </li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/hats">Hats</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/bags">Bags</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/socks">Socks</NavDropdown.Item></li>
                        
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li className="dropdown-header">
                          <div className="menu-icon-wrapper">
                            <div><i className="col-2 fa fa-2x fa-microchip main-theme-color"/></div>
                            <div><NavDropdown.Item href="/brands"><b>Brands</b></NavDropdown.Item></div>
                          </div>
                        </li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/nike">Nike</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/adidas">Adidas</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/puma">Puma</NavDropdown.Item></li>
                      </ul>
                    </div>
                   
                  </div>
                </Dropdown.Menu>
              </Dropdown>
              {/* <Nav.Link href="#brands">Brands</Nav.Link>
              <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink}/>
                <Dropdown.Menu className="large-dropdown-menu">
                  <div className="dropdown-menu-wrapper"> */}
                    
                      
                  
                   
                        {/* <Row>
                        <Col>
                         <Card>
                        <Card.Img className='bran1' variant="top" src="https://images.footlocker.com/content/dam/final/eastbay/site/backpages/2020/1-january/brands/20200110-BrandLogos_Nike.svg" />
                       </Card>
                       </Col>
                       
                       
                      
                        <Col>
                        <Card>
                        <Card.Img className='bran1' variant="top" src="https://images.footlocker.com/content/dam/Resources/shared/brand-logos/adidas/adidas-originals.svg" />
                        
                        </Card>
                        
                       </Col>
                       
                        
                        

                        
                        <Col>
                        <Card>
                       <Card.Img className='bran1' variant="top" src="https://images.footlocker.com/content/dam/final/eastbay/site/backpages/2020/1-january/brands/20200110-BrandLogos_Puma.svg" />
                      </Card>
                      </Col>
                      </Row>
                      
                     
                     </div>
                  </Dropdown.Menu>
                  </Dropdown> */}
              
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Form className='searc'>
              <Form.Group className="mb-3" controlId="Search">
              <Row>
                <Col>
              <Form.Control  type="Text" placeholder="Search" />
              </Col>
              <Col>
              
              <Button variant="primary" type="search">
              Search
              </Button>
              </Col>
              

              </Row>
              </Form.Group>
              </Form>

            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    )
}

export default Navi
