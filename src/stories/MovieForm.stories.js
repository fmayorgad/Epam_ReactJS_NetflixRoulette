import { MovieForm } from '../Components/MovieForm/MovieForm';

export default {
    title: 'Components / MovieForm',
    component: MovieForm,
}

const Template = (args) => <MovieForm {...args}/>;

const onSubmit = (s)=>{
    console.log(s);
}

export const Default = Template.bind({});
Default.args = {
    title: 'Mama muerta',
    date: null,
    url: 'https://jeje.com',
    genre: [1,3],
    description: 'Hola',
    runtime: 23,
    rating: 6,
    onSubmit
};