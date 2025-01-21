import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

export const ColumnChart = ({data, label}) => {
    //console.log("dd"+data);

    console.log(data);

    const options = {
        chart: {
            type: 'column'
        },
    
        title: {
            text: label,
        },
    
        xAxis: {
            categories: data.xAxisCategories
        },
    
        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: 'ARR'
            }
        },
    
        tooltip: {
            format: '<b>{key}</b><br/>{series.name}: {y}<br/>' +
                'Total: {point.stackTotal}'
        },
    
        // plotOptions: {
        //     column: {
        //         stacking: 'normal'
        //     }
        // },
    
        series: [data.ySeries]
      };


    return (
        <>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </>
    )
}