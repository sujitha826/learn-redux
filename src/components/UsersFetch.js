import axios from 'axios';
import { fetchUsersFailure, fetchUsersRequest, fetchUsersSuccess } from '../actions';
import React from "react";
import { useDispatch } from 'react-redux';
import './App.css';

const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest);
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(resonse => {
                const users = resonse.data;
                dispatch(fetchUsersSuccess(users));
            })
            .catch(error => {
                dispatch(fetchUsersFailure(error.message));
            })
    }
}

export default function usersFetch() {
    const dispatch = useDispatch();
    const users = dispatch(fetchUsers);
    return (
        <div className='users-list'>
            <h2>Users List</h2>
            <ul>
                {users.map((data) => (
                    <li key={data.id}> {data.name}</li>
                ))}
            </ul>
        </div>
    );
}