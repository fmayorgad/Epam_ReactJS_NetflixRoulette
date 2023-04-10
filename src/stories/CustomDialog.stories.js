import { CustomDialog } from '../Components/CustomDialog/CustomDialog';

export default {
    title: 'Components / CustomDialog',
    component: CustomDialog
}

const handleAction = () => {
    console.log('You have handle that!');
}

const Template = args => <CustomDialog {...args} />

export const Default = Template.bind({});

Default.args = {
    title: 'Creating a new Movie',
    children: <><p>Hello there handsome!!!</p></>,
    handleAction,
    openDialog: true
}