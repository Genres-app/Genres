import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { HashLink } from 'react-router-hash-link';

import './OnHover.css';

// This page with the NLPTabs.js is the table of contents for a given Book.
// FIXME: this page should be dynamically loaded based on the backend object.

// CSS BELOW:
const useStyles = makeStyles({
  icon: {
    paddingTop: '6px',
    paddingRight: '4px',
    fontSize: 16,
  }
});

// BELOW: PLACEHOLDERS
// FIXME: these need to be replaced with an actual backend implementation.
function createData(Chapter, Comments, Views, Upload) {
  return { Chapter, Comments, Views, Upload };
}

const rows = [
  createData('1: Zot zot zot', 80, 120, '1 day ago'),
  createData('2: Zot zot zot', 80, 120, '1 day ago'),
  createData('3: Zot zot zot', 80, 120, '1 day ago'),
  createData('4: Zot zot zot', 80, 120, '1 day ago'),
  createData('5: Zot zot zot', 80, 120, '1 day ago'),
  createData('6: Zot zot zot', 80, 120, '1 day ago'),
  createData('7: Zot zot zot', 80, 120, '1 day ago'),
  createData('8: Zot zot zot', 80, 120, '1 day ago'),
  createData('9: Zot zot zot', 80, 120, '1 day ago'),
  createData('10: Zot zot zot', 80, 120, '1 day ago'),
  createData('11: Zot zot zot', 80, 120, '1 day ago'),
  createData('12: Zot zot zot', 80, 120, '1 day ago'),
];
// ABOVE: PLACEHOLDERS

export default function NLPTableContents() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault(); // DELETE LATER

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Chapter</TableCell>
            <TableCell align="right">Comments</TableCell>
            <TableCell align="right">Views</TableCell>
            <TableCell align="right">Upload</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Chapter}>
              <TableCell component="th" scope="row">
                {/* INSERT RELEVANT LINK HERE in href="#" */}
                <Link href="/reading" color="inherit">{row.Chapter}</Link> 
              </TableCell>
              <TableCell align="right">
                {/* INSERT RELEVANT LINK HERE in href="#" */}
                {/* FIXME: This does not redirect to anything as of now. 
                Comment for each reading page has yet to be implemented. */}
                <HashLink to="/reading#comments" className="hash-link">
                  <ChatBubbleOutlineIcon className={classes.icon} />
                  {row.Comments}
                </HashLink>
              </TableCell>
              <TableCell align="right">
                <VisibilityIcon className={classes.icon} />
                {row.Views}
              </TableCell>
              <TableCell align="right"><i>{row.Upload}</i></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
