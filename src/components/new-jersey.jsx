// NewJersey.jsx
// the style of this page is from homepage.jsx because that takes priority
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/new-jersey.css';

const creatures = [
    { name: 'Jersey Devil', imageUrl: '/The-Jersey-Devil.png', location: 'Pine Barrens, NJ', description: 'Winged Chimera/Human hybrid, that reportedly has combination of different characteristics of other animals such as wings of a bat, hoofed feet, two short front legs, horse face/head, and long tail'},
    {name: 'Sandy Hook Sea Serpent', imageUrl: '/Sandy-Hook-Sea-Serpent.jpg', location: 'Coast of Sandy Hook, in the Atlantic Ocean', description: 'Serpentine, huge, undulating creature, estimated to be around 50ft long. Horned bulldog-like face whose body tapers into sharply pointed tail.' }
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
                        <th>Location</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {creatures.map((creature, index) => (
                        <tr key={index}>
                            <td>{creature.name}</td>
                            <td><img src={creature.imageUrl} alt={creature.name} width="100" /></td>
                            <td>{creature.location}</td>
                            <td>{creature.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
}

export default NewJersey;
