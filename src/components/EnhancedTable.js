import React, { useState } from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { TablePagination, TableFooter } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import employeeData from '../utils/employeeData';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        background: 'linen'
    },
});

export default function SimpleTable() {

    const [employeeCount] = useState(employeeData.results.length);
    const [page, updatePage] = useState(0);
    const [employees, updateEmployees] = useState(employeeData.results.filter((e, index) => {
        return index >= page * 10 && index < (((page + 1) * 10));
    }))

    const changePage = (event, page) => {
        const endNumber = (((page + 1) * 10));
        const newArray = employeeData.results.filter((e, index) => {
            return index >= page * 10 && index < endNumber;
        })
        
        updatePage(page);
        updateEmployees(newArray);
    }

    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="left">Address</TableCell>
                        <TableCell align="left">Phone Number</TableCell>
                        <TableCell align="left">DOB</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employees.map((row) => {
                        let name = `${row.name.first} ${row.name.last}`;
                        let street = row.location.street;
                        let address = `${row.location.city}, ${row.location.state} ${row.location.postcode}`;
                        let dob = moment(row.dob.date).format("LL");

                        return (
                            <TableRow key={name}>
                                <TableCell component="th" scope="row">{name}</TableCell>
                                <TableCell align="left">{row.email}</TableCell>
                                <TableCell align="left">{street.number} {street.name}<br />{address}</TableCell>
                                <TableCell align="left">h: {row.cell}<br />c: {row.phone}</TableCell>
                                <TableCell align="left">{dob}</TableCell>
                            </TableRow>
                        )}
                    )};
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            onChangePage={(event, page) => changePage(event, page)}
                            page={page}
                            count={employeeCount}
                            rowsPerPage={10}
                            rowsPerPageOptions={[]}
                        />
                    </ TableRow>
                </ TableFooter> 
            </Table>
            
        </TableContainer>
    );
}
