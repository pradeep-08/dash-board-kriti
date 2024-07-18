import React from "react";
import ReactApexChart from "react-apexcharts";
import "../pages/chart.css";
class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Location-1",
      series: [78, 85, 59],
      options: {
        chart: {
          height: 400, // Increase the height of the chart
          type: "radialBar",
          offsetY: -15, // Adjusts vertical position to center
        },
        plotOptions: {
          radialBar: {
            startAngle: -90, // Starting angle to make it semi-circle
            endAngle: 90, // Ending angle to make it semi-circle
            hollow: {
              margin: 40,
              size: "60%", // Size of the inner circle
            },
            dataLabels: {
              name: {
                show: true,
              },
              value: {
                show: true,
                offsetY: 10,
                fontSize: "22px",
              },
            },
          },
        },
        colors: ["#EF6416", "#804B2D", "#1B56ED"], // Customize bar colors here
        labels: ["Location", "location-2", "Location-3"],
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart-1">
          <div className="overview-sum">Summary</div>
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}
export default ApexChart;
