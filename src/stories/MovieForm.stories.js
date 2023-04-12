import { MovieForm } from '../Components/MovieForm/MovieForm';

export default {
    title: 'Components / MovieForm',
    component: MovieForm,
}

const Template = (args) => <MovieForm {...args}/>;

export const Default = Template.bind({});
Default.args = {
    
};