import React from 'react';
import Homepage from "./components/homepage";

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