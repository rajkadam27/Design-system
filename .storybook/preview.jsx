import { Global } from '@emotion/react';
import { fn } from '@storybook/test';
import { GlobalStyle } from '../src/shared/global';

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [
    (Story) => (
      <>
        <Global styles={GlobalStyle} />
        <Story />
      </>
    ),
  ],

  parameters: {
    actions: { onClick: fn() }, // Explicit action handler
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  tags: ['autodocs', 'autodocs', 'autodocs'], // Removed duplicate tag
};

export default preview;
