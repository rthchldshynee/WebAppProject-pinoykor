import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../components/layout';
import Home from '../components/Home';
import About from './about';
import Recipe from './Recipe';
import './index.css';

const App = () => {
 return (
   <Router>
     <Layout>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/recipe" element={<Recipe />} />
       </Routes>
     </Layout>
   </Router>
 );
};

export default App;
