import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const Bar2 = () => {
  useEffect(() => {
    const options = {
      series: [19, 67, 90],
      chart: {
        height: 250,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: -90,
          endAngle: 90,
          hollow: {
            margin: 150,
            size: '60%',
            background: '#1B56ED',
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            }
          },
          barWidth: 35, // Adjust the bar width here
          barLabels: {
            enabled: true,
            useSeriesColors: true,
            margin: 18,
            fontSize: '10px',
            formatter: function(seriesName, opts) {
              return seriesName;
            },
          },
        }
      },
      colors: ['#EF6416', '#804B2D', '#1B56ED'],
      responsive: [{
        breakpoint: 100,
        options: {
          legend: {
            show: false
          }
        }
      }]
    };

    const chart = new ApexCharts(document.getElementById('chart'), options);
    chart.render();

    // Clean up function
    return () => {
      chart.destroy();
    };
  }, []); // Empty dependency array to run effect only once

  return (
    <div id="chart"></div>
  );
}

export default Bar2;
