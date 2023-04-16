import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { MovieForm } from './MovieForm';
import { click } from '@testing-library/user-event/dist/click';

describe('Test MovieForm Component', () => {
    test('renders all inputs and selectors', () => {
        render(<MovieForm />);
        const titleLabel = screen.getByText(/TITLE/i);
        const title = screen.getByPlaceholderText(/What do you want to watch/i);

        const dateLabel = screen.getByText(/RELEASE DATE/i);
        const date = screen.getByPlaceholderText(/Select a date/i);

        const movieUrlLabel = screen.getByLabelText(/MOVIE URL/i);
        const url = screen.getByPlaceholderText(/https:/);

        const ratingLabel = screen.getByLabelText(/RATING/i);
        const rating = screen.getByPlaceholderText(/from 1 to 10/);

        const genreLabel = screen.getByLabelText(/GENRE SELECTOR/i);
        const genre = screen.getByTestId('genreselector');

        const descriptionLabel = screen.getByLabelText(/MOVIE DESCRIPTION/i);
        const descriptionArea = screen.getByRole('textbox', {name: 'MOVIE DESCRIPTION'});

        expect(titleLabel).toBeInTheDocument();
        expect(title).toBeInTheDocument();
        expect(dateLabel).toBeInTheDocument();
        expect(date).toBeInTheDocument();
        expect(movieUrlLabel).toBeInTheDocument();
        expect(url).toBeInTheDocument();
        expect(ratingLabel).toBeInTheDocument();
        expect(rating).toBeInTheDocument();
        expect(genreLabel).toBeInTheDocument();
        expect(genre).toBeInTheDocument();
        expect(descriptionLabel).toBeInTheDocument();
        expect(descriptionArea).toBeInTheDocument();
    })


    test('renders all inputs and selector', () => {
        render(<MovieForm />);
        const titleLabel = screen.getByText(/TITLE/i);
        const title = screen.getByPlaceholderText(/What do you want to watch/i);

        const dateLabel = screen.getByText(/RELEASE DATE/i);
        const date = screen.getByPlaceholderText(/Select a date/i);

        const movieUrlLabel = screen.getByLabelText(/MOVIE URL/i);
        const url = screen.getByPlaceholderText(/https:/);

        const ratingLabel = screen.getByLabelText(/RATING/i);
        const rating = screen.getByPlaceholderText(/from 1 to 10/);

        const genreLabel = screen.getByLabelText(/GENRE SELECTOR/i);
        const genre = screen.getByTestId('genreselector');

        const descriptionLabel = screen.getByLabelText(/MOVIE DESCRIPTION/i);
        const descriptionArea = screen.getByRole('textbox', {name: 'MOVIE DESCRIPTION'});

        expect(titleLabel).toBeInTheDocument();
        expect(title).toBeInTheDocument();
        expect(dateLabel).toBeInTheDocument();
        expect(date).toBeInTheDocument();
        expect(movieUrlLabel).toBeInTheDocument();
        expect(url).toBeInTheDocument();
        expect(ratingLabel).toBeInTheDocument();
        expect(rating).toBeInTheDocument();
        expect(genreLabel).toBeInTheDocument();
        expect(genre).toBeInTheDocument();
        expect(descriptionLabel).toBeInTheDocument();
        expect(descriptionArea).toBeInTheDocument();
    })

    test('handles Submit', () => {
        const handleSubmit = jest.fn(()=>{});
        const props = {onSubmit: handleSubmit}
        
        render(<MovieForm {...props}/>);

        const buttonSubmmit = screen.getByRole('button', {name: 'SUBMIT'});
        fireEvent.click(buttonSubmmit);

        expect(handleSubmit).toBeCalled();   
    })
});