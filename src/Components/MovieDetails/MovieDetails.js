import React from 'react';
import './MovieDetails.css';


export class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.urlImage = props.urlImage ? props.urlImage : '';
        this.state.name = props.name ? props.name : '';
        this.state.releaseYear = props.releaseYear ? props.releaseYear : '';
        this.state.genres = props.genres ? props.genres : [];
        this.state.rating = props.rating ? props.rating : '';
        this.state.duration = props.duration ? props.duration : '';
        this.state.description = props.description ? props.description : '';
    }

    componentDidUpdate(prevProps) {
        if (prevProps.id !== this.props.id) {
          this.setState({...this.props})
        }
      }

    render() {
        return (
            <section className='MovieDetailsContainer'>
                <img alt="moviePoster" className='movieDetailImage' src={this.state.urlImage} />
                <div className='detailsDescriptionContainer'>
                    <div className='movieDetailMainInfoContainer'>
                        <h1 className='movieDetailTitle'>{this.state.name}</h1>
                        <span className='movieRatingLabel'>
                            {this.state.rating}
                        </span>
                    </div>

                    <p className='movieDetailsGenres'>
                        {
                            this.state.genres.length > 0 ?
                                (this.state.genres.length > 2 ? this.state.genres.join(' , ') : this.state.genres.join(' & ')) : '-'
                        }</p>
                    <div className='movieDetailContainer'>
                        <span>{this.state.releaseYear}</span>
                        <span>{this.state.duration}</span>
                    </div>
                    <p className='movieDetailDescription'>{this.state.description}</p>
                </div>
            </section>
        );
    }
}
