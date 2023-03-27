import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { SearchForm } from './SearchForm';

describe('Test SearchForm Component', () => {

    const searchPassedtoComponent = 'Drama';

    const onSearch = (input) => {
        console.log(input);
    }

    const handleButtonClicked = (e) => {
        e.preventDefault();
        console.log("clickado")
    };

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

        const handleInputChange = jest.fn((e) => {
            state.searchQuery = e.target.value;
        });

        render(<div className='searchFormContainer'>
            <form onSubmit={handleButtonClicked}>
                <input role="searchbox" placeholder="What do you want to watch" type="text" defaultValue={state.searchQuery} onChange={handleInputChange} />
                <button type="submit" value="Submit" >Search</button>
            </form>
        </div>);

        const input = screen.getByRole('searchbox');
        const submitButton = screen.getByText('Search');

        fireEvent.change(input, { target: { value: newValue } });
        fireEvent.click(submitButton);

        expect(handleInputChange).toHaveBeenCalledTimes(1);
        expect(state.searchQuery).toEqual(newValue);
    })

    test('after typing to the input and pressing Enter key, the "onChange" prop is called with proper value', () => {

        const newValue = 'Terror';
        let state = {
            searchQuery: ''
        }

        const handleInputChange = jest.fn((e) => {
            state.searchQuery = e.target;
        });

        const handleKeyDown = jest.fn((e) => {
            console.log(e.target.value)
            if (e.keyCode === 13) {
                handleInputChange(e.target.value);
            }
        });

        render(<div className='searchFormContainer'>
            <form onSubmit={handleButtonClicked}>
                <input role="searchbox" placeholder="What do you want to watch" type="text" defaultValue={state.searchQuery} onKeyDown={handleKeyDown} />
                <button type="submit" value="Submit" >Search</button>
            </form>
        </div>);

        const input = screen.getByRole('searchbox');

        fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13, keyCode: 13, target: { value: newValue } })
        fireEvent.change(input, { target: { value: newValue } });

        expect(handleInputChange).toHaveBeenCalledTimes(1);
        expect(handleInputChange).toHaveBeenCalledWith(newValue);
    })
});