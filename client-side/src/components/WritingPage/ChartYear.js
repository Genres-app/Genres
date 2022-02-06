import React from 'react';
import {Line} from 'react-chartjs-2';
import { makeStyles, withStyles } from '@material-ui/core/styles';



// const useStyles = makeStyles((theme) => ({
//     bg: {
//       position: 'absolute',
//       backgroundColor: '#855cde',
//       height: 350,
//       width: '100%',
//       zIndex: -1,
//     },
//     root: {
//       display: "block",
//       minWidth: 250,
//       width: '75%',
//       margin: '0 auto',
//     },
//     titleContainer: {
//       display: 'flex',
//       alignItems: 'center',
//       height: 250,
//       padding: 0,
//       color: theme.palette.background.paper,
//     },
//     title: {
//       paddingBottom: theme.spacing(1),
//       fontWeight: 'bold',
//     },
//     accordion: {
//       // borderRadius: theme.shape.borderRadius,
//     },
//     cover: {
//       height: 180,
//       width: 120,
//       display: 'block',
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//     },
//     bookInfos: {
//       paddingLeft: theme.spacing(4),
//     },
//     authorChips: {
//       margin: "4px 8px 4px 0",
//       "&:last-child":
//         { marginRight: 0, }
//     },
//     buttonGroup: {
//       display: 'flex',
//       flexDirection: 'row-reverse',
//       paddingTop: theme.spacing(1)
//     }
//   }));

const BarChartYear = () => {

    return <div><Line
        data = {{
            labels: ['Jan 6 2022', 'Dec 6 2021', 'Nov 6 2021', 'Oct 6 2021', 'Sep 6 2021', 'Aug 6 2021', 'Jul 6 2021', 'Jun 6 2021', 'May 6 2021', 'Apr 6 2021', 'March 6 2021', 'Feb 6 2021'],
        datasets: [{
            label: 'Total numbers of viewers in the past 12 months',
            data: [12, 19, 3, 5, 10, 3, 5, 14, 20 ,10, 12, 4],
            backgroundColor: [
                'rgba(102, 0, 204, 0.2)',
                'rgba(102, 0, 204, 0.2)',
                'rgba(102, 0, 204, 0.2)',
                'rgba(102, 0, 204, 0.2)',
                'rgba(102, 0, 204, 0.2)',
                'rgba(102, 0, 204, 0.2)',
            ],
            borderColor: [
                'rgba(102, 0, 204, 1)',
                'rgba(102, 0, 204, 1)',
                'rgba(102, 0, 204, 1)',
                'rgba(102, 0, 204, 1)',
                'rgba(102, 0, 204, 1)',
                'rgba(102, 0, 204, 1)',
            ],
            borderWidth: 2,
            pointRadius: 3,
            tension: 0,
        }]
        }}
        height={100}
        width={150}
    /></div>

}

export default BarChartYear