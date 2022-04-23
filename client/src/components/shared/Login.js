import React from 'react';
import Button from 'react-bootstrap/Button'

function LoginModal({signupBtnClick}){

    function handleSignupBtn(){
        signupBtnClick()
    }

    return(
        <div className="modalBackground hidden" id="loginModal">
            <div className="modalContent">
                <form>
                <h2>Login</h2>
                <div className="modalContent_inputContainer">
                    <p>
                        <label>Username: </label>
                        <input type="text" name="username" id="username" />
                    </p>
                    <p>
                        <label>Password: </label>
                        <input type="text" name="password" id="password" />
                    </p>
                </div>
                <div className="modalContent_btnContainer">

                    <Button type="submit" value="login">Login</Button>

                    <Button type="button" variant="outline-primary" value="openSignupModal"
                    onClick={handleSignupBtn}>Sign Up</Button>
                    
                    
                    </div>
                </form>
            </div>
        </div>
        )
}

export default LoginModal;