import { Global } from "@emotion/react";
import { fn } from "@storybook/test";
import { GlobalStyle } from "../src/shared/global";
import { reactRouterParameters } from "storybook-addon-react-router-v6";
import { MemoryRouter } from "react-router-dom";


/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [
    (Story) => (
      <>
        <Global styles={GlobalStyle} />
      <MemoryRouter>
       
          <Story />
        
      </MemoryRouter>
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

  tags: ["autodocs", "autodocs", "autodocs"], // Removed duplicate tag
};

export default preview;
