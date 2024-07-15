import React from "react";
import ReactApexChart from "react-apexcharts";
import "../pages/chart.css";

class Bar1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Location-1",
          data: [64, 55, 41, 7, 12, 43, 21, 49],
        },
        {
          name: "Location-2",
          data: [10, 23, 20, 8, 30, 27, 33, 12],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
          stackType: "1%",
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "15%", // Adjust the bar width here (default is '70%')
            endingShape: "rounded", // Make bars with rounded corners
            events: {
              click: this.handleBarClick,
            },
          },
        },
        dataLabels: {
          enabled: false, // Disable all data labels
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
          offsetY: 0,
        },
        colors: ["#A263F7", "#FF8743"], // Customize bar colors here
      },
    };
  }

  // Event handler for bar click
  handleBarClick = (event, chartContext, config) => {
    // Example link URL
    const link = "https://example.com";

    // Open link in a new tab
    window.open(link, "_blank");
  };

  render() {
    return (
      <div className="functional-div">
        <div className="overview">Overview</div>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="bar"
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
