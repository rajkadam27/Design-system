import React from 'react';

import Machine from './Machine';
import AddMachine from './AddMachine';
import EditMachine from './EditMachine';

export default {
    title: 'pages/Setup/Machine',
    components: Machine,
};

const TemplateMachine = (args) => <Machine {...args} />;
export const DefaultMachine = TemplateMachine.bind({});
DefaultMachine.args = {};

const Template2 = (args) => <AddMachine {...args} />;
export const DefaultAddMachine = Template2.bind({});
DefaultAddMachine.args = {};

const Template3 = (args) => <EditMachine {...args} />;
export const DefaultEditMachine = Template3.bind({});
DefaultEditMachine.args = {};