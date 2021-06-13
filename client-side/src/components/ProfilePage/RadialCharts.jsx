import React from 'react'
import Chart from "react-apexcharts";

//ABOUT: Radial charts that are displayed if on activity tab and viewport width > 1024.
const RadialCharts = (props) => {
    const chartValue = (props.value/props.total)*100;

    const state = {
        series: [chartValue],
        options: {
            chart: {
                type: 'radialBar',
            },
            colors: ["#A1A6FF"],
            plotOptions: {
                radialBar: {
                    hollow: {
                        margin: 0,
                        size: "62%",
                        background: "#293450"
                    },
                    track: {
                        dropShadow: {
                            enabled: true,
                            top: 2,
                            left: 0,
                            blur: 8,
                            opacity: 0.3
                        }
                    },
                    dataLabels: {
                        name: {
                        offsetY: -10,
                        color: "#fff",
                        fontSize: "13px"
                        },
                        value: {
                        color: "#fff",
                        fontSize: "22px",
                        show: true,
                        formatter: function(val) {
                            if (props.readTime) {
                                return `${props.value} mins`;
                            } else if (props.pagesRead) {
                                return `${props.value} pages`;
                            } else if (props.eventUnit) {
                                return `${props.value} ${props.eventUnit}`;
                            } else
                                return 'TBD';
                        }
                        },
                    }
                }
            },
            fill: {
                type: "gradient",
                gradient: {
                    shade: "dark",
                    type: "horizontal",
                    gradientToColors: ["#63FFE6"],
                    stops: [0, 100]
                }
            },
            labels: [props.label]
        },
      };
    
    return (
        <Chart options={state.options} series={state.series} type="radialBar" height={285} />            
    )
}

export default RadialCharts
