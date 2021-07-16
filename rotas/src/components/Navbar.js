import React from 'react';
import {Link} from 'react-router-dom';
import {useToggle} from '../context/ToggleProvider';

import './Navbar.css';

function Navbar(){
    const {isLoggedIn} = useToggle();
    return (<div>
                <ul>
                    <li><Link class="active" to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                    <li><Link to="/whoiweare">Who we are</Link></li>
                </ul>;
            </div>)
}

export default Navbar;