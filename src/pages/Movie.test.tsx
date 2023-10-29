// src/pages/Movie.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Movie from './Movie';

test('Movie component renders correctly', () => {
    render(<Movie />);

    const movieTitle = screen.getByRole('heading', { name: /Ant-Man and the Wasp: Quantumania/ });
    const genreSection = screen.getByText(/Science Fiction, Action, Thriller, Comedy/);
    const movieDescription = screen.getByText(/The film officially opens the 5th phase of the Marvel cinematic universe/);
    const youtubeIframe = screen.getByTitle('YouTube video player');

    expect(movieTitle).toBeTruthy();
    expect(genreSection).toBeTruthy();
    expect(movieDescription).toBeTruthy();
    expect(youtubeIframe).toBeTruthy();
});
