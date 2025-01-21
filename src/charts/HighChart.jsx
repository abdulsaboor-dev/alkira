import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

export const HighChart = () => {

    const options = {
        chart: {
            type: 'area'
        },
        title: {
            text: 'Set Daily Reminder'
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
        series: [{
            name: 'Ocean transport',
            data: [
                13234, 12729, 11533, 17798, 10398, 12811,
                15483, 16196, 15060, 13365, 13301
            ]
        }, {
            name: 'Households',
            data: [
                6686, 6536, 6389, 6384, 6251, 5719,
                5611, 5040, 5079, 5088, 4988
            ]

        },
    ]
    };

    return (
        <>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </>
    )
}
