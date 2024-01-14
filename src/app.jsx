import React from 'react';
import Homepage from "./components/homepage";
import California from "./components/california";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.css'; // CSS file


function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/states/california" element={<California />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;