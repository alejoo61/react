
import './App.css';
import React  from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navigation from './components/Navigation'
import Beast from './components/Beast'
import Inventory from './components/Inventory'
import Market from './components/Market';
import Staking from './components/Staking'
import {useEffect, useState } from 'react'
import axios from 'axios'
import Home from './components/Home';



function App() {
  const [coins, setCoins] =useState([])

  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=wild-island-game&order=market_cap_desc&per_page=10&page=1&sparkline=false"

  const fetchCoins = (url) => {
  fetch(url)
.then(response => response.json())
.then(data => setCoins(data))
.catch(error => console.log(error))
  }

 useEffect(() => {
   fetchCoins(url);
 }, [])


  return (
    <Router>
      <Navigation />
      <Market />
      

      



      <Routes>
        <Route path="/staking" element={<Staking />} />

        <Route path="/inventory" element={<Inventory coins={coins}  />}  />

        <Route path="/market" element={<Market coins={coins} />} />

        <Route path="/beast" element={<Beast />} />

      </Routes>
    </Router>

  );
}

export default App;
