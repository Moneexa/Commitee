import React, { Component } from 'react'
import CommitteeList from './CommitteeList'
import Select from 'react-select';
import './CommitteeAttendance.css'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Form, Modal, Button } from 'react-bootstrap'
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

class CommitteeAttendance extends Component {

    constructor(props) {
        super(props);

        this.state = {

            month: "", members: [], showSheet: false,
            days: [],name:"",
                        options: [
                {
                    label: "January",
                    value: "1"
                },
                {
                    label: "February",
                    value: "2"
                },
                {
                    label: "March",
                    value: "3"
                },
                {
                    label: "April",
                    value: "4"
                },
                {
                    label: "May",
                    value: "5"
                },
                {
                    label: "June",
                    value: "6"
                },

                {
                    label: "July",
                    value: "7"
                },
                {
                    label: "August",
                    value: "8"
                },
                {
                    label: "September",
                    value: "9"
                },
                {
                    label: "October",
                    value: "10"
                },
                {
                    label: "Novemeber",
                    value: "11"
                },
                {
                    label: "December",
                    value: "12"
                }
            ]
        }
    }
    componentDidMount() {
        this.setState({
            showSheet: false,
        })
    }
    numberOfDays = (_month, year) => {
        return (new Date(year, _month, 0).getDate());
    }
    handleMonthChange = (e) => {
        var _month = e.label;

        var _numberOfDays = this.numberOfDays(e.value, 2020);

        console.log(_numberOfDays);
        var _days = [];
        for (let i = 1; i <= _numberOfDays; i++) {
            _days.push(i);
        }
        this.setState({
            month: _month,
            days: _days
        }, () => {
            console.log(this.state.month);
            console.log(this.state.days);
        })
    }
    handleNameOnChange = (e) => {
        var _name=e.target.value;
        this.setState({
            name:_name})
    }
    handleSubmit = () => {
        this.setState({showSheet:false})
        var newList = this.state.members.concat(this.state.name);
        this.setState({
            members: newList,

        })
        console.log(this.state.members)
    }


    render() {
        return (<div className="CommitteeAttendance">

            <div className="container">

            
                <div className="parent_div">
                    <h1>Committee 1</h1>
                    <Select
                        className="w-25"
                        value={this.state.month}
                        onChange={this.handleMonthChange}
                        options={this.state.options}
                        //selected={this.state.month}
                        color="primary"
                        label="Month"
                    />
                </div>



            </div>
            <TableContainer >
                <Table className="classes" size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Committee Member</TableCell>
                            
                            {this.state.days.map((value)=>{
                                return (
                                    <TableCell>
                                        {value}
                                    </TableCell>

                                )
                            }
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.members.map((value) => {
                            return (<TableRow key={value}>
                                <TableCell>{value}</TableCell>
                            {this.state.days.map(()=>{
                                return(<TableCell>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="defaultChecked" checked />
                                        <label class="custom-control-label" for="defaultChecked" />
                                    </div>
                                </TableCell>)


                            })}
                                



                            </TableRow>)



                        })}

                    </TableBody>
                </Table>
            </TableContainer>
            <div id="edit-bg" tabIndex="0" role="button" onClick={() => { this.setState({ showSheet: true }) }} className="ep-enhanced" aria-label="Customize this page" title="Customize this page">
                <div id="edit-bg-icon"></div>
                <span id="edit-bg-text">+ Add Member</span>
            </div>
            <Modal show={this.state.showSheet} onHide={() => { this.setState({ showSheet: false }) }}>

                <Modal.Body>
                    <form id="form1" onSubmit={this.handleSubmit} >
                        <Form.Group controlId="name">
                            <Form.Control type="text" value={this.state.value} onChange={this.handleNameOnChange} placeholder="Name" />
                        </Form.Group>

                    </form>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => { this.setState({ showSheet: false }) }}>
                        Close
</Button>
                    <Button variant="primary" onClick={this.handleSubmit}>
                        Save Changes
</Button>
                </Modal.Footer>
            </Modal>





        </div>)
    }
}

export { CommitteeAttendance };