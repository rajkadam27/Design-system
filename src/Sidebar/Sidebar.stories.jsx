import React from "react";
import { MemoryRouter } from "react-router-dom";
import Sidebar from "./Sidebar";
import Sidebar2 from "./Sidebar2";


export default {
  title: "Components/Sidebar",
  component: Sidebar,
  // decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],
};

const Template = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});

const Template2 = (args) => <Sidebar2 {...args} />;

export const Default2 = Template2.bind({});