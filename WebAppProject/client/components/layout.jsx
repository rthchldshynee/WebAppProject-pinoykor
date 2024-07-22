import React from 'react';
import { Link } from 'react-router-dom';
import teamLogo from '../src/assets/PinoykorLogo.png';

export default function Layout({ children }) {
    return (
        <>
            <div className="header">
                <img src={teamLogo} alt="Team Logo" className="teamLogo" />
                <h1 className="appTitle">Magic Chef App</h1>
            </div>
            
            <nav className="navigation">
                <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/recipe">Recipe</Link>
            </nav>
            <div className="content">
                {children}
            </div>
            <footer className="footer">
                <div className="footer-content">
                    <p>&copy; 2024 Magic Chef App. All rights reserved.</p>
                    <p>
                        <Link to="/privacy">Privacy Policy</Link> | <Link to="/terms">Terms of Service</Link>
                    </p>
                </div>
            </footer>
        </>
    );
}