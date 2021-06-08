import './App.css';

import React from 'react';
import { Router, Route } from 'react-router-dom';

import Header from './nav/Header';
import Home from './home/Home';
import BlogList from './blogs/BlogList';
import About from './about/About';
import history from '../history';
import Tenets from './tenets/Tenets';

const App: React.FC = () => {
    return (
        <Router history={history}>
            <Route path='/' component={Header} />
            <main role='main'>
                <div className='container'>
                    <Route path='/' exact component={Home} />
                    <Route path='/tenets' exact component={Tenets} />
                    <Route path='/blogs' exact component={BlogList} />
                    <Route path='/about' exact component={About} />
                </div>
            </main>
        </Router>
    );
};

export default App;
