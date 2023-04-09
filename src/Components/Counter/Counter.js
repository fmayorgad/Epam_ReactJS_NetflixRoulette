import React from 'react';
import './Counter.css';


const title = 'Counter';

export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: props.initialValue || 0
        }
    }

    operateCounter(action) {
        this.setState((prevState) => ({ counter: action === 'increase' ? prevState.counter + 1 : prevState.counter - 1 }));
    }

    render() {
        return React.createElement(
            'div',
            { className: 'counterContainer' },
            React.createElement(
                'h2',
                { className: 'counterTitle' },
                title,
            ),
            React.createElement(
                'div',
                { className: 'counterBody' },

                React.createElement(
                    'p',
                    {className: 'counterLabel'},
                    this.state.counter
                ),
                React.createElement(
                    'button',
                    {
                        className: 'increaseButton',
                        onClick: () => this.operateCounter('increase'),
                        id: 'incrementButton'
                    },
                    'Increase Counter'
                ),
                React.createElement(
                    'button',
                    {
                        className: 'decreaseButton',
                        onClick: () => this.operateCounter('decrease'),
                        id: 'decrementButton'
                    },
                    'Decrease Counter'
                )
            ),
        )
    }
}