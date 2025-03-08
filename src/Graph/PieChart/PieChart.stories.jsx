import React, { useState } from "react";
import PieChart from "./PieChart";
import * as d3 from "d3";

export default {
  title: "Graph/PieChart",
  component: PieChart,
};

const Template = (args) => <PieChart {...args} />;
export const Default = Template.bind({});
Default.args = {};
