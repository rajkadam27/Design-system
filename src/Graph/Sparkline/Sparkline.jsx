import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const Sparkline = ({ data, customData, loading, color = "steelblue", showAxis = false, showGrid = false }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (loading) return;

    const width = 200;
    const height = 50;

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // Clear previous elements before updating
    svg.selectAll("*").remove();

    // Create scales
    const x = d3.scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data) || 1]) // Avoid NaN issues
      .range([height, 0]);

    // Create the line
    const line = d3.line()
      .x((_, i) => x(i))
      .y(d => y(d));

    // Draw the line
    svg.append("path")
      .data([data])
      .attr("fill", "none")
      .attr("stroke", color)
      .attr("stroke-width", 1.5)
      .attr("d", line);

    // Add grid lines if needed
    if (showGrid) {
      svg.selectAll(".grid")
        .data(y.ticks(5))
        .enter()
        .append("line")
        .attr("class", "grid")
        .attr("x1", 0)
        .attr("x2", width)
        .attr("y1", d => y(d))
        .attr("y2", d => y(d))
        .attr("stroke", "#ccc")
        .attr("stroke-width", 0.5)
        .attr("stroke-dasharray", "2,2");
    }

    // Add axes if needed
    if (showAxis) {
      svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x));

      svg.append("g")
        .call(d3.axisLeft(y));
    }

  }, [data, loading, color, showAxis, showGrid]);

  if (loading) return <div>Loading...</div>;

  return <svg ref={svgRef}></svg>;
};

export default Sparkline;
