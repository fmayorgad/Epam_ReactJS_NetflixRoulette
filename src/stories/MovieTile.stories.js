import { MovieTile } from '../Components/MovieTileComponent/MovieTile';

export default {
    title: 'Components / MovieTile',
    component: MovieTile,
}

const Template = (args) => <MovieTile {...args}/>;

export const Default = Template.bind({});
Default.args = {
    urlImage: 'https://lumiere-a.akamaihd.net/v1/images/image_b88fdde2.jpeg?region=0,0,540,810&width=480',
    name: 'Titanic in the desert',
    releaseYear: 2033,
    genres: ['Drama', 'Action', 'Romance'],
    rating: 9.4,
    duration: '2h 40min',
    description:'this is a good movie'
};