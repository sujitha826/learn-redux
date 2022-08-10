import axios from 'axios';
import { fetchUsersFailure, fetchUsersRequest, fetchUsersSuccess } from '../actions';
import React from "react";
import { useDispatch } from 'react-redux';

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
        <div>
            <h2>Users list</h2>
        </div>
    );
}