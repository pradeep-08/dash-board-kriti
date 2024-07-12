import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [78, 55, 17],
      options: {
        chart: {
          height: 500, // Increase the height of the chart
          type: 'radialBar',
          offsetY: -10, // Adjusts vertical position to center
        },
        plotOptions: {
          radialBar: {
            startAngle: -90, // Starting angle to make it semi-circle
            endAngle: 90,   // Ending angle to make it semi-circle
            hollow: {
              margin: 0,
              size: "40%", // Size of the inner circle
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: true,
                offsetY: 10,
                fontSize: '22px',
              }
            }
          }
        },
        colors: [  "#EF6416", "#804B2D","#1B56ED"], // Customize bar colors here
        labels: ['Location', 'location2', 'Location3'],
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={350} />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default ApexChart;
