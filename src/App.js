import React from 'react';
import './App.css';
import Home from './components/index';
import CssBaseline from '@material-ui/core/CssBaseline';
import Resume from './components/Resume';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <CssBaseline>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/resume' component={Resume} />
      </Switch>
    </CssBaseline>
    </>
  );
}

export default App;
