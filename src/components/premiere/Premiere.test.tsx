// src/components/premiere/Premiere.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Premiere from './Premiere';
import premiere1 from "./../..img/section-premieres-images/premiere1.webp"

const sampleTitle = 'Ant-Man and the Wasp: Quantumania';
const sampleImage = premiere1;

test('Premiere component renders title and image correctly', () => {
    render(<Premiere title={sampleTitle} img={sampleImage} />);

    const titleElement = screen.getByText(sampleTitle);
    const imageElement = screen.getByAltText(sampleTitle);

    expect(titleElement).toBeTruthy;
    expect(imageElement).toBeTruthy();
});
