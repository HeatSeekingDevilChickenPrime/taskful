import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../client/App.jsx';

describe ('App', () => {
    it('renders the App component', () => {
        render(<App />);

        screen.debug();
    });
});

