import React from 'react';
import {Taskbox} from './Taskbox';

export default {
    title: 'Taskbox',
    component: Taskbox,
};

const Template = (args) => <Taskbox {...args}/>

export const Default = Template.bind({});
    Default.args = {
    primary: 'Primary'
};