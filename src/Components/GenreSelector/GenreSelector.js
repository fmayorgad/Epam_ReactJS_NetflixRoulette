import React from 'react';

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
                <li role="tablist">
                    {this.state.genreList.map(
                        (genre) => <span role="tab" className={`${genre.id === this.state.selected ? "active" : ""}`} onClick={()=>this.selectGenre(genre)} key={genre.id}>{genre.name}</span>
                    )}
                </li>
            </div>
        );
    }
}
