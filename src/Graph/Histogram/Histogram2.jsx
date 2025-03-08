// Histogram2.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, Typography } from '@mui/material';
import { useTheme } from '../../ThemeProvider';

const data = [
  { month: "Jan", TeamA: 40, TeamB: 50 },
  { month: "Feb", TeamA: 30, TeamB: 65 },
  { month: "Mar", TeamA: 20, TeamB: 40 },
  { month: "Apr", TeamA: 50, TeamB: 67 },
  { month: "May", TeamA: 60, TeamB: 45 },
  { month: "Jun", TeamA: 40, TeamB: 50 },
  { month: "Jul", TeamA: 35, TeamB: 25 },
  { month: "Aug", TeamA: 20, TeamB: 70 },
  { month: "Sep", TeamA: 55, TeamB: 30 },
];

const Histogram2 = ({
  scheme = 'light',
  surfaceColor = 'surface',
  textColor = 'onSurface',
  primaryColor = 'primary',
  secondaryColor = 'secondary',
  outlineColor = 'outline'
}) => {
  const { colors } = useTheme() || { colors: { allColors: { light: {} } } }; // Fallback if context is undefined
  const schemeColors = colors.allColors[scheme] || colors.allColors.light; // Fallback to light scheme

  return (
    <Card sx={{ 
      maxWidth: 800, 
      p: 3, 
      boxShadow: 3, 
      borderRadius: 3, 
      backgroundColor: schemeColors[surfaceColor]
    }}>
      <CardContent>
        <Typography variant="h6" style={{ color: schemeColors[textColor] }}>
          Website Visits
        </Typography>
        <Typography variant="body2" style={{ color: schemeColors[textColor] }}>
          (+43%) than last year
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis 
              dataKey="month" 
              stroke={schemeColors[outlineColor]} 
              tick={{ fill: schemeColors[textColor] }}
              tickMargin={10} 
            />
            <YAxis 
              stroke={schemeColors[outlineColor]}
              tick={{ fill: schemeColors[textColor] }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: schemeColors[surfaceColor],
                color: schemeColors[textColor],
                border: `1px solid ${schemeColors[outlineColor]}`
              }}
            />
            <Legend />
            <Bar 
              dataKey="TeamA" 
              fill={schemeColors[primaryColor]} 
              barSize={30} 
              name="Team A" 
            />
            <Bar 
              dataKey="TeamB" 
              fill={schemeColors[secondaryColor]} 
              barSize={30} 
              name="Team B" 
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default Histogram2;