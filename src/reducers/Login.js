import react, { useState } from 'react';

export default function Login() {
    const [username, setUsername] = useState("");
    const [showprofile, setShowprofile] = useState(false);

    return (
        <>
            <input type="text" placeholder='Username...' onClick={(e) => setUsername(e.target.value)} />
            <input type="text" placeholder='Password...' />
            <button onClick={() => setShowprofile(true)}>LOGIN</button>
            {showprofile && <h2>{username}</h2>}

        </>
    );
}