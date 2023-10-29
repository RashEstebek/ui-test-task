// src/components/hall/Hall.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Hall, { halls } from './Hall';

test('Hall component renders cards correctly', () => {
    render(
        <>
            {halls.map((hall) => (
                <Hall key={hall.title} title={hall.title} img={hall.img} />
            ))}
        </>
    );

    const hallCards = screen.getAllByRole('img', { name: /Hall Image/ });
    expect(hallCards).toHaveLength(halls.length);

});
