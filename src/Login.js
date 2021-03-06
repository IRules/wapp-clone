import React from 'react'
import { Button } from '@material-ui/core';
import './Login.css'
import { auth, providerg, providerf } from './firebase';
import { useStateValue } from './Chat/StateProvider';
import { actionTypes } from './reducer';
function Login() {

    const [{}, dispatch] =  useStateValue();

    const signInG = () => {
      auth.signInWithPopup(providerg).then(result => (
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      )).catch((error) => (console.log(error)))
    };
    const signInF = () => {
      auth.signInWithPopup(providerf).then(result => (
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      )).catch((error) => (console.log(error)))
    };

    const signInM = () => {};
    return (
        <div className="login">
            <div className="login__container">
            <div class="col">
            <Button onClick={signInG}  class="google btn">
          <i class="fa fa-google fa-fw"></i> Login with Google+
        </Button  >    
        <Button onClick={signInF}  class="fb btn">
          <i class="fa fa-facebook fa-fw"></i> Login with Facebook
        </Button>
        <Button onClick={signInM} class="twitter btn">
          <i class="fas fa-envelope fa-fw"></i> Login with Email - Soon
        </Button>
              </div>  
            </div>
        </div>
    )
}

export default Login
