import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { Box, Typography, LinearProgress } from "@mui/material";

const Histogram = () => {
  const svgRef = useRef();

  const dataA = [30, 50, 40, 60, 70, 80, 90, 85, 75, 65, 55, 45]; // Team A data
  const dataB = [20, 40, 35, 55, 65, 75, 85, 80, 70, 60, 50, 40]; // Team B data
  const title = "Website visits (+43%) than last year";
  const progress = 43;

  useEffect(() => {
    const width = 600;
    const height = 400;
    const margin = { top: 40, right: 100, bottom: 50, left: 50 };

    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("background", "#f9f9f9")
      .style("border-radius", "10px")
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const xScale = d3.scaleBand()
      .domain(months)
      .range([0, width - margin.left - margin.right])
      .padding(0.4); // Increased padding for better spacing

    const yScale = d3.scaleLinear()
      .domain([0, 100])
      .range([height - margin.top - margin.bottom, 0]);

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale).ticks(5);

    svg.append("g")
      .attr("transform", `translate(0, ${height - margin.top - margin.bottom})`)
      .call(xAxis)
      .selectAll("text")
      .style("font-size", "12px");

    svg.append("g")
      .call(yAxis)
      .selectAll("text")
      .style("font-size", "12px");

    // Add vertical lines for each month
    svg.selectAll(".vertical-line")
      .data(months)
      .enter()
      .append("line")
      .attr("class", "vertical-line")
      .attr("x1", (d) => xScale(d) + xScale.bandwidth() / 2)
      .attr("y1", 0)
      .attr("x2", (d) => xScale(d) + xScale.bandwidth() / 2)
      .attr("y2", height - margin.top - margin.bottom)
      .attr("stroke", "#ccc")
      .attr("stroke-width", 1);

    // Tooltip for displaying values
    const tooltip = d3.select("body")
      .append("div")
      .style("position", "absolute")
      .style("background", "#fff")
      .style("border", "1px solid #ccc")
      .style("padding", "5px")
      .style("border-radius", "5px")
      .style("font-size", "12px")
      .style("visibility", "hidden");

    // Add bars for Team A
    svg.selectAll(".bar-teamA")
      .data(dataA)
      .enter()
      .append("rect")
      .attr("class", "bar-teamA")
      .attr("x", (_, i) => xScale(months[i]))
      .attr("y", (d) => yScale(d))
      .attr("width", xScale.bandwidth() / 2 - 5) // Reduced width for spacing
      .attr("height", (d) => height - margin.top - margin.bottom - yScale(d))
      .attr("fill", "#4e79a7") // Adjusted color to match the image
      .on("mouseover", function (event, d) {
        tooltip.style("visibility", "visible").text(`Team A: ${d}`);
      })
      .on("mousemove", function (event) {
        tooltip
          .style("top", event.pageY - 10 + "px")
          .style("left", event.pageX + 10 + "px");
      })
      .on("mouseout", function () {
        tooltip.style("visibility", "hidden");
      });

    // Add bars for Team B
    svg.selectAll(".bar-teamB")
      .data(dataB)
      .enter()
      .append("rect")
      .attr("class", "bar-teamB")
      .attr("x", (_, i) => xScale(months[i]) + xScale.bandwidth() / 2)
      .attr("y", (d) => yScale(d))
      .attr("width", xScale.bandwidth() / 2 - 5) // Reduced width for spacing
      .attr("height", (d) => height - margin.top - margin.bottom - yScale(d))
      .attr("fill", "#f28e2c") // Adjusted color to match the image
      .on("mouseover", function (event, d) {
        tooltip.style("visibility", "visible").text(`Team B: ${d}`);
      })
      .on("mousemove", function (event) {
        tooltip
          .style("top", event.pageY - 10 + "px")
          .style("left", event.pageX + 10 + "px");
      })
      .on("mouseout", function () {
        tooltip.style("visibility", "hidden");
      });

    // Add legend
    const legend = svg.append("g").attr("transform", `translate(${width - margin.right - 20}, 0)`);

    legend.append("rect").attr("x", 0).attr("y", 0).attr("width", 12).attr("height", 12).attr("fill", "#4e79a7");
    legend.append("text").attr("x", 20).attr("y", 10).text("Team A").style("font-size", "12px");

    legend.append("rect").attr("x", 0).attr("y", 20).attr("width", 12).attr("height", 12).attr("fill", "#f28e2c");
    legend.append("text").attr("x", 20).attr("y", 30).text("Team B").style("font-size", "12px");

  }, []);

  return (
    <Box sx={{ p: 2, background: "#fff", borderRadius: "10px", boxShadow: 2 }}>
      <Typography variant="h6" align="center">{title}</Typography>
      <svg ref={svgRef}></svg>
      <Typography variant="body2" align="center" sx={{ mt: 1 }}>
        Progress: {progress}%
      </Typography>
      <LinearProgress variant="determinate" value={progress} sx={{ height: 8, borderRadius: 5 }} />
    </Box>
  );
};

export default Histogram;