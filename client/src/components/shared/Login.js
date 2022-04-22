import React from 'react';


function LoginModal(){


    return(
        <div className="modalBackground">
            <div className="modalContent">
                <form>
                <h2>Login:</h2>
                <p>
                <label>Username: </label>
                <input type="text" name="username" id="username" />
                </p>
                <p>
                <label>Password: </label>
                <input type="text" name="password" id="password" />
                </p>
                <input type="submit" id="login" value="login"/>
                <button type="button" id="openSignup">Signu Up</button>
                </form>
            </div>
        </div>
        )
}

export default LoginModal;