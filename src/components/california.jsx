// California.jsx
// the style of this page is from hompage.jsx because that takes priority
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/california.css';

function California() {
    return (
        <div>
            <h1>Cryptids of California</h1>
            <div class="navbar">
                <Link className="nav-link" to="/">Home</Link>
</div>
            <p></p>
        </div>
    );
}

export default California;
