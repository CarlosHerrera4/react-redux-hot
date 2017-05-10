import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import 'normalize.css';

import Home from './routes/home';
import Counter from './routes/counter';
import Navbar from './components/Navbar';

const App = props =>
  <Router>
    <div className={`${props.className} app-container`}>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route component={Home} />
      </Switch>
    </div>
  </Router>;

const AppStyled = styled(App)`
  font-family: helvetica;
`;

App.propTypes = {
  className: PropTypes.string.isRequired,
};

export default AppStyled;
