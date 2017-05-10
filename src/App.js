import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import 'normalize.css';
import Home from './routes/home';
import Counter from './routes/counter';

const HelloBoss = () => <h1>404 No matches dude⚠</h1>;

HelloBoss.propTypes = {
  message: PropTypes.string.isRequired,
};

const App = () =>
  <Router>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/counter'>Counter</Link></li>
      </ul>

      <hr />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route component={HelloBoss} />
      </Switch>
    </div>
  </Router>;
export default App;
