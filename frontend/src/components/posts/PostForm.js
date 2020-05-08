import React, { Component } from "react";
import PostsApi from "./../../api/PostsApi";
import Calendar from 'react-calendar';

class PostForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            date: new Date(),
            time: '6am-8am',
            location: 'Solna',
            body: '',
            type: 'Yoga Training',
            attendeesLimit: '10',
            status: 'active',
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleLocationChange = (event) => {
        this.setState({
            location: event.target.value
        })
    }
    handleDescriptionChange = (event) => {
        this.setState({
            body: event.target.value
        })
    }
    handleTypeOfEventChange = (event) => {
        this.setState({
            type: event.target.value
        })
    }
    handleDateChange = (date) => {
        this.setState({ date });
    };

    handleAttendeesLimitChange = (event) => {
        this.setState({
          attendeesLimit: event.target.value,
        });
      };
    

    handleSubmit = () => {
        this.props.onSubmit(this.state)


    }

    render() {

        return (
            <div>
                <div>
                    <h3>
                        Post a Service Here
                    </h3>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name of the service provider</label>
                        <input type='text' value={this.state.name} onChange={this.handleNameChange} />
                    </div>

                    <div>
                        <label>Select the event which do you want to organize</label>
                        <select value={this.state.type} onChange={this.handleTypeOfEventChange}>
                            <option value="outdoor yoga">Outdoor Yoga</option>
                            <option value="personal training">Personal training</option>
                            <option value="haircut">Haircut</option>
                            <option value='meditation'>Meditation</option>
                        </select>
                    </div>
                    <div>
                        <label>Date</label>
                        <Calendar value={this.state.date} onChange={this.handleDateChange} />
                        {/* {console.log(this.state.date)} */}
                    </div>
                    <div>
                        <label>Time </label>
                        <select value={this.state.time} onChange={this.handleTimeChange}>
                            <option value='6am-8am'>6.00am-8.00am</option>
                            <option value='8am-10am'>8.00am-10.00am</option>
                            <option value='10am-12am'>10.00am-12.00am</option>
                            <option value='12am-1pm'>12.00am-1.00pm</option>
                            <option value='1pm-3pm'>1.00pm-3.00pm</option>
                            <option value='3pm-5pm'>3.00pm-5.00pm</option>
                            <option value='5pm-7pm'>5.00pm-7.00pm</option>
                            <option value='7pm-9pm'>7.00pm-9.00pm</option>
                            <option value='9pm-11pm'>9.00pm-11.00pm</option>
                        </select>
                    </div>

                    <div>
                        <label>Location of Event</label>
                        <select value={this.state.location} onChange={this.handleLocationChange}>
                            <option value='Solna'>Solna</option>
                            <option value='Kista'>Stockholm</option>
                            <option value='Sundbyberg'>Sundbyberg</option>
                            <option value='Täby'>Täby</option>
                            <option value='Sollentuna'>Sollentuna</option>
                        </select>
                    </div>
                    <div>
                        <label>Describe the Event</label>
                        <textarea value={this.state.body} onChange={this.handleDescriptionChange}></textarea>
                    </div>
                    <div>
                        <label>Total number of allowed people</label>
                        <select
                            value={this.state.attendeesLimit}
                            onChange={this.handleAttendeesLimitChange}>
                            <option value='10'>10</option>
                            <option value='20'>20</option>
                            <option value='30'>30</option>
                            <option value='40'>40</option>
                            <option value='50'>50</option>
                        </select>

                  </div>

                    <button className="btn btn-primary" onSubmit={this.handleSubmit}>Post this service</button>
                    <button>Cancel</button>

                </form>

            </div>

        )
    }
}
export default PostForm;
