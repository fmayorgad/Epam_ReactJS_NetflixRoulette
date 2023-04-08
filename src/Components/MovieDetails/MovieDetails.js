import React from 'react';
import './MovieDetails.css';

export class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {...props};
    }

    render() {
        return (
            <section className='MovieDetailsContainer'>
                <img alt="moviePoster" className='movieTileImage' src={this.state.urlImage} />
                <div className='detailsDescriptionContainer'>
                    <h1 className='movieDetailTitle'>{this.state.name}</h1>
                    <div className='movieRatingLabel'>
                        {this.state.rating}
                    </div>
                    <div className='movieDetailContainer'>
                        <span>{this.state.releaseYear}</span>
                        <span>{this.state.duration}</span>
                    </div>
                    <p>{this.state.description}</p>
                </div>
            </section>
        );
    }
}
