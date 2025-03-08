import React from 'react';

import Company from './Company';
import AddCompany from './AddCompany';
import EditCompany from './EditCompany';

export default {
    title: 'pages/Setup/company',
    components: Company,
};

const Template = (args) => <Company {...args} />;
export const DefaultComapny = Template.bind({});
DefaultComapny.args = {};

const Template2 = (args) => <AddCompany {...args} />;
export const DefaultAddComapny = Template2.bind({});
DefaultAddComapny.args = {};

const Template3 = (args) => <EditCompany {...args} />;
export const DefaultEditComapny = Template3.bind({});
DefaultEditComapny.args = {};