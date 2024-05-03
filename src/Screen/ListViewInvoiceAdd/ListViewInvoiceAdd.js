import React, { Component } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './ListViewInvoiceAdd.css'
import SideNav from '../../Components/SideNav/SideNav';
import Header from '../../Components/Header/Header';
export default class ListViewInvoiceAdd extends Component {


    render() {
        return (
            <div className='add-container'>
                <Header />
                <form>
                    <TextField
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type='Date'
                    />
                    <TextField
                        label="Item"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Total Amount"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Submit
                    </Button>
                </form>
            </div>


        )
    }
}
