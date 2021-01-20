import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route
                    exact
                    path='/'>
                    <HomePage />
                </Route>
                <Route path='/about'>
                    <AboutPage />
                </Route>
                <Route path='/blogs'>
                    <BlogPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
