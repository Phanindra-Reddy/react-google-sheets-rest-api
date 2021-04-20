import React from 'react';
import './App.css';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

import NavBar from './components/NavBar';
import UserForm from './components/UserForm';
import SuccessMessage from './components/SuccessMessage';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route exact component={UserForm} path="/" />
          <Route  component={SuccessMessage} path="/submitted-successfully" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
