import React from "react";
import ChartBar from './ChartBar'
import "./Chart.css";

const Chart = (props) => {
  const dataGroup = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataGroup);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          id={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
