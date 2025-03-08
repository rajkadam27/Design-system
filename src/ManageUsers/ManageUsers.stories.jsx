import ManageUsers from "./ManageUsers";
import ManagerUsers2 from "./ManagerUser2";
import ManageUsers3 from "./ManageUser3";
import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm";

export default {
  title: "pages/ManageUsers",
  component: ManageUsers,
 };

const Template = (args) => <ManageUsers {...args} />;
export const Default = Template.bind({});
Default.args = {};

const Template2 = (args) => <ManagerUsers2 {...args} />;
export const Default2 = Template2.bind({});
Default2.args = {};

const Template3 = (args) => <ManageUsers3 {...args} />;
export const Default3 = Template3.bind({});
Default3.args = {};

const AddUserTemplate = (args) => <AddUserForm {...args} />;
export const AddUser = AddUserTemplate.bind({});
AddUser.args = {};

const EditUserTemplate = (args) => <EditUserForm {...args} />;
export const EditUser = EditUserTemplate.bind({});
EditUser.args = {};
