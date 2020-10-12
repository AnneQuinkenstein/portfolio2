import React from 'react';
import './App.css';
import Home from './components/index';
import CssBaseline from '@material-ui/core/CssBaseline';
import Resume from './components/Resume';
import { Route, Switch } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <CssBaseline>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/resume' component={Resume} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </CssBaseline>
    </>
  );
}

export default App;
