import React from 'react';
import './MovieTile.css';
import nomovieImage from './nomovie.png';
export class MovieTile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
    }

    handleClick = (event) => {
        this.setState({ searchQuery: event.target.value });
    };

    render() {
        return (
            <a href='#link' className='movieTileContainer'>
                <img alt="movie" className='movieTileImage' src={this.state.urlImage ? this.state.urlImage : nomovieImage } />
                <div className='movieTileInfoContainer'>
                    <h3 className='movieTileTitle'>{this.state.name ? this.state.name : '-'}</h3>
                    <p className='movieTileYearLabel'>{this.state.releaseYear ? this.state.releaseYear : '-'}</p>
                    <p className='movieTileGenres'>{this.state.genres.length > 0 ? this.state.genres.join(' , ') : '-'}</p>
                </div>
            </a>
        );
    }
}
