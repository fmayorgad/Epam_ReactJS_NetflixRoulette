import React from 'react';

export class GenreSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: parseInt(props.selectedGenre),
            genreList: props.genreList
        };
    }

    render() {
        return (
            <div className='genreSelectContainer'>
                <li>
                    {this.state.genreList.map(
                        (genre) => <a href='#top' className={`${genre.id === this.state.selected ? "active" : ""}`} onClick={this.props.onSelectGenre(genre)} key={genre.id}>{genre.name}</a>
                    )}
                </li>
            </div>
        );
    }
}
