import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.js';

import Navbar from './components/navbar';
import Homepage from './components/homepage';
import Admin from './components/admin';
import Elements from './components/elements';
import Element2 from './components/element2';

function App() {
  return (
    <Router>
        <Routes>
          <Route element={<Elements/>}>
          <Route path = "/" exact element = {<Homepage/>}/>
          </Route>
          <Route element={<Element2/>}>
          <Route path ="/admin" element = {<Admin/>}/>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
