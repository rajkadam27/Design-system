import React from "react";
import Button from "./Button";
import { useState } from "react";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    color: {
      control: {
        type: "radio",
        options: ["positive", "negative", "all", "info", "contained", "outlined", "text"],
      },
    },
    size: {
      control: { type: "radio", options: ["small", "medium", "large"] },
    },
    variant: {
      control: { type: "radio", options: ["contained", "outlined", "text"] },
    },
  },
};

const Template = (args) => <Button {...args} />;

// Contained Button
export const Contained = Template.bind({});
Contained.args = {
  label: "Contained Button",
  variant: "contained",
  color: "positive", // You can change this to "negative", "all", etc.
};

// Outlined Button
export const Outlined = Template.bind({});
Outlined.args = {
  label: "Outlined Button",
  variant: "outlined",
  color: "negative",
};

// Text Button
export const Text = Template.bind({});
Text.args = {
  label: "Text Button",
  variant: "text",
  color: "info",
};

// Disabled Button
export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Button",
  disabled: true,
  color: "all",
};

// Positive Button
export const Positive = Template.bind({});
Positive.args = {
  label: "Positive Button",
  variant: "contained",
  color: "positive",
};

// Negative Button
export const Negative = Template.bind({});
Negative.args = {
  label: "Negative Button",
  variant: "contained",
  color: "negative",
};

// All Button
const ButtonWrapper = ({ showAll }) => {
  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      {showAll && (
        <>
          <Button label="Contained Button" variant="contained" color="positive" />
          <Button label="Outlined Button" variant="outlined" color="negative" />
          <Button label="Text Button" variant="text" color="info" />
          <Button label="Positive Button" variant="contained" color="positive" />
          <Button label="Negative Button" variant="contained" color="negative" />
          <Button label="Info Button" variant="contained" color="info" />
        </>
      )}
    </div>
  );
};

// Template for rendering buttons
const Template1 = (args) => {
  const [showAll, setShowAll] = useState(false);

  const handleAllClick = () => setShowAll(!showAll);

  return (
    <div>
      <Button
        label="Show All Buttons"
        onClick={handleAllClick}
        variant="contained"
        color="all"
      />
      <ButtonWrapper showAll={showAll} />
    </div>
  );
};

// The 'All' Button that toggles the visibility of all button types
export const All = Template1.bind({});
All.args = {};
