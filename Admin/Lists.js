import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import firebase from "../firebase";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
export default function CustomizedTables() {
  const [rows, setRows] = useState([]);
  const classes = useStyles();
  var db = firebase.firestore();
  const showDoctors = () => {
    db.collection("doctors").onSnapshot((querySnapshot) => {
      var data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setRows(data);
    });
  };
  useEffect(() => {
    showDoctors();
  }, []);

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Doctor Name</StyledTableCell>
            <StyledTableCell align="center">Medical No.</StyledTableCell>
            <StyledTableCell align="center">Location</StyledTableCell>
            <StyledTableCell align="center">Charges</StyledTableCell>
            <StyledTableCell align="center">Education</StyledTableCell>
            <StyledTableCell align="center">EmailId</StyledTableCell>
            <StyledTableCell align="center">Contact</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="centers">
                {row.medicalnumber}
              </StyledTableCell>
              <StyledTableCell align="center">{row.location}</StyledTableCell>
              <StyledTableCell align="center">{row.charge}</StyledTableCell>
              <StyledTableCell align="center">{row.education}</StyledTableCell>

              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center">{row.contact}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
