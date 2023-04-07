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

    handleClick = () => {
        this.props.onSelectMovieTile(this.state);
    };

    render() {
        return (
            <a role="button" href='#link' className='movieTileContainer' onClick={() => this.handleClick()}>
                <img alt="moviePoster" className='movieTileImage' src={this.state.urlImage ? this.state.urlImage : nomovieImage} />
                <div className='movieTileInfoContainer'>
                    <h3 className='movieTileTitle'>{this.state.name ? this.state.name : '-'}</h3>
                    <p className='movieTileYearLabel'>{this.state.releaseYear ? this.state.releaseYear : '-'}</p>
                    <p className='movieTileGenres'>
                        {
                            this.state.genres.length > 0 ?
                                (this.state.genres.length > 2 ? this.state.genres.join(' , ') : this.state.genres.join(' & ')) : '-'
                        }</p>
                </div>
            </a>
        );
    }
}
