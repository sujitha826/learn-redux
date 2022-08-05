import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../actions';
import '../App.css';

export default function Profile() {
    const user = useSelector((state) => state.user);
    const theme = useSelector(state => state.theme)
    const dispatch = useDispatch();

    return (
        <>
            <h2 style={{ color: theme }}>User Profile</h2>
            <p style={{ color: theme }}>Username : {user.username} </p>
            <p style={{ color: theme }}>Age : {user.age}</p>
            <p style={{ color: theme }}>Email : {user.email}</p>

            <button className='butn'
                onClick={() => {
                    dispatch(logout());
                }}
            >
                LOGOUT
            </button>
        </>
    );
}