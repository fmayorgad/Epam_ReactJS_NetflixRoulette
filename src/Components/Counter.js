import React from 'react';
const title = 'Counter';
export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: parseInt(props.initialValue)
        }
    }

    operateCounter(action) {
        this.setState({ counter: action === 'increase' ? this.state.counter + 1 : this.state.counter - 1 })
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                { className: 'componentTitle' },
                title,
                React.createElement(
                    'p',
                    null,
                    this.state.counter
                ),
                React.createElement(
                    'button',
                    {
                        className: 'increaseButton',
                         onClick: () => this.operateCounter('increase') },
                    'Increase Counter'
                ),
                React.createElement(
                    'button',
                    {
                        className: 'decreaseButton',
                         onClick: () => this.operateCounter('decrease') },
                    'Decrease Counter'
                )
            )
        )
    }
}