import React from 'react';
import './nav.css';
import {NavLink} from 'react-router-dom';

export default props=>(
    <ul className="nav nav-tabs mt-3">
        <li className="nav-item"><NavLink activeClassName="active selected" exact to="/" className="nav-link">Bienvenido</NavLink></li>
        <li className="nav-item"><NavLink activeClassName="active selected" to="/macarrones" className="nav-link">Macarrones</NavLink></li>
        <li className="nav-item"><NavLink activeClassName="active selected" to="/contact" className="nav-link">Contactanos</NavLink></li>
        <li className="nav-item"><NavLink activeClassName="active selected" to="/gifts-and-parties" className="nav-link">Regalos y Fiestas</NavLink></li>
    </ul>
)