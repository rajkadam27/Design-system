import React from 'react';
import Sparkline from './Sparkline';

export default {
  title: 'Graph/Sparkline',
  component: Sparkline,
};

// Default Story
export const Default = () => (
  <Sparkline 
    data={[5, 10, 15, 20, 25, 30, 35, 40, 45, 50]}
    loading={false}
    color="steelblue"
    showAxis={false}
    showGrid={false}
  />
);

// Custom Color Story
export const CustomColor = () => (
  <Sparkline 
    data={[10, 20, 15, 25, 30, 40, 35, 50, 60]}
    loading={false}
    color="orange"
    showAxis={false}
    showGrid={false}
  />
);

// With Grid Lines
export const WithGrid = () => (
  <Sparkline 
    data={[5, 15, 10, 20, 25, 35, 40, 45, 50, 60]}
    loading={false}
    color="green"
    showAxis={false}
    showGrid={true}
  />
);

// With Axes
export const WithAxes = () => (
  <Sparkline 
    data={[5, 10, 15, 20, 25, 30, 35, 40, 45, 50]}
    loading={false}
    color="red"
    showAxis={true}
    showGrid={false}
  />
);

// Loading State
export const Loading = () => (
  <Sparkline 
    data={[]} 
    loading={true}
    color="steelblue"
    showAxis={false}
    showGrid={false}
  />
);
