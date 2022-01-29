
import {Link} from 'react-router-dom'
import React, { Component } from 'react'

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to="https://wildislandnft.com/">
                    <img src='/img/ICONO.png' width="150" height="150" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                      
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item me-2" id='madera'>
                                <Link className="nav-link h3 text-white" to="/Staking" > <img src='/img/training.png' width="200"  /></Link>
                            </li>
                            <li className="nav-item me-2" id='madera'>
                                <Link className="nav-link h3 text-white" to="/inventory" ><img src='/img/inventory.png' width="200"  /></Link>
                            </li>
                            <li className="nav-item me-2" id='madera'>
                                <Link className="nav-link h3 text-white" to="/beast" > <img src='/img/beast.png' width="200"  /></Link>
                            </li>
                            <li class="nav-item" id='madera'>
                                <Link className="nav-link h3 text-white"  to="/market" ><img src='/img/market.png' width="200"  /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
