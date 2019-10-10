import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Checkout from './components/Checkout'

const Root = () => {(
    <Router>
        <Switch>
            <Route component={ App } exact path="/" />
            <Route component={ SignIn } path="/signin" />
            <Route component={ SignUp } path="/signup" />
            <Route component={ Checkout } path="/checkout" />
        </Switch>
    </Router>
)}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
