import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';

describe('Test Counter Component', () => {
    test('renders initial value provided in props', () => {
        const initialValue = 0;
        render(<Counter initialValue={initialValue} />);
        const counterLabel = screen.getByText(`${initialValue}`);
        expect(counterLabel).toBeInTheDocument();
    })

    test('renders increase and decrease buttons', () => {
        const initialValue = 0;
        render(<Counter initialValue={initialValue} />);
        const incrementButton = screen.getByText(/Increase Counter/i);
        const decrementButton = screen.getByText(/Decrease Counter/i);
        expect(incrementButton).toBeInTheDocument();
        expect(decrementButton).toBeInTheDocument();
    })

    test('increments the displayed value when "increment" button is clicked', () => {
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
    });
});