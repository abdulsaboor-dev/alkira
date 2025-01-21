import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

export const MultiLineChart = ({data,label, yAxis}) => {

    const options = {
        title: {
            text: label,
            align: 'left'
        },
    
        subtitle1: {
            text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
            align: 'left'
        },
    
        yAxis: {
            title: {
                text: yAxis //'Annual Recurring revenue'
            }
        },
    
        xAxis: {
             categories: data.xAxisCategories
        },
    
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
    
        plotOptions1: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2010
            }
        },
    
        series: data.ySeries,
    
        // responsive: {
        //     rules: [{
        //         condition: {
        //             maxWidth: 500
        //         },
        //         chartOptions: {
        //             legend: {
        //                 layout: 'horizontal',
        //                 align: 'center',
        //                 verticalAlign: 'bottom'
        //             }
        //         }
        //     }]
        // }
    }

    return (
        <>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </>
    )
}

