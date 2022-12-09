import axios from 'axios';
import React from 'react';
import './User.css'
import {useState} from 'react'

const User = () => {
    const [users, setUsers] = useState()
    //axios call to user for username
    // axios.get('https://localhost:8080/api/user/').then(response => {
    //     setUsers(response.data)
    // })
    //user image in the top right corner, or just display username?
    const userName=users.map((user, key) => {
        return (
            <div key={key}>
                <h3>{user.username}</h3>
            </div>
        )
    })
    return (
        <div>

        </div>
    )
}

export default User