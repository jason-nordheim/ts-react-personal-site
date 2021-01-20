import React from 'react';
import {
    render,
    screen,
} from '@testing-library/react';
import App from './App';

describe('App', () => {
    test('renders App Component', () => {
        render(
            <App />
        );
        //screen.debug();
    });
    // test('App component has child NavBar', () => {
    //   render( <App /> )
    // })
});
