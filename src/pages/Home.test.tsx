import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('Home component renders correctly', () => {
    render(<Home />);

    const carouselItems = screen.getAllByRole('img');
    const premiereTitles = screen.getAllByRole('heading', { name: /Premieres/ });
    const hallsTitles = screen.getAllByRole('heading', { name: /Halls/ });

    expect(carouselItems).toHaveLength(3); // Assuming three images in the carousel
    expect(premiereTitles).toHaveLength(1);
    expect(hallsTitles).toHaveLength(1);

});
