// Homepage.jsx
import '../styles/homepage.css';
import React, { useState } from 'react';

function Homepage() {
    // Sample array of states
    const states = ['California', 'New Jersey', 'Texas', 'Florida', 'etc.'];

    // State to track the selected state
    const [selectedState, setSelectedState] = useState('');

    // Function to handle state selection
    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
    };

    return (
        <div className="homepage">
            <header>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
                <h1>Welcome to Cryptid Land</h1>
            </header>
            <main>
                <h2>Select a State:</h2>
                <select value={selectedState} onChange={handleStateChange}>
                    <option value="" disabled>Select a State</option>
                    {states.map((state, index) => (
                        <option key={index} value={state}>{state}</option>
                    ))}
                </select>

                {/* Display a message based on the selected state */}
                {selectedState && (
                    <div>
                        <h3>{selectedState} Page</h3>
                        {/* Add content specific to the selected state */}
                        <p>Content for {selectedState}</p>
                    </div>
                )}
            </main>
        </div>
    );
}

export default Homepage;
