import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { SortControl } from './SortControl';

describe('Test SortControl Component', () => {

    const onSearchMock = jest.fn((e) => {
    });

    const initValues = {
        selected: 1,
        onChange: onSearchMock,
        options: [
            {
                id: 1,
                desc: 'Release Date'
            },
            {
                id: 2,
                desc: 'Title'
            }
        ]
    };

    test('renders select with his label', () => {
        render(<SortControl {...initValues}/>);
        const label = screen.getByText(/sort by/i);
        const select = screen.getByRole('combobox', {id: 'sortControl'})
        expect(label).toBeInTheDocument();
        expect(select).toBeInTheDocument();
    })

    test('renders the value passed as default value',()=>{
        render(<SortControl {...initValues}/>);
        const select = screen.getByRole('combobox', {id: 'sortControl'})
        expect(select.value).toEqual(''+initValues.selected); 
    });

    test('calls the callback function with changes',()=>{
        render(<SortControl {...initValues}/>);
        const select = screen.getByRole('combobox', {id: 'sortControl'})
        expect(select.value).toEqual(''+initValues.selected); 
        fireEvent.change(select, { target: { value: 2 } });
        expect(select.value).toEqual('2');
    });

});