import React from "react";
import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    background: { control: "color" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
  },
};

// Base template for stories
const Template = (args) => <Card {...args} />;


export const DefaultCard = Template.bind({});
DefaultCard.args = {
  title: "Sample Card",
  description: "This is a sample card description",
  image: "https://photographylife.com/wp-content/uploads/2014/09/Nikon-D750-Image-Samples-2.jpg",
  background: "#f9f9f9",
  size: "medium",
};

export const LargeCard = Template.bind({});
LargeCard.args = {
  title: "Large Card",
  description: "This is a large-sized card",
  image: "https://aigeeked.com/wp-content/uploads/2022/12/ai-image-generator.jpg",
  background: "#e0f7fa",
  size: "large",
};

export const SmallCard = Template.bind({});
SmallCard.args = {
  title: "Small Card",
  description: "This is a small-sized card",
  image: "https://tse3.mm.bing.net/th?id=OIP.o0-_5Yz2Vr32GtIPXUKTLQHaEo&pid=Api&P=0&h=180",
  background: "#ffebee",
  size: "small",
};
