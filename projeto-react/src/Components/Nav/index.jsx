import React from 'react';
import { Link } from "react-router-dom";
import "./nav.css";

export default function Nav() {
    return (
        <nav className="menu-navigation">
            <ul className="menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
                {/* ADICIONE ESTA LINHA PARA O FAQ */}
                <li>
                    <Link to="/faq">FAQ</Link>
                </li>
            </ul>
        </nav>
    );
}
