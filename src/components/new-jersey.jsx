// NewJersey.jsx
// the style of this page is from homepage.jsx because that takes priority
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/new-jersey.css';

const creatures = [
    { name: 'Jersey Devil', imageUrl: `'/images/The-Jersey-Devil.png'`}
];

function NewJersey() {
    return (
        <div>
            <h1>Cryptids of New Jersey</h1>
            <div class="njnavbar">
                <Link className="njnav-link" to="/">Home</Link>
</div>
            <p></p>
            <table>
                <thead>
                    <tr>
                        <th>Creature</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {creatures.map((creature, index) => (
                        <tr key={index}>
                            <td>{creature.name}</td>
                            <td><img src={creature.imageUrl} alt={creature.name} width="100" /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
}

export default NewJersey;
