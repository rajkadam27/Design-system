import React from "react";
import SearchBar from "./SearchBar";

export default {
  title: "Google UI/SearchBar",
  component: SearchBar,
};

const Template = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Search Google or type a URL...",
};
