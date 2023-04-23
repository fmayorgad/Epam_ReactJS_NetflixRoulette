import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { SearchForm } from './SearchForm';

describe('Test SearchForm Component', () => {

    const searchPassedtoComponent = 'Drama';

    const onSearch = jest.fn((e) => {
    });

    test('renders an input with the value equal to initial value passed in props', () => {
        render(<SearchForm onSearch={onSearch} searchQuery={searchPassedtoComponent} />);
        const input = screen.getByRole('searchbox');
        expect(input.getAttribute('value')).toEqual(searchPassedtoComponent);
    })

    test('after typing to the input and a "click" event on the Submit button, the "onChange" prop is called with proper value', () => {

        const newValue = 'Terror';
        let state = {
            searchQuery: ''
        }

        const handleInputChangeSpy = jest.fn((e) => {
            state.searchQuery = e
        });

        render(<SearchForm onSearch={handleInputChangeSpy} />);

        const input = screen.getByRole('searchbox');
        const submitButton = screen.getByText('Search');

        fireEvent.change(input, { target: { value: newValue } });
        fireEvent.click(submitButton);

        expect(handleInputChangeSpy).toHaveBeenCalledTimes(1);
        expect(state.searchQuery).toEqual(newValue);
    })

    test('after typing to the input and pressing Enter key, the "onChange" prop is called with proper value', () => {

        const newValue = 'Terror';
        let state = {
            searchQuery: ''
        }

        const handleInputChangeSpy = jest.fn((e) => {
            state.searchQuery = e;
        });

        render(<SearchForm onSearch={handleInputChangeSpy} />);

        const input = screen.getByRole('searchbox');

        fireEvent.change(input, { target: { value: newValue } });
        fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13, keyCode: 13, target: { value: newValue } })

        expect(handleInputChangeSpy).toHaveBeenCalledTimes(1);
        expect(handleInputChangeSpy).toHaveBeenCalledWith(newValue);
    })
});