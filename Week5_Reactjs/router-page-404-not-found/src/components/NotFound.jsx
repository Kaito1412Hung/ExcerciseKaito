import React from 'react'
import { Link } from "react-router-dom"
import "../style/NotFound.css"

export default function NotFound() {
    return (
        <div className="container">
            <h1>404</h1>
            <h2>The page you are looking for does not exist</h2>
            <Link to="/" className="btn-home">Back to Home</Link>
        </div>
    )
}
