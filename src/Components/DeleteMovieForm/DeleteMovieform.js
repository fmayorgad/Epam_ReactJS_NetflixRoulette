import React from 'react';
import './DeleteMovieForm.css';


export class DeleteMovieForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...props };
    }

    handleClick = (e) => {
        console.log("Confirmed!")
    }

    render() {
        return (
            <div className='SortControlContainer'>
                <p>Are your sure you want to delete this movie?</p>
                <button class="confirmDeleteButton" onClick={() => this.handleClick}>CONFIRM</button>
            </div>
        );
    }
}
