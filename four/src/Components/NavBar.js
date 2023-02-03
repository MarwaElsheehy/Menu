import React, { useState } from "react";
import { Button, Container, Form, Nav, Navbar, Row } from "react-bootstrap";
const NavBar = ({search})=>{
  const [text, settext] = useState()
  const onSearch = () =>{
    search(text)
    settext('')
  }
    return(
    <>
    <Row>
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#">Bistro</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
        </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=> settext(e.target.value)}
              value={text}/>
            <Button onClick={()=> onSearch()}variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>
    </>
    )
}
export default NavBar