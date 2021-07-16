import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <div>
            <ul>
                <li><Link class="active" to="/">Home</Link></li>
                <li><Link to="/whoweare">Who we are</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
            </ul>
        </div>
    )
}