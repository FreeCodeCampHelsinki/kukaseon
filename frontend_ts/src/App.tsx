import * as React from 'react';
//import  logo  from './logo.svg';
import './App.css';
import MenuTop from './components/MenuTop';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
      <MenuTop />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    </div>
  );
}

export default App;
