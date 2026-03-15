import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './UserList.css'

function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async() => {
            try {
                setLoading(true);
                const response = await fetch('https://jsonplaceholder.typicode.com/users');

                if(!response.ok) {
                    throw new Error("Unable to retrieve data from the server");
                }

                const data = await response.json();
                console.log(data);
                setUsers(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchUsers()
    }, [])

    if(loading) {
        return <div className="status-loading">Loading data</div>;
    }

    if(error) {
        return <div className="status-error">Lỗi: {error}</div>;
    }

    return (
        <div className="user-container">
            <h2>User list</h2>
            <ul className="user-list">
                {users.map((user) => (
                    <li key={user.id} className="user-item">
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList;
