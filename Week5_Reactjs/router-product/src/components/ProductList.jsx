import React from 'react'
import { Link } from 'react-router-dom';

export default function ProductDetail() {
    const products = [
        { id: 1, name: 'Iphone' },
        { id: 2, name: 'Samsung' },
        { id: 3, name: 'Laptop' },
    ]

    return (
        <div className="product-list">
            <h2>List Product</h2>

            <ul>
                {products.map((item) => (
                    <li key={item.id}>
                        <Link to={`/products/${item.id}`}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
