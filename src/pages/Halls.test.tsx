import React from 'react';
import { render, screen } from '@testing-library/react';
import Halls from './Halls';

test('Halls component renders halls correctly', () => {
    render(<Halls />);

    const hallsSection = screen.getByRole('heading', { name: /Halls/ });
    const hallItems = screen.getAllByRole('img', { name: /Hall Image/ }); // Assuming an accessible name is available

    expect(hallsSection).toBeTruthy();
    expect(hallItems.length).toBeGreaterThan(0); // Assuming at least one hall is present
});
