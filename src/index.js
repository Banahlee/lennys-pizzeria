import React from 'react';
import { render } from 'react-dom';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () =>(
    <Router>
        <div>
            <Route exact path='/' component = {Home}></Route>
            <Route path = '/about' component = {About}></Route>
            <Route path = '/menu' component = {Menu}></Route>
        </div>
    </Router>
)

render(<App/>, document.getElementById('root'));
