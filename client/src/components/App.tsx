import React from 'react';
import { Router, Route } from 'react-router-dom';

import Header from './nav/Header';
import Home from './home/Home';
import BlogList from './blogs/BlogList';
import BlogCreate from './blogs/BlogCreate';
import BlogEdit from './blogs/BlogEdit';
import About from './About';
import history from '../history';
import BlogDelete from './blogs/BlogDelete';

const App: React.FC = () => {
    return (
        <Router history={history}>
            <Route path='/' component={Header} />
            <main role='main'>
                <div className='container marketing'>
                    <Route path='/' exact component={Home} />
                    <Route path='/blogs' exact component={BlogList} />
                    <Route path='/blogs/create' exact component={BlogCreate} />
                    <Route path='/blogs/edit/:id' exact component={BlogEdit} />
                    <Route
                        path='/blogs/delete/:id'
                        exact
                        component={BlogDelete}
                    />
                    <Route path='/about' exact component={About} />
                </div>
            </main>
        </Router>
    );
};

export default App;
