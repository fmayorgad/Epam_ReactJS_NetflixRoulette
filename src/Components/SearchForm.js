import React from 'react';

export class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: props.searchQuery
        };
    }

    handleInputChange = (event) => {
        this.setState({ searchQuery: event.target.value });
    };

    handleButtonClicked = () => {
        this.props.onSearch(this.state.searchQuery);
    };

    handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            this.props.onSearch(this.state.searchQuery);
        }
    };

    render() {
        return (
            <div className='searchFormContainer'>
                <input
                    placeholder='What do you want to watch?'
                    type="text"
                    value={this.state.searchQuery}
                    onChange={this.handleInputChange}
                    onKeyDown={this.handleKeyDown}
                />
                <button onClick={this.handleButtonClicked}>Search</button>
            </div>
        );
    }
}
