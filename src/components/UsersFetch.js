import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import '../App.css';
import { fetchUsers } from '../actions';

export default function UsersFetch() {
    const dispatch = useDispatch();
    dispatch(fetchUsers());
    const users = useSelector(state => state.fetchData.users);
    // console.log(users);
    return (
        <div className='users-list'>
            <h3>Users List</h3>
            <ul>
                {users.map(data => (
                    <li key={data.id}> {data.name}</li>
                ))}
            </ul>
        </div>
    );
}