// Histogram2.stories.jsx
import React from 'react';
import Histogram from './Histogram';
import Histogram3 from './Histogram3';
import Histogram2 from './Histogram2';
import { ThemeProvider } from '../../ThemeProvider';
import theme from '../../material-theme.json'
const allColorKeys = Object.keys(theme.schemes.light);

export default {
  title: 'Graph/Histogram2',
  component: Histogram2,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    )
  ],
  argTypes: {
    scheme: {
      control: 'select',
      options: Object.keys(theme.schemes),
      description: 'Color scheme to use'
    },
    surfaceColor: {
      control: 'select',
      options: allColorKeys,
      description: 'Surface background color'
    },
    textColor: {
      control: 'select',
      options: allColorKeys,
      description: 'Text color'
    },
    primaryColor: {
      control: 'select',
      options: allColorKeys,
      description: 'Team A bar color'
    },
    secondaryColor: {
      control: 'select',
      options: allColorKeys,
      description: 'Team B bar color'
    },
    outlineColor: {
      control: 'select',
      options: allColorKeys,
      description: 'Axis outline color'
    }
  }
};

const Template = (args) => <Histogram2 {...args} />;

export const Default = Template.bind({});
Default.args = {
  scheme: 'light',
  surfaceColor: 'surface',
  textColor: 'onSurface',
  primaryColor: 'primary',
  secondaryColor: 'secondary',
  outlineColor: 'outline'
};

const Template2 = (args) => <Histogram {...args} />;
export const Default2 = Template2.bind({});
Default2.args = {};

const Template3 = (args) => <Histogram3 {...args} />;
export const Default3 = Template3.bind({});
Default3.args = {};