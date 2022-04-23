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
import { useEffect } from "react";


let loginModal, signupModal;

const Header = () => {
  

  useEffect(()=>{
  loginModal=document.getElementById("loginModal");
  signupModal=document.getElementById("signupModal")
 },[]);

 window.addEventListener('click', function(e){
   if(e.target.id === 'loginModal' || e.target.id === 'signupModal'){
    loginModal.classList.add('hidden')
    signupModal.classList.add('hidden')
   }
 }) 


  function toggleLoginModal(){
    loginModal.classList.remove('hidden')    
    console.log('clicked');
  }

  function toggleSignupModal(){
    signupModal.classList.remove('hidden')    
    console.log('clicked');
  }

  function closeBtn_SignupModal(){
    signupModal.classList.add('hidden')
  }

  function signupBtn_LoginModal(){
    loginModal.classList.add('hidden')
    signupModal.classList.remove('hidden')
  }


  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">edJourney</Navbar.Brand>
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
              <Button variant="success"
              style={{ width: "150px" }}
              id="createJourney_btn"
              href='#create'>Create Journey</Button>
            </Nav>
          </Navbar.Collapse>
          <Row>
            <Col>
              <Button 
              variant="secondary" 
              style={{ whiteSpace: "nowrap" }}
              onClick={toggleSignupModal}>
                Sign up
              </Button>
            </Col>
            <Col>
              <Button variant="outline-primary" onClick={toggleLoginModal}>Log In</Button>
            </Col>
          </Row>
        </Container>
      </Navbar>
      <LoginModal signupBtnClick={signupBtn_LoginModal}/>
      <SignupModal closeBtnClick={closeBtn_SignupModal}/>

    </>
  );
};

export default Header;
