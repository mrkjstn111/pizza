import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.js';

import Navbar from './components/navbar';
import Homepage from './components/homepage';


function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path = "/" exact element = {<Homepage/>}/>
        </Routes>
    </Router>
  );
}

export default App;
