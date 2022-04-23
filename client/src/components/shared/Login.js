import React,{useState} from "react";
import { Button, Modal } from "react-bootstrap";

function LoginModal({ showSignUpModal, show, setShow, loginHandler }) {

    const [username, setUserName ] = useState("")
    const [password, setPassword ] = useState("")

  function OnClickLogin(e) {
    e.preventDefault()
    loginHandler(username, password)
  }

  return (
    <Modal show={show} onHide = {setShow} className="modalBackground hidden" id="loginModal">
      <Modal.Body>
        <div className="modalContent">
          <form>
            <h2>Login</h2>
            <div className="modalContent_inputContainer">
              <p>
                <label>Username</label>
                <input 
                onChange = {(e) => setUserName(e.currentTarget.value)}
                type="text" name="username" id="username" />
              </p>
              <p>
                <label>Password</label>
                <input 
                onChange = {(e) => setPassword(e.currentTarget.value)}
                type="text" name="password" id="password" />
              </p>
            </div>
            <div className="modalContent_btnContainer">
              <Button type="submit" value="login"
                onClick = {OnClickLogin}
              >
                Login
              </Button>

              <Button
                type="button"
                variant="outline-primary"
                value="openSignupModal"
                onClick={showSignUpModal}
              >
                Sign Up
              </Button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default LoginModal;
