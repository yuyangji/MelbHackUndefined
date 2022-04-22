import React from 'react';


function SignupModal(){


    return(
        <div className="modalBackground">
            <div className="modalContent">
                <form>
                <h2>Signup:</h2>
                <p>
                <label>Username: </label>
                <input type="text" name="signup_username" id="signup_username" />
                </p>
                <p>
                <label>Password: </label>
                <input type="text" name="signup_password" id="signup_password" />
                </p>
                <input type="submit" id="login" value="Signup"/>
                <button type="button" id="openSignup">Cancel</button>
                </form>
            </div>
        </div>
        )
}

export default SignupModal;