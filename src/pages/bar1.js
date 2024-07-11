import React from "react";
import ReactApexChart from "react-apexcharts";

class Bar1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [64, 55, 41, 67, 22, 43, 21, 49],
        },
        {
          data: [100, 23, 20, 8, 13, 27, 33, 12],
        },
      ],
      options: {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          stackType: '1%'
        },
        plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '30%', // Adjust the bar width here (default is '70%')
              endingShape: 'rounded' // Make bars with rounded corners
            },
          },
        responsive: [
          {
            breakpoint: 180,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 10,
              },
            },
          },
        ],
        xaxis: {
          categories: ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8"],
        },
        fill: {
          opacity: 10,
        },
        legend: {
          position: "right",
          offsetX: 0,
          offsetY: 30,
        },
        colors: ["#A263F7", "#FF8743"], // Customize bar colors here
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height={300}
            width={700}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

// // Render the ApexChart component
// const domContainer = document.querySelector("#app");
// ReactDOM.render(<Bar1 />, domContainer);

export default Bar1;
