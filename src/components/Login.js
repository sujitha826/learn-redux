import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../actions';
import '../App.css';


export default function Login() {
    const [username, setUsername] = useState("");
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();

    const theme = useSelector(state => state.theme);

    return (
        <div className="login" style={{ color: theme }}>
            <div className="form-input"><input type="text" placeholder='Username...' onChange={(e) => setUsername(e.target.value)} />
                <input type="text" placeholder='Password...' />
                <input type="number" placeholder='Age...' onChange={(e) => setAge(e.target.value)} />
                <input type="text" placeholder='Email...' onChange={(e) => setEmail(e.target.value)} />


                <button
                    onClick={() => dispatch(login({ username: username, age: age, email: email }))}>LOGIN</button>
            </div>
        </div>
    );
}