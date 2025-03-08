import react from 'react';
import OrderTimeline from './OrderTimeline';
import OrderTimeline2 from './OrderTimeline2';

export default {
    title: 'Graph/OrderTimeline',
    component: OrderTimeline,
};

const Template = (args) => <OrderTimeline {...args} />;
export const Default = Template.bind({});
Default.args = {};

const Template2 = (args) => <OrderTimeline2 {...args} />;
export const Default2 = Template2.bind({});
Default2.args = {};