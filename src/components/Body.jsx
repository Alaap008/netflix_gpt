import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import Header from './Header'
import withErrorBoundary from './withErrorBoundary'

const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid, email, displayName , photoURL } = user;
                dispatch(addUser({uid, email, displayName , photoURL}));
                navigate('/browse');
            } else {
                dispatch(removeUser());
                navigate('/');
            }
        });
        return (()=> unsubscribe());
    }, []);

    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default withErrorBoundary(Body, 'Body');
