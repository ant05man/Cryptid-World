import React from 'react';
import Homepage from "./components/homepage";
import California from "./components/california";
import NewJersey from './components/new-jersey';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.css'; // CSS file


function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/states/california" element={<California />} />
                    <Route path="/states/new-jersey" element={<NewJersey />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;