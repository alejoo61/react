
import './App.css';
import React  from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navigation from './components/Navigation'
import Beast from './components/Beast'
import Inventory from './components/Inventory'
import Market from './components/Market';
import Staking from './components/Staking'

function App() {



  return (
    <Router>
      <Navigation />

      



      <Routes>
        <Route path="/staking" element={<Staking />} />

        <Route path="/inventory" element={<Inventory />} />

        <Route path="/market" element={<Market />} />

        <Route path="/beast" element={<Beast />} />

      </Routes>
    </Router>

  );
}

export default App;
