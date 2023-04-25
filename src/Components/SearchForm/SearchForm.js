import React from 'react';
import './SearchForm.css';

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
                <h1 className="searchFormTittle">FIND YOUR MOVIE</h1>
                <form onSubmit={this.handleButtonClicked}>
                    <input role="searchbox" placeholder="What do you want to watch" type="text" onKeyDown={this.handleKeyDown} defaultValue={this.state.searchQuery} onChange={this.handleInputChange} />         
                    <button type="submit"value="Submit" >Search</button>
                </form>
            </div>
        );
    }
}
