import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Box } from "@mui/material";
import { useThemeContext } from '../../ThemeContext'; // Adjust path based on your structure

const data = [
  { country: "Italy", "2022": 44, "2023": 53 },
  { country: "Japan", "2022": 32, "2023": 55 },
  { country: "China", "2022": 33, "2023": 41 },
  { country: "Canada", "2022": 52, "2023": 64 },
  { country: "France", "2022": 13, "2023": 22 },
];

const Histogram3 = ({
  scheme = 'light', // Unused but kept for consistency
  surfaceColor = 'surface', // Default to surface, overridden to white initially
  textColor = 'onSurface', // Text color for axis and legend
  primaryColor = 'primary', // Bar color for 2023
  secondaryColor = 'secondary', // Bar color for 2022
  outlineColor = 'outline', // Axis and outline color
}) => {
  const context = useThemeContext();
  const { selectedThemeColor, schemeColors, getColorValue } = context || {
    selectedThemeColor: 'primary', // Fallback theme color
    schemeColors: {
      surface: '#ffffff', // White background for chart
      onSurface: '#333333', // Dark text for contrast
      primary: '#1976D2', // Default primary (blue)
      secondary: '#F28E2C', // Default secondary (orange)
      outline: '#757575', // Default outline (gray)
    },
    getColorValue: (key) => schemeColors[key] || '#ffffff', // Fallback to white
  };

  // Theme-related variables for the outer Box (global theme)
  const backgroundColor = selectedThemeColor ? getColorValue(selectedThemeColor) : '#ffffff'; // White initially
  const isDarkBackground = parseInt(backgroundColor.replace('#', ''), 16) < 0x888888;
  const contrastColor = isDarkBackground ? '#ffffff' : '#333333';

  // Card-specific colors (for chart container)
  const cardColor = getColorValue(surfaceColor) || '#ffffff'; // White initially
  const isDarkCard = parseInt(cardColor.replace('#', ''), 16) < 0x888888;
  const cardContrastColor = isDarkCard ? '#ffffff' : '#333333';

  return (
    <Box sx={{ p: 2, backgroundColor, borderRadius: "10px", boxShadow: 2 }}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          style={{ backgroundColor: cardColor }} // White background
        >
          <XAxis
            type="number"
            stroke={getColorValue(outlineColor)}
            tick={{ fill: getColorValue(textColor) }}
          />
          <YAxis
            dataKey="country"
            type="category"
            width={80}
            stroke={getColorValue(outlineColor)}
            tick={{ fill: getColorValue(textColor) }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: cardColor,
              border: `1px solid ${getColorValue(outlineColor)}`,
              color: cardContrastColor,
            }}
          />
          <Legend
            formatter={(value) => (
              <span style={{ color: getColorValue(textColor) }}>{value}</span>
            )}
          />
          <Bar dataKey="2022" fill={getColorValue(secondaryColor)} barSize={10} />
          <Bar dataKey="2023" fill={getColorValue(primaryColor)} barSize={10} />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default Histogram3;