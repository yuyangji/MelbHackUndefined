import React from "react";
import { Button, Modal } from "react-bootstrap";

function SignupModal({ show, closeBtnClick,setShow }) {
  function handleCloseBtn() {
    closeBtnClick();
  }
  return (
    <Modal show={show} onHide = {setShow} className="modalBackground hidden" id="signupModal">
      <Modal.Body>
        <div className="modalContent">
          <form>
            <h2>Sign Up</h2>
            <div className="modalContent_inputContainer">
              <p>
                <label>Username: </label>
                <input
                  type="text"
                  name="signup_username"
                  id="signup_username"
                />
              </p>
              <p>
                <label>Password: </label>
                <input
                  type="text"
                  name="signup_password"
                  id="signup_password"
                />
              </p>
            </div>
            <div className="modalContent_btnContainer">
              <Button type="submit" value="signup">
                Signup
              </Button>

              <Button
                type="button"
                variant="outline-primary"
                value="closeModal"
                onClick={handleCloseBtn}
              >
                Close
              </Button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default SignupModal;
