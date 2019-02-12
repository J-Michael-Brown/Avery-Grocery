/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import MonthList from './MonthList';
import { Switch, Route } from 'react-router-dom';
/* eslint-enable */

function App() {
  // const { root, menuButton, grow } = props;
  return (
    // <div className={props.root}>
    //   <AppBar position="static">
    //     <Toolbar>
    //       <IconButton className={props.menuButton} color="inherit" aria-label="Menu">
    //         <MenuIcon />
    //       </IconButton>
    //       <Typography variant="h6" color="inherit" className={props.grow}>
    //         News
    //       </Typography>
    //       <Button color="inherit">Login</Button>
    //     </Toolbar>
    //   </AppBar>
    // </div>
    <div>
      <Header/>
      <switch>
        <Route path='/' component={MonthList}/>
      </switch>
    </div>

  );
}

export default App;
