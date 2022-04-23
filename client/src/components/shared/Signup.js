import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function SignupModal({ show, setShow, signUpHandler }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onClickSignUp(e) {
    e.preventDefault();
    if (username !== "" && password !== "") {
      signUpHandler(username, password);
    }
  }

  return (
    <Modal
      show={show}
      onHide={setShow}
      className="modalBackground hidden"
      id="signupModal"
    >
      <Modal.Body>
        <div className="modalContent">
          <form>
            <h2>Sign Up</h2>
            <div className="modalContent_inputContainer">
              <p>
                <label>Username</label>
                <input
                  type="text"
                  name="signup_username"
                  id="signup_username"
                  onChange={(e) => setUsername(e.currentTarget.value)}
                />
              </p>
              <p>
                <label>Password</label>
                <input
                  type="text"
                  name="signup_password"
                  id="signup_password"
                  onChange={(e) => setPassword(e.currentTarget.value)}
                />
              </p>
            </div>
            <div className="modalContent_btnContainer">
              <Button type="submit" value="signup" onClick={onClickSignUp}>
                Signup
              </Button>

              <Button
                type="button"
                variant="outline-primary"
                value="closeModal"
                onClick={() => setShow(false)}
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
