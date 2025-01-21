import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

export const StackAreaChart = ({data, label}) => {

    const options = {
        chart: {
            type: 'area'
        },
        title: {
            text: label 
        },
        tooltip: {
            shared: true,
            headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span>' +
                '<br>'
        },
        plotOptions: {
            series: {
                pointStart: 2012
            },
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
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
