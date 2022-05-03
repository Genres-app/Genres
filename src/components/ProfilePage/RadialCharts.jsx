import React from 'react'
import Chart from "react-apexcharts";
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import RgbaInterpolate from '../../utilities/RgbaInterpolate';
import hexToRgb from '../../utilities/HexToRgb';

const useStyles = makeStyles((theme) => ({
  radialBg: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    width: 210,
    height: 210,
    borderRadius: "50%",
    left: "calc(50% - 105px)",
    animation: "4s linear 0s infinite normal $breath",
  },
  "@keyframes breath": {
    "0%": {
      boxShadow: `
        -10px 10px 10px -10px ${theme.palette.secondary.main},
        10px 0 15px -10px ${theme.palette.primary.main},
        -8px -14px 10px -10px ${RgbaInterpolate(
          hexToRgb(theme.palette.secondary.main).r,
          hexToRgb(theme.palette.secondary.main).g,
          hexToRgb(theme.palette.secondary.main).b,
          .5,
          .5,
          hexToRgb(theme.palette.primary.main).r,
          hexToRgb(theme.palette.primary.main).g,
          hexToRgb(theme.palette.primary.main).b,
          .5,
          true
          )}
        `,
    },
    "33%": {
      boxShadow: `
        -10px 10px 10px -10px ${theme.palette.primary.main},
        10px 0 15px -10px ${RgbaInterpolate(
          hexToRgb(theme.palette.secondary.main).r,
          hexToRgb(theme.palette.secondary.main).g,
          hexToRgb(theme.palette.secondary.main).b,
          .5,
          .5,
          hexToRgb(theme.palette.primary.main).r,
          hexToRgb(theme.palette.primary.main).g,
          hexToRgb(theme.palette.primary.main).b,
          .5,
          true
          )},
        -8px -14px 10px -10px ${theme.palette.secondary.main}
        `,
    },
    "67%": {
      boxShadow: `
        -10px 10px 10px -10px ${RgbaInterpolate(
          hexToRgb(theme.palette.secondary.main).r,
          hexToRgb(theme.palette.secondary.main).g,
          hexToRgb(theme.palette.secondary.main).b,
          .5,
          .5,
          hexToRgb(theme.palette.primary.main).r,
          hexToRgb(theme.palette.primary.main).g,
          hexToRgb(theme.palette.primary.main).b,
          .5,
          true
          )},
        10px 0 15px -10px ${theme.palette.secondary.main},
        -8px -14px 10px -10px ${theme.palette.primary.main}
        `,
    },
    "100%": {
      boxShadow: `
        -10px 10px 10px -10px ${theme.palette.secondary.main},
        10px 0 15px -10px ${theme.palette.primary.main},
        -8px -14px 10px -10px ${RgbaInterpolate(
          hexToRgb(theme.palette.secondary.main).r,
          hexToRgb(theme.palette.secondary.main).g,
          hexToRgb(theme.palette.secondary.main).b,
          .5,
          .5,
          hexToRgb(theme.palette.primary.main).r,
          hexToRgb(theme.palette.primary.main).g,
          hexToRgb(theme.palette.primary.main).b,
          .5,
          true
          )}
        `,
    },
  },
}));

//ABOUT: Radial charts that are displayed if on activity tab and viewport width > 1024.
const RadialCharts = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const chartValue = (props.value / props.total) * 100;

  const state = {
    series: [chartValue],
    options: {
      chart: {
        type: 'radialBar',
        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 1000,
            animateGradually: {
                enabled: true,
                delay: 150
            },
            dynamicAnimation: {
                enabled: true,
                speed: 350
            }
        },
      },
      colors: ["#A1A6FF"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "70%",
            background: theme.palette.background.paper,
          },
          track: {
            dropShadow: {
              enabled: false,
              top: 2,
              left: 0,
              blur: 8,
              opacity: .7,
              color: "#855cde",
            },
            background: theme.palette.background.default,
          },
          dataLabels: {
            name: {
              offsetY: -14,
              color: theme.palette.primary.main,
              fontSize: "13px",
              // fontWeight: 'bold',
              fontFamily: "'Readex Pro', 'Roboto', 'Helvetica', 'Arial', sans-serif",
            },
            value: {
              offsetY: 6,
              color: theme.palette.primary.main,
              fontSize: "28px",
              fontWeight: 'bold',
              fontFamily: "'Readex Pro', 'Roboto', 'Helvetica', 'Arial', sans-serif",
              show: true,
              formatter: function (val) {
                if (props.readTime) {
                  return `${props.value} mins`;
                } else if (props.pagesRead) {
                  return `${props.value}`;
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
          shade: "light",
          type: "diagonal2",
          gradientToColors: ["#63FFE6"],
          stops: [0, 100]
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: [props.label]
    },
  };

  return (
    <div style={{ display: "relative", height: 250, display: "flex", alignItems: 'center' }}>
      <div className={classes.radialBg} style={{transform: `rotate(${props.rotate}deg)`}}></div>
      <Chart options={state.options} series={state.series} type="radialBar" height="250px" width="250px" />
    </div>

  )
}

export default RadialCharts
