import { GenreSelector } from '../Components/GenreSelector/GenreSelector';

export default {
    title: 'GenreSelector component',
    component: GenreSelector,
}

const onSelectGenre = function (genre) {
    console.log(genre)
}

const Template = args => <GenreSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
    genreList: [
        { id: 0, name: 'all' },
        { id: 1, name: 'drama' },
        { id: 2, name: 'terror' },
        { id: 3, name: 'comedy' },
        { id: 4, name: 'documentary' },
        { id: 5, name: 'crime' },
    ],
    onSelectGenre,
    selectedGenre: 0
};