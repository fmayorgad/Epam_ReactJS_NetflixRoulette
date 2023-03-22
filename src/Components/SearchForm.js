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

    handleButtonClicked = (event) => {
        event.preventDefault();
        this.props.onSearch(this.state.searchQuery);
    };

    handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            this.props.onSearch(this.state.searchQuery);
        }
    };

    render() {
        return (
            <div className='searchFormContainer'>
                <form onSubmit={this.handleButtonClicked}>
                    <input placeholder="What do you want to watch" type="text" onKeyDown={this.handleKeyDown} value={this.state.searchQuery} onChange={this.handleInputChange} />         
                    <button type="submit"value="Submit" >Search</button>
                </form>
            </div>
        );
    }
}
