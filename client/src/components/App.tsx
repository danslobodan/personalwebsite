import './App.css';

import React from 'react';
import { Router, Route } from 'react-router-dom';

import Header from './nav/Header';
import Home from './home/Home';
import BlogList from './blogs/BlogList';
import BlogEdit from './blogs/BlogEdit';
import About from './about/About';
import history from '../history';

const App: React.FC = () => {
    return (
        <Router history={history}>
            <Route path='/' component={Header} />
            <main role='main'>
                <div className='container'>
                    <Route path='/' exact component={Home} />
                    <Route path='/blogs' exact component={BlogList} />
                    <Route path='/blogs/edit/:id' exact component={BlogEdit} />
                    <Route path='/about' exact component={About} />
                </div>
            </main>
        </Router>
    );
};

export default App;
