/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Splash from './Splash';
import MonthList from './MonthList';
import Schedule from './Schedule'
import { Switch, Route } from 'react-router-dom';
/* eslint-enable */

function App() {

  return (

    <div>
      <Header/>
      <switch>
        <Route exact path='/' component={Splash}/>
        <Route path='/month-list' component={MonthList}/>
        <Route path='/schedule' component={Schedule}/>
      </switch>
    </div>

  );
}

export default App;
