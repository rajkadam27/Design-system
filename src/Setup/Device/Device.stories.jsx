import Device from './Device';
import AddDevice from './AddDevice';
import EditDevice from './EditDevice';

export default {
    title: 'pages/Setup/Device',
    components: Device,
};

const Template = (args) => <Device {...args} />;
export const DefaultDevice = Template.bind({});
DefaultDevice.args = {};

const TemplateAddDevice = (args) => <AddDevice {...args} />;
export const AddDeviceForm = TemplateAddDevice.bind({});
AddDeviceForm.args = {};

const TemplateEditDevice = (args) => <EditDevice {...args} />;
export const EditDeviceForm = TemplateEditDevice.bind({});
EditDeviceForm.args = {};


