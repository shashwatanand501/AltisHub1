import React, { Component } from 'react'
import './ListViewInvoice.css'
import SideNav from '../../Components/SideNav/SideNav'
import Header from '../../Components/Header/Header'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(ID, Invoice, Total) {
    return { ID, Invoice, Total };
}
export default class ListViewInvoice extends Component {

    render() {
        const rows = [
            createData(1, 'invoice 1', 300),
            createData(2, 'invoice 2', 300),
            createData(3, 'invoice 3', 400),
            createData(4, 'invoice 4', 500),


        ];
        return (
            <div className='container'>
                <div className='header-cont'>
                    <Header />
                </div>
                <div className='sideNav-cont'>
                    <SideNav />
                    <div className='List-view'>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell align="right">Invoice </TableCell>
                                        <TableCell align="right">Total</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >

                                            <TableCell align="right">{row.ID}</TableCell>
                                            <TableCell align="right">{row.Invoice}</TableCell>
                                            <TableCell align="right">{row.Total}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>

            </div>
        )
    }
}
