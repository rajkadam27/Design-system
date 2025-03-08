import React from 'react';
import Histogram3 from './Histogram3';
import { ThemeProvider } from '../../ThemeContext'; // Use ThemeContext.jsx
import theme from '../../material-theme.json';

const allColorKeys = Object.keys(theme.schemes.light);

export default {
  title: 'Graph/Histogram3',
  component: Histogram3,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    scheme: { control: 'select', options: Object.keys(theme.schemes) },
    surfaceColor: { control: 'select', options: allColorKeys, description: 'Surface background color' },
    textColor: { control: 'select', options: allColorKeys, description: 'Text color' },
    primaryColor: { control: 'select', options: allColorKeys, description: 'Bar color for 2023' },
    secondaryColor: { control: 'select', options: allColorKeys, description: 'Bar color for 2022' },
    outlineColor: { control: 'select', options: allColorKeys, description: 'Axis outline color' },
  },
};

const Template = (args) => <Histogram3 {...args} />;
export const Default = Template.bind({});
Default.args = {
  scheme: 'light',
  surfaceColor: 'surface',
  textColor: 'onSurface',
  primaryColor: 'primary',
  secondaryColor: 'secondary',
  outlineColor: 'outline',
};