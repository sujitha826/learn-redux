import React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { logout } from '../actions';
import '../App.css';

export default function Profile() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    return (
        <>
            <h2>User Profile</h2>
            <p>Username : {user.username} </p>
            <p>Age : {user.age}</p>
            <p>Email : {user.email}</p>
            <button
                onClick={() => {
                    dispatch(logout());
                }}
            >
                LOGOUT
            </button>
        </>
    );
}