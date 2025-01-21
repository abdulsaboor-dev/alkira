const areaChartJson = [{
  name: 'Product A',
  data: [
    null, null, null, null, null, 2, 9, 13, 50, 170, 299, 438, 841,
    1169, 1703, 2422, 3692, 5543, 7345, 12298, 18638, 22229, 25540,
    28133, 29463, 31139, 31175, 31255, 29561, 27552, 26008, 25830,
    26516, 27835, 28537, 27519, 25914, 25542, 24418, 24138, 24104,
    23208, 22886, 23305, 23459, 23368, 23317, 23575, 23205, 22217,
    21392, 19008, 13708, 11511, 10979, 10904, 11011, 10903, 10732,
    10685, 10577, 10526, 10457, 10027, 8570, 8360, 7853, 5709, 5273,
    5113, 5066, 4897, 4881, 4804, 4717, 4571, 4018, 3822, 3785, 3805,
    3750, 3708, 3708, 3708, 3708, 14301
  ]
}
]

let singleSeriesColumnChart = {
  "xAxisCategories": [
    "2023-06",
    "2023-07",
    "2023-08",
    "2023-09",
    "2023-10"
  ],
  "ySeries": {
    "data": [
      17687579.90568308,
      18737945.40863443,
      20917767.07361905,
      20435111.065085713,
      21140457.108685713
    ],
    "name": "ARR by month"
  }
}

const columnChartJson = [{
  name: 'Norway',
  data: [148, 133, 124],
  stack: 'Europe'
}, {
  name: 'Germany',
  data: [102, 98, 65],
  stack: 'Europe'
}, {
  name: 'United States',
  data: [113, 122, 95],
  stack: 'North America'
}, {
  name: 'Canada',
  data: [77, 72, 80],
  stack: 'North America'
}]

const stackAreaChartJson = [{
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

const multiLinesChart = [{
  name: 'Busines modal 1',
  data: [
    43934, 48656, 65165, 81827, 112143, 142383,
    171533, 165174, 155157, 161454, 154610, 168960
  ]
}, {
  name: 'Busines modal 2',
  data: [
    24916, 37941, 29742, 29851, 32490, 30282,
    38121, 36885, 33726, 34243, 31050, 33099
  ]
}, {
  name: 'Busines modal 3',
  data: [
    11744, 30000, 16005, 19771, 20185, 24377,
    32147, 30912, 29243, 29213, 25663, 28978
  ]
}, {
  name: 'Busines modal 4',
  data: [
    null, null, null, null, null, null, null,
    null, 11164, 11218, 10077, 12530
  ]
}, {
  name: 'Busines modal 5',
  data: [
    21908, 5548, 8105, 11248, 8989, 11816, 18274,
    17300, 13053, 11906, 10073, 11471
  ]
}]

const multiSeriesLineChartData = {
  xAxisCategories: [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ],
  ySeries:
    [{
      name: 'Busines modal 1',
      data: [
        43934, 48656, 65165, 81827, 112143, 142383,
        171533, 165174, 155157, 161454, 154610, 168960
      ]
    }, {
      name: 'Busines modal 2',
      data: [
        24916, 37941, 29742, 29851, 32490, 30282,
        38121, 36885, 33726, 34243, 31050, 33099
      ]
    }, {
      name: 'Busines modal 3',
      data: [
        11744, 30000, 16005, 19771, 20185, 24377,
        32147, 30912, 29243, 29213, 25663, 28978
      ]
    }, {
      name: 'Busines modal 4',
      data: [
        null, null, null, null, null, null, null,
        null, 11164, 11218, 10077, 12530
      ]
    }, {
      name: 'Busines modal 5',
      data: [
        21908, 5548, 8105, 11248, 8989, 11816, 18274,
        17300, 13053, 11906, 10073, 11471
      ]
    }]
}

export default { areaChartJson, columnChartJson, stackAreaChartJson, multiLinesChart, singleSeriesColumnChart, multiSeriesLineChartData };