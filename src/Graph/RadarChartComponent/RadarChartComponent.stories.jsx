import RadarChartComponent from "./RadarChartComponent";

export default {
    title: "Graph/RadarChartComponent",
    component: RadarChartComponent,
};

const Template = (args) => <RadarChartComponent {...args} />;
export const Default = Template.bind({});
Default.args = {};