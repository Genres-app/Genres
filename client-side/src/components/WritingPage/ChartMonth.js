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

const BarChartMonth = () => {

    return <div><Line
        data = {{
            labels: ['6 Jan', '8 Jan', '10 Jan', '12 Jan', '14 Jan', '16 Jan', '18 Jan', '20 Jan','22 Jan','24 Jan','26 Jan','30 Jan'],
        datasets: [{
            label: 'Total numbers of viewers in the pass 30 days',
            data: [12, 19, 3, 5, 10, 3, 5, 6,4,5,8,14,20,14,10],
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

export default BarChartMonth