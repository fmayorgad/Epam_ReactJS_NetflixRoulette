import { SortControl } from '../Components/SortControl/SortControl';

export default {
    title: 'Components / SortControl',
    component: SortControl,
}

const onChange = function (input) {
    console.log(input);
}

const Template = args => <SortControl {...args} />;

export const Default = Template.bind({});
Default.args = {
    onChange,
    selected: 1,
    options: [
        {
            id: 1,
            desc: 'Release Date'
        },
        {
            id: 2,
            desc: 'Title'
        }
    ]
};