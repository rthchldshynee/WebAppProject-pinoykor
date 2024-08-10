import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../src/firebase_setup/firebase';

const Welcome = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login'); // Redirect to login page after logging out
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div style={welcomeStyle}>
      <h1 style= {textStyle}>Welcome to the App!</h1>
      <p style= {textStyle}>We&apos;re glad to have you back.</p>
      <img src='../src/assets/welcome.gif'></img><br></br>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

const welcomeStyle = {
    textAlign: 'center',
    marginTop: '50px',
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.647)', // Add background color with transparency
    borderRadius: '10px', // Optional: Add rounded corners for a nicer look
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Optional: Add a subtle shadow
    maxWidth: '500px',
    margin: '50px auto', // Center the welcome box horizontally
};

const textStyle = {
    color: 'black',
};
export default Welcome;