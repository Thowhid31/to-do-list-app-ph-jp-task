import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import {useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const Login = () => {
    const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    let errorElementOwner;
    if(error){
        errorElementOwner = 
            <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>
    }
 
    if(user){
        navigate(from, {replace: true})
    }
    return (
        <div>
        {errorElementOwner}
            <div>       
                <button 
                onClick={()=> signInWithGoogle()}
                className='btn btn-danger google-button d-block mx-auto'>
                    Sign In with Google</button>
            </div>
        </div>
    );
};

export default Login;