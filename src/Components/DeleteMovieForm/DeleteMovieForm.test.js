import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { DeleteMovieForm, DeleteMovieform } from './DeleteMovieform';

describe('Test DeleteMovieform Component', () => {

    test('renders all elements', () => {
        render(<DeleteMovieForm />);
        const confirmationText = screen.getByText(/Are your sure you want to delete this movie?/i);
        const confirmationButton = screen.getByRole('button', { name: 'CONFIRM' })

        expect(confirmationText).toBeInTheDocument();
        expect(confirmationButton).toBeInTheDocument();
    })

    test('handles Click button confirmation', () => {
        const confirmHandler = jest.fn(()=>{});
        render(<DeleteMovieForm confirmHandler={confirmHandler}/>);
        const confirmationButton = screen.getByRole('button', { name: 'CONFIRM' })

        fireEvent.click(confirmationButton);
        expect(confirmHandler).toBeCalled();
    })
});