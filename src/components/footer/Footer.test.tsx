// src/components/footer/Footer.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('Footer component renders correctly', () => {
    render(<Footer />);

    const socialLinks = screen.getAllByRole('link', { name: /Link/ });
    expect(socialLinks).toHaveLength(5); // Assuming 5 social links exist

});
