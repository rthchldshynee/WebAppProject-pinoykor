import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import teamLogo from '../src/assets/PinoykorLogo.png';
import '../src/index.css'; // Ensure this is the correct path to your global CSS

const Layout = ({ children }) => {
    return (
        <div id="root">
            <header className="header">
                <img src={teamLogo} alt="Team Logo" className="teamLogo" />
                <h1 className="appTitle">Magic Chef App</h1>
            </header>
            
            <nav className="navigation">
                <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/recipe">Recipe</Link> | <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
            </nav>
            
            <main className="content-container">
                {children}
            </main>
            
            <footer className="footer">
                <div className="footer-content">
                    <p>&copy; 2024 Magic Chef App. All rights reserved.</p>
                    <p>
                        <Link to="/privacy">Privacy Policy</Link> | <Link to="/terms">Terms of Service</Link>
                    </p>
                </div>
            </footer>
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
