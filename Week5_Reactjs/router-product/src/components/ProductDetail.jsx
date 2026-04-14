import React from 'react'
import { useParams, useNavigate } from "react-router-dom"

export default function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <h2>Product Detail</h2>
            <p className="id-box">Product id: {id}</p>

            <button onClick={() => navigate('/products')}>
                Back to the list
            </button>
        </div>
    )
}
