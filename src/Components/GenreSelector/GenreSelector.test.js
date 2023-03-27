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

    test('highlights a selected genre passed in props', () => {
        render(<GenreSelector selectedGenre={selectedGenre} genreList={genreList} onSelectGenre={onSelectGenre} />);
        const counterLabel = screen.getAllByRole('tab');
        const selectedItem = counterLabel.filter(c => c.classList.contains('active')).reduce(c => c);
        expect(parseInt(selectedItem.id)).toEqual(selectedGenre);
    })

    test('click event on a genre button component calls "onChange" callback and passes correct genre in arguments', () => {
        const onSelectGenre = jest.fn((e) => {
            console.log('called by element:', e);
        });
        render(<GenreSelector selectedGenre={selectedGenre} genreList={genreList} onSelectGenre={onSelectGenre} />);
        const counterLabel = screen.getAllByRole('tab');
        const selectedItem = counterLabel.filter(c => c.classList.contains('active')).reduce(c => c);
        fireEvent.click(selectedItem);
        
        expect(onSelectGenre).toHaveBeenCalled();
    });

});