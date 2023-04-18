import React from 'react';
import './GenreSelector.css';

export class GenreSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: parseInt(props.selectedGenre),
            genreList: props.genreList
        };
    }

    selectGenre(genre){
        let state = {...genre};
        state.selected = genre.id;
        this.setState(state);
        this.props.onSelectGenre(genre)
    }

    render() {
        return (
            <div className='genreSelectContainer'>
                <ol data-testid="genreContainer">
                    {this.state.genreList.map(
                        (genre) => <li data-testid="genre" className={`${genre.id === this.state.selected ? "active" : ""}`} id={genre.id} onClick={()=>this.selectGenre(genre)} key={genre.id}>{genre.name}</li>
                    )}
                </ol>
            </div>
        );
    }
}
