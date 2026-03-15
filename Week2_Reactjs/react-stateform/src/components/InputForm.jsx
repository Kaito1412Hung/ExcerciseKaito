import React, { useState } from 'react'
import './InputForm.css'

function InputForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="form-container">
            <h2>Form nhập thông tin người dùng</h2>

            <div className="input-group">
                <label>Tên:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nhập tên của bạn"/>
            </div>

            <div className="input-group">
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Nhập email của bạn"/>
            </div>

            <div className="display-result">
                <h3>Dữ liệu hiển thị:</h3>
                <p><strong>Tên:</strong> {formData.name || '---'}</p>
                <p><strong>Email:</strong> {formData.email || '---'}</p>
            </div>
        </div>
    )
}
export default InputForm;