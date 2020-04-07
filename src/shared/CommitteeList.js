import React, { Component } from 'react'
import './CommitteeList.css'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modal, Button } from 'react-bootstrap';

class CommitteeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commitee: {
                Name: "", start_date: "", end_date: "", saving_amount: ""
            },
            committee_arr: [], showSheet: false
        }

    }
    componentDidMount() {
        this.setState({
            showSheet: false,
        });
    }
    handleClick = () => {
        this.setState({
            showSheet: true
        })

    }
    handleSubmit = (e) => {
        e.preventDefault();
        const newList = this.state.committee_arr.concat(this.state.commitee)
        this.setState({
            committee_arr: newList
        })
        this.setState({ showSheet: false })

        console.log(this.state.commitee)
    }
    handleNameOnChange = (e) => {
        var _name = e.target.value;
        this.setState({
            commitee: {
                Name: _name, start_date: this.state.commitee.start_date,
                end_date: this.state.commitee.end_date, saving_amount: this.state.commitee.saving_amount
            }
        })
    }
    handleStartDateOnChange = (e) => {
        var _date = e.target.value;
        this.setState({
            commitee: {
                Name: this.state.commitee.Name, start_date: _date,
                end_date: this.state.commitee.end_date, saving_amount: this.state.commitee.saving_amount
            }
        })
    }
    handleEndDateOnChange = (e) => {
        var _enddate = e.target.value;
        this.setState({
            commitee: {
                Name: this.state.commitee.Name, end_date: _enddate,
                start_date: this.state.commitee.start_date, saving_amount: this.state.commitee.saving_amount
            }
        })
    }
    handleSavingAmountOnChange = (e) => {
        var _amount = e.target.value;
        this.setState({
            commitee: {
                Name: this.state.commitee.Name, start_date: this.state.commitee.start_date,
                end_date: this.state.commitee.end_date, saving_amount: _amount
            }
        })
    }
    render() {
        return (<div className="CommitteeList_comp">

            <div className="flex-direction-column">
                {this.state.committee_arr.map((values, index) => {
                    return (<div className="d-flex align-content-center" key={index} style={{ backgroundColor: "#dedbdb" }}>
                        <div id="prefix-icon">
                            <FontAwesomeIcon className="prefix-icon" icon={faUserFriends} />
                        </div>
                        <h4>{values.Name}</h4><br /><br />
                        <p>{values.start_date}</p><span>-</span><p>{values.end_date}</p>
                    </div>
                    )
                })}
            </div>

            <div id="edit-bg" tabIndex="0" role="button" onClick={() => { this.setState({ showSheet: true }) }} className="ep-enhanced" aria-label="Customize this page" title="Customize this page">
                <div id="edit-bg-icon"></div>
                <span id="edit-bg-text">+ Create</span>
            </div>

            <Modal show={this.state.showSheet} onHide={() => { this.setState({ showSheet: false }) }}>

                <Modal.Body>
                    <form id="form1" onSubmit={this.handleSubmit} >
                        <input type="text" value={this.state.Name} onChange={this.handleNameOnChange} placeholder="Name" />
                        <input type="text" value={this.state.start_date} onChange={this.handleStartDateOnChange} placeholder="Start Date" />
                        <input type="text" value={this.state.end_date} onChange={this.handleEndDateOnChange} placeholder="End Date" />
                        <input type="text" value={this.state.saving_amount} onChange={this.handleSavingAmountOnChange} placeholder="Saving Amount" />


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
export default CommitteeList