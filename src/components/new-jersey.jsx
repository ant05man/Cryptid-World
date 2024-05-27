// NewJersey.jsx
// the style of this page is from homepage.jsx because that takes priority
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/new-jersey.css';

function NewJersey() {
    return (
        <div>
            <h1>Cryptids of New Jersey</h1>
            <div class="njnavbar">
                <Link className="njnav-link" to="/">Home</Link>
</div>
            <p></p>
        </div>
    );
}

export default NewJersey;
