// Homepage.jsx
import '../styles/homepage.css';
import React, { useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import California from './california';
import NewJersey from './new-jersey';
import axios from 'axios'; // Import axios for making HTTP requests

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

        // Fetch state data from the backend when a state is selected
        if (selected) {
            axios.get(`${process.env.REACT_APP_API_URL}/api/states/${selected.toLowerCase()}`)
                .then(response => {
                    console.log('Response', response);
                    // Handle response data update state with fetched data
                    const path = `/states/${selected.toLowerCase()}`;
                    navigate(path);
                })
                .catch(error => {
                    console.error('Error fetching state data:', error);
                });
        }
    };

    return (
        <div className="homepage">
            <header>
                <div>
                    <h1>Welcome to Cryptid World</h1>
                    <img src="/green-evil-eyes.jpg" alt="Evil Eyes image" width="200px"></img>
                </div>
            </header>
            <p>
                Hello fellow cryptid chasers, we will go on a journey across the states to find cryptids from all of the states in the US
            </p>
            <main>
                <h2>Select a State:</h2>
                <select value={selectedState} onChange={handleStateChange} style={{ width: '200px', height: '50px' }}>
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
                        <p>Content  {selectedState}</p>
                    </div>
                )}
            </main>
            
            {/* Routes for individual state pages */}
            <Routes>
                <Route path="/states/california" element={<California />} />
                <Route path="/states/new-jersey" element={<NewJersey />} />
                {/* Add routes for other states as needed */}
            </Routes>
        </div>
    );
}

export default Homepage;
