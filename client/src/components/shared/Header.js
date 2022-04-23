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
import LoginModal from "./Login";
import SignupModal from "./Signup";
import { useEffect, useState } from "react";

let loginModal, signupModal;

const Header = ({ handleLogin, handleSignUp }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  useEffect(() => {
    loginModal = document.getElementById("loginModal");
    signupModal = document.getElementById("signupModal");
  }, []);

  window.addEventListener("click", function (e) {
    if (e.target.id === "loginModal" || e.target.id === "signupModal") {
      loginModal.classList.add("hidden");
      signupModal.classList.add("hidden");
    }
  });

  function toggleLoginModal() {
    setShowLogin(!showLogin);
  }

  function toggleSignupModal() {
    setShowSignUp(!showSignUp);
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand style={{ fontWeight: "bold" }} href="/">
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
                marginLeft: "10px"}}
                id="createJourney_btn"
                href="/create-journey"
              >
                Create Journey
              </Button>
            </Nav>
          </Navbar.Collapse>
          <Row>
            <Col>
              <Button
                variant="secondary"
                style={{ whiteSpace: "nowrap" }}
                onClick={toggleSignupModal}
              >
                Sign up
              </Button>
            </Col>
            <Col>
              <Button variant="outline-primary" onClick={toggleLoginModal}>
                Log In
              </Button>
            </Col>
          </Row>
        </Container>
      </Navbar>
      <LoginModal
        show={showLogin}
        setShow={setShowLogin}
        showSignUpModal={() => {
          setShowLogin(false);
          setShowSignUp(true);
        }}
        loginHandler={(u, p) => handleLogin(u, p)}
      />
      <SignupModal
        show={showSignUp}
        setShow={setShowSignUp}
        signUpHandler={(u, p) => handleSignUp(u, p)}
      />
    </>
  );
};

export default Header;
