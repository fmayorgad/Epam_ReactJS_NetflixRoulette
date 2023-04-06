import React from 'react';
import './MovieTile.css';
import nomovieImage from '../../../public/nomovie.png';
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
                <img alt="" src={{nomovieImage}} />
                <div className='movieTileInfoContainer'>
                    <h3 className='movieTileTitle'>-</h3>
                    <p className='movieTileName'>-</p>
                    <p className='movieTileYear'>-</p>
                </div>
            </a>
        );
    }
}
