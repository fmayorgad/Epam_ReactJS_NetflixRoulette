import React from 'react';
import './MovieTile.css';
import nomovieImage from './nomovie.png';
export class MovieTile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchQuery: props.searchQuery
        };
    }

    handleClick = (event) => {
        this.setState({ searchQuery: event.target.value });
    };

    render() {
        return (
            <a href='#link' className='movieTileContainer'>
                <img alt="movie" className='movieTileImage' src={nomovieImage} />
                <div className='movieTileInfoContainer'>
                    <h3 className='movieTileTitle'>Titnic</h3>
                    <p className='movieTileYearLabel'>2000</p>
                    <p className='movieTileGenres'>Drama</p>
                </div>
            </a>
        );
    }
}
