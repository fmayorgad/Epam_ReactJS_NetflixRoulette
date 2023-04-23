import React from 'react';
import './DeleteMovieForm.css';


export class DeleteMovieForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...props };
    }

    handleClick = (e) => {
        this.props.confirmHandler();
    }

    render() {
        return (
            <div className='SortControlContainer'>
                <p>Are your sure you want to delete this movie?</p>
                <button className="confirmDeleteButton" onClick={() => this.handleClick()}>CONFIRM</button>
            </div>
        );
    }
}
