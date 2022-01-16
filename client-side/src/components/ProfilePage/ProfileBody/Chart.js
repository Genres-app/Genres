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

const BarChart = () => {

    return <div><Line
        data = {{
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'Numbers of viewers last week',
            data: [12, 19, 3, 5, 10, 3, 5],
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
        }]
        }}
        height={200}
        width={300}
    /></div>

}

export default BarChart