import { MovieForm } from '../Components/MovieForm/MovieForm';
import { CustomDialog } from '../Components/CustomDialog/CustomDialog';
import {DeleteMovieForm} from '../Components/DeleteMovieForm/DeleteMovieform';

export default {
    title: 'Components / MovieForm',
    component: MovieForm,
    parameters: {
        layout: 'fullscreen',
    },
}

const onSubmit = (s) => {
    console.log(s);
}

const handleAction = () => {
    console.log('You have handled that!');
}

const Template = args => <CustomDialog {...args} />

const editFormValues = {
    title: 'Mama muerta 2',
    date: null,
    url: 'https://jeje.com',
    genre: [1, 3],
    description: 'Hola',
    runtime: 23,
    rating: 6,
    onSubmit
}

export const EditMovie = Template.bind({});

EditMovie.args = {
    title: 'Editing a Movie',
    children: <MovieForm {...editFormValues}/>,
    openDialog: true,
    handleAction
}

export const AddMovie = Template.bind({});

AddMovie.args = {
    title: 'Creating a new Movie',
    children: <MovieForm />,
    openDialog: true,
    handleAction
}

export const DeleteMovie = Template.bind({});

DeleteMovie.args = {
    title: 'Deleting a Movie',
    children: <DeleteMovieForm />,
    openDialog: true,
    handleAction
}