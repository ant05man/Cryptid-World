// Homepage.jsx
import '../styles/homepage.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Homepage() {
    // Sample array of states
    const states = ['California', 'New-Jersey', 'Arizona', 'Texas', 'Florida', 'etc.'];

    // State to track the selected state
    const [selectedState, setSelectedState] = useState('');

    // React Router's navigate function
    const navigate = useNavigate();

    // Function to handle state selection
    const handleStateChange = (event) => {
        const selected = event.target.value;
        setSelectedState(selected);

        // Navigate to the selected state page
        if (selected) {
            const path = `/states/${selected.toLowerCase()}`;
            navigate(path);
        }
    };

    return (
        <div className="homepage">
            <header>
                <div>
                    <h1>Welcome to Cryptid World</h1>
                    <img src="/green-evil-eyes.jpg" alt="Evil Eyes image" width="200px" />
                </div>
            </header>
            <p>
                Hello fellow cryptid chasers, we will go on a journey across the states to find cryptids from all of the states in the US.
            </p>
            <main>
                <h2>Select a State:</h2>
                <select value={selectedState} onChange={handleStateChange} style={{ width: '200px', height: '50px' }}>
                    <option value="" disabled>Select a State</option>
                    {states.map((state, index) => (
                        <option key={index} value={state}>{state}</option>
                    ))}
                </select>
            </main>
        </div>
    );
}

export default Homepage;
