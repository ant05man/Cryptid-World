// Homepage.jsx
import '../styles/homepage.css';
import React, { useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import California from './california';
import NewJersey from './new-jersey';
function Homepage() {
    // Sample array of states
    const states = ['Arizona','California', 'New-Jersey', 'Texas', 'Florida', 'etc.'];

    // State to track the selected state
    const [selectedState, setSelectedState] = useState('');

    // React Router's navigate function
    const navigate = useNavigate();

    // Function to handle state selection
    const handleStateChange = (event) => {
        const selected = event.target.value;
        setSelectedState(selected);

        // Use navigate to programmatically navigate to the selected state's page
        if (selected) {
            navigate(`/states/${selected.toLowerCase()}`);
        }
    };

    return (
        <div className="homepage">
            <header>
                <div>
                <h1>Welcome to Cryptid Land</h1>
                <img src="/green-evil-eyes.jpg" alt="Evil Eyes image" width="200px"></img>
                </div>
            </header>
            <p>
                Hello fellow cryptid chasers, we will go on a journey across the states to find cryptids from all of the states in the US
            </p>
            <main>
                <h2>Select a State:</h2>
                <select value={selectedState} onChange={handleStateChange} style={{ width: '200px', height:'50px' }}>
                    <option value="" disabled>Select a State</option>
                    {states.map((state, index) => (
                        <option key={index} value={state}>{state}</option>
                    ))}
                </select>

                {/* Routes for individual state pages */}
                <Routes>
                    <Route path="/states/california" element={<California />} />
                    {/* Add routes for other states as needed */}
                    <Route path="/states/new-jersey" element={<NewJersey />} />
                </Routes>

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
