import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { GenreSelector } from './GenreSelector';

describe('Test GenreSelector Component', () => {

    const genreList = [
        { id: 0, name: 'all' },
        { id: 1, name: 'drama' },
        { id: 2, name: 'terror' },
        { id: 3, name: 'comedy' },
        { id: 4, name: 'documentary' },
        { id: 5, name: 'crime' },
    ];

    const selectedGenre = 0;

    const onSelectGenre = (e) => {
        console.log(e);
    }


    test('renders all genres passedin props', () => {
        render(<GenreSelector selectedGenre={selectedGenre} genreList={genreList} onSelectGenre={onSelectGenre} />);
        const counterLabel = screen.getAllByRole('tab');
        expect(counterLabel.length).toEqual(genreList.length);
    })

    /*     test('increments the displayed value when "increment" button is clicked', () => {
            const initialValue = 5;
            render(<Counter initialValue={initialValue} />);
            const counterLabel = screen.getByText(`${initialValue}`);
            const incrementButton = screen.getByText(/Increase Counter/i);
    
            fireEvent.click(incrementButton);
    
            expect(counterLabel).toHaveTextContent(`${initialValue + 1}`);
        });
    
        test('decrements the displayed value when "decrement" button is clicked', () => {
            const initialValue = 5;
            render(<Counter initialValue={initialValue} />);
            const counterLabel = screen.getByText(`${initialValue}`);
            const decrementButton = screen.getByText(/Decrease Counter/i);
    
            fireEvent.click(decrementButton);
    
            expect(counterLabel).toHaveTextContent(`${initialValue - 1}`);
        }); */
});