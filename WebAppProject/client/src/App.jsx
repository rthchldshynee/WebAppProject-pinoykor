import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../components/layout';
import Home from '../components/Home';
import About from './about';
import Recipe from './Recipe';
import Login from './Login';
import Register from './Register';
import Welcome from './Welcome';
import './index.css';

const App = () => {
 return (
   <Router>
     <Layout>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/recipe" element={<Recipe />} />
         <Route path='/Login' element={<Login />} />
         <Route path='/Register' element={<Register />} />
         <Route path='/Welcome' element={<Welcome />} />
       </Routes>
     </Layout>
   </Router>
 );
};

export default App;
