// src/components/navbar/Navbar.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('Navbar component renders correctly', () => {
    render(<Navbar />);

    const movieLink = screen.getByRole('link', { name: /Movie/ });
    const bookingLink = screen.getByRole('link', { name: /Booking/ });
    const hallsLink = screen.getByRole('link', { name: /Halls/ });
    const loginIcon = screen.getByRole('img', { name: /Login/ });

    expect(movieLink).toBeTruthy();
    expect(bookingLink).toBeTruthy();
    expect(hallsLink).toBeTruthy();
    expect(loginIcon).toBeTruthy();

});
