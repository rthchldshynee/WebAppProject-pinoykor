import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../src/firebase_setup/firebase';
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        uid: user.uid,
        createdAt: new Date(),
      });

      setSuccess(true);
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      setError(err.message);
    }
  };

  const closeSuccessMessage = () => {
    setSuccess(false);
  };

  return (
    <div>
      <h1>Register</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleRegister}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Register</button>
      </form>

      {/* Success Message Modal */}
      {success && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <h2>Registration Successful!</h2>
            <p>Your account has been created successfully.</p>
            <button onClick={closeSuccessMessage}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

// Basic styles for the modal
const modalStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalContentStyle = {
  backgroundColor: '#000',     // Background color of the modal
  padding: '20px',             // Padding inside the modal
  borderRadius: '5px',         // Rounded corners
  textAlign: 'center',         // Centered text
  color: '#fff',               // Font color set to black
};

export default Register;
