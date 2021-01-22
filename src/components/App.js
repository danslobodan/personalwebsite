import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import BlogList from './blogs/BlogList';
import BlogEdit from './blogs/BlogEdit';
import About from './About';

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <Header />
                <Route path="/" exact component={Home} />
                <Route path="/blogs" exact component={BlogList} />
                <Route path="/blogs/edit/:id" exact component={BlogEdit} />
                <Route path="/about" exact component={About} />
            </BrowserRouter>
        </div>
    );
};

export default App;