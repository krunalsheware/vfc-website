import  Nav  from './Components/Nav';
import './App.css';

import  Rule  from './Components/Rules';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import { Footer } from './Components/Footer';


function App() {
  return (
    <div className='App'>
      
       <Router>
       <Nav/>
        <Routes>
          
        <Route path="/" Component={Home} exact/>
        <Route path="/rule" Component={Rule} exact/>

        </Routes>
        <Footer/>
       </Router>
    </div>
  )
}

export default App;
