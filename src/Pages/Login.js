import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import {useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import todophoto from '../image/4697260.png';

const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/todo';

    if(user){
        navigate(from, {replace: true})
    }
    return (
        <div>
        <h2>Welcome To Do List</h2>
        <p>Please Login with Google <br/>for access To do List</p>
            <div className='login-class'>       
                <button 
                onClick={()=> signInWithGoogle()}
                className='google-button'>
                    Sign In with Google</button>
            </div>
            <div>
        <img className='todophoto' src={todophoto} alt="" />
            </div>
        </div>
    );
};

export default Login;