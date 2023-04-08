import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { MovieDetails } from './MovieDetails';

const movieProps = {
    urlImage: 'https://lumiere-a.akamaihd.net/v1/images/image_b88fdde2.jpeg?region=0,0,540,810&width=480',
    name: 'Titanic in the desert',
    releaseYear: 2033,
    genres: ['Drama', 'Action', 'Romance'],
    rating: 9.4,
    duration: '2h 40min',
    description:'this is a good movie'
};

describe('Test MovieDetails Component', () => {
    test('renders initial value provided in props for Title, Genres, a poster image, description, duration and Year', () => {
        render(<MovieDetails {...movieProps} />);
        const title = screen.getByRole('heading', `${movieProps.name}`);
        const genres = screen.getByText(/drama , action , romance/i);
        const releaseYear = screen.getByText(movieProps.releaseYear);
        const movieDuration = screen.getByText(movieProps.duration);
        const movieDescription = screen.getByText(/this is a good movie/i)
        const moviePoster = screen.getByRole('img', {
            name: /movieposter/i
        });

        expect(title).toBeInTheDocument();
        expect(genres).toBeInTheDocument();
        expect(releaseYear).toBeInTheDocument();
        expect(moviePoster).toBeInTheDocument();
        expect(movieDescription).toBeInTheDocument();
        expect(movieDuration).toBeInTheDocument();
    });
});