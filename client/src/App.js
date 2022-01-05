import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Registration from './components/Registration';
import User from './components/User';
import Delete from './components/Delete';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
        <Nav />
        <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/Registration" element={<Registration/>} />
           <Route path="/User" element={<User/>}/>
           <Route path="/Delete" element={<Delete/>}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;