// Navbar.stories.jsx
import React from 'react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import UpdateUser from './UpdateUser';
import { ThemeProvider } from '../ThemeContext'

export default {
  title: 'Components/Navbar',
  component: Navbar,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    )
  ],
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {};
const Template2 = (args) => <Navbar2 {...args} />;
export const Default2 = Template2.bind({});
Default2.args = {};

const updateUser = (args) => <UpdateUser {...args} />;
export const UpdateUserTemplate = updateUser.bind({});
UpdateUserTemplate.args = {};
