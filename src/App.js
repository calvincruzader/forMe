import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyNavBar from './components/MyNavbar';
import SignUp from './components/Authentication/SignUp';
import {BrowserRouter as Router} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        
        <Switch>
          <Route path="/signup">
            <MyNavBar showBtn="false"/>
            <SignUp/>
          </Route>
          <Route path="/">
            <MyNavBar showBtn="true"/>
              hi
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
