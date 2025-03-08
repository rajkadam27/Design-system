import React from 'react';

import Plant from './Plant';
import AddPlant from './AddPlant';
import EditCompany from './EditPlant';

export default {
    title: 'pages/Setup/Plant',
    components: Plant,
};

const Template = (args) => <Plant {...args} />;
export const DefaultPlant = Template.bind({});
DefaultPlant.args = {};

const Template2 = (args) => <AddPlant {...args} />;
export const DefaultAddPlant = Template2.bind({});
DefaultAddPlant.args = {};

const Template3 = (args) => <EditCompany {...args} />;
export const DefaultEditPlant = Template3.bind({});
DefaultEditPlant.args = {};