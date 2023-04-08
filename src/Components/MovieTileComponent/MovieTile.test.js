import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { MovieTile } from './MovieTile';

const movieProps = {
    urlImage: 'https://lumiere-a.akamaihd.net/v1/images/image_b88fdde2.jpeg?region=0,0,540,810&width=480',
    name: 'Titanic in the desert',
    releaseYear: 2033,
    genres: ['Drama', 'Action', 'Romance']
};
describe('Test MovieTile Component', () => {
    test('renders initial value provided in props for Title, Genres, a poster image and Year', () => {
        render(<MovieTile {...movieProps} />);
        const title = screen.getByRole('heading', `${movieProps.name}`);
        const genres = screen.getByText(/drama , action , romance/i);
        const releaseYear = screen.getByText(movieProps.releaseYear)
        const moviePoster = screen.getByRole('img', {
            name: /movieposter/i
        });

        expect(title).toBeInTheDocument();
        expect(genres).toBeInTheDocument();
        expect(releaseYear).toBeInTheDocument();
        expect(moviePoster).toBeInTheDocument();
    })

    test('handles click event', () => {
        const handleClickSpy = jest.fn(() => { })
        render(<MovieTile {...movieProps} onSelectMovieTile={handleClickSpy} />);

        const aElement = screen.getByRole('button');
        fireEvent.click(aElement);

        expect(handleClickSpy).toBeCalled();
    })
});