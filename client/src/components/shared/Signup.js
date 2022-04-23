import React from 'react';
import Button from 'react-bootstrap/Button'


function SignupModal({closeBtnClick}){
    
    function handleCloseBtn(){
        closeBtnClick()
    }
    return(
        <div className="modalBackground hidden" id="signupModal">
            <div className="modalContent">
                <form>
                <h2>Sign Up</h2>
                <div className="modalContent_inputContainer">
                    <p>
                        <label>Username: </label>
                        <input type="text" name="signup_username" id="signup_username" />
                    </p>
                    <p>
                        <label>Password: </label>
                        <input type="text" name="signup_password" id="signup_password" />
                    </p>
                </div>
                <div className="modalContent_btnContainer">

                    <Button type="submit" value="signup">Signup</Button>

                    <Button type="button" variant="outline-primary" value="closeModal" 
                    onClick={handleCloseBtn}>Close</Button>
                    
                    
                    </div>
                </form>
            </div>
        </div>
        )
}

export default SignupModal;