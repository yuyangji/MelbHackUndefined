import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  Col,
  Row,
} from "react-bootstrap";
import { BsPersonCircle } from "react-icons/bs";

const LoggedHeader = ({ username, logout }) => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/" style={{ fontWeight: "bold" }}>
            edJourney
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">All Journeys</Nav.Link>
              <Nav.Link href="/saved">Saved Journeys</Nav.Link>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <Button
                variant="success"
                style={{
                  width: "150px",
                  marginLeft: "10px",
                }}
                id="createJourney_btn"
                href="/create"
              >
                Create Journey
              </Button>
            </Nav>
          </Navbar.Collapse>
          <Row style={{ heigh: "40px" }}>
            <Col>
              <BsPersonCircle style={{ width: "40px", height: "40px" }} />
            </Col>
            <Col style={{ margin: "auto" }}>{username}</Col>
            <Col>
              <Button
                variant="outline-secondary"
                style={{ whiteSpace: "nowrap" }}
                onClick={logout}
              >
                Log Out
              </Button>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default LoggedHeader;
