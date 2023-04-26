import React from 'react';
import './MovieDetails.css';
import nomovieImage from './nomovie.png';

export class MovieDetails extends React.Component {

    render() {
        const urlImage = this.props.urlImage;
        const name = this.props.name ?? '';
        const releaseYear = this.props.releaseYear ?? '';
        const genres = this.props.genres ?? [];
        const rating = this.props.rating ?? '';
        const duration = this.props.duration ?? '';
        const description = this.props.description ?? '';
        return (
            <section className='MovieDetailsContainer'>
                <img alt="moviePoster" className='movieDetailImage' src={urlImage} onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = nomovieImage;
                }}/>
                <div className='detailsDescriptionContainer'>
                    <div className='movieDetailMainInfoContainer'>
                        <h1 className='movieDetailTitle'>{name}</h1>
                        <span className='movieRatingLabel'>
                            {rating}
                        </span>
                    </div>

                    <p className='movieDetailsGenres'>
                        {
                            genres.length > 0 ?
                                (genres.length > 2 ? genres.join(' , ') : genres.join(' & ')) : '-'
                        }</p>
                    <div className='movieDetailContainer'>
                        <span>{releaseYear}</span>
                        <span>{duration}</span>
                    </div>
                    <p className='movieDetailDescription'>{description}</p>
                </div>
            </section>
        );
    }
}
