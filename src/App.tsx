import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ScrollToTop from './routes/ScrollToTop';
import Homepage from './routes/Homepage';
import IBDP from './routes/IBDP';
import ALevel from './routes/ALevel';
import IGCSE from './routes/IGCSE';
import './App.css';

function App() {
    return (
        <div className="App" translate="no">
            <Router basename={process.env.PUBLIC_URL}>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Homepage />}/>
                    <Route path="/ibdp" element={<IBDP />}/>
                    <Route path="/a-level" element={<ALevel />}/>
                    <Route path="/igcse" element={<IGCSE />}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
