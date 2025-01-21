import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

export const AreaChart = ({data, label}) => {

    const options = {
        chart: {
            type: 'area'
          },
          title: {
            text: label
          },
          xAxis: {
            allowDecimals: false,
            accessibility: {
              rangeDescription: 'Range: 1940 to 2024.'
            }
          },
          tooltip: {
            pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>' +
              'warheads in {point.x}'
          },
          plotOptions: {
            area: {
              pointStart: 1940,
              marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                  hover: {
                    enabled: true
                  }
                }
              }
            }
          },
          series: data
    };

    return (
        <>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </>
    )
}
