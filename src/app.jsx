import React from 'react';
import Homepage from "./components/homepage";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.css'; // CSS file


function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;