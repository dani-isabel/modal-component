import React from 'react';
import {Modal} from './Modal';

export default {
    title: 'Modal',
    component: Modal,
  };

  const Template = (args) => <Modal {...args} />;

  export const Default = Template.bind({});
    Default.args = {
    title: 'Suscríbete a HBO',
    description: 'No te quedes afuera. Disfruta de los contenidos del momento.',
    button: '¡Quiero HBO!',
};