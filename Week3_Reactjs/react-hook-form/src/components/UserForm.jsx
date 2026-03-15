import React, { useState } from 'react'
import './UserForm.css'

function UserForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Data submitted:", formData);
    }

    return (
        <div className="form-container">
            <h2>User Information</h2>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Full name</label>

                    <input type="text" value={formData.name} onChange={handleChange} placeholder="Enter name" />
                </div>

                <div className="form-group">
                    <label>Email:</label>

                    <input type="text" value={formData.email} onChange={handleChange} placeholder="Enter age" />
                </div>

                <button type="submit">Gửi thông tin</button>
            </form>
        </div>
    )
}

export default UserForm;
