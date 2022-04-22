import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand style={{ fontWeight: "bold" }} href="#home">
            edJourney
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">All Journeys</Nav.Link>
              <Nav.Link href="#link">Saved Journeys</Nav.Link>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
          <Row>
            <Col>
              <Button variant="secondary" style={{ whiteSpace: "nowrap" }}>
                Sign up
              </Button>
            </Col>
            <Col>
              <Button variant="outline-primary">Log In</Button>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
