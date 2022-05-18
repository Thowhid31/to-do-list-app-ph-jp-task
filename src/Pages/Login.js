import React from 'react';
import auth from '../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    return (
        <div>
            <h1>Login First for Go To Do List</h1>
            <button
                        onClick={() => signInWithGoogle()}
                        className="todo-class3">Continue with Google</button>
        </div>
    );
};

export default Login;