import axios from 'axios';
import { fetchUsersFailure, fetchUsersRequest, fetchUsersSuccess } from '../actions';
import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

const fetchUsers = () => {
    const dispatch = useDispatch();
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


}