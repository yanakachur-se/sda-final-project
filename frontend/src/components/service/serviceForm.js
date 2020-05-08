import React, { Component } from 'react';
import Calendar from 'react-calendar';
import PostsApi from './../../api/PostsApi';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class serviceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      attendeesLimit: '10',
      serviceType: 'Outdoor Yoga',
      date: new Date(),
      time: '6am-8am',
      place: 'Solna',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ showInfo: true });

    PostsApi.createPost({
      name: this.state.name,
      // email: this.state.email,
      description: this.state.description,
      attendeesLimit: this.state.attendeesLimit,
      serviceType: this.state.serviceType,
      date: this.state.date,
      time: this.state.time,
      place: this.state.place,
    })
      .then((response) => {
        if (response.status == 200) {
          window.location = '/posts';
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  // handleEmailChange = (event) => {
  //   this.setState({
  //     email: event.target.value,
  //   });
  // };

  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  handleAttendeesLimitChange = (event) => {
    this.setState({
      attendeesLimit: event.target.value,
    });
  };
  handleServiceTypeChange = (event) => {
    this.setState({
      serviceType: event.target.value,
    });
  };

  handlePlaceChange = (event) => {
    this.setState({
      place: event.target.value,
    });
  };

  handleDateChange = (date) => {
    this.setState({ date });
  };

  handleTimeChange = (event) => {
    this.setState({
      time: event.target.value,
    });
  };

  render() {
    return (
      <form>
        <div>
          <label>Name</label>
          <input
            type='text'
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </div>

        {/* <div>
            <label>Email</label>
            <input
              type='text'
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </div> */}
        <div>
          <label>Select an activity you want to organize</label>
          <select
            value={this.state.serviceType}
            onChange={this.handleServiceTypeChange}>
            <option value='outdoorYoga'>Outdoor Yoga</option>
            <option value='groupTraining'>Group Training</option>
            <option value='meditation'>Meditation</option>
            <option value='groupRun'>Group Run</option>
            <option value='soccer'>Soccer</option>
          </select>
        </div>

        <div>
          <label>Place </label>
          <select value={this.state.place} onChange={this.handlePlaceChange}>
            <option value='Solna'>Solna</option>
            <option value='Stockholm'>Stockholm</option>
            <option value='Sundbyberg'>Sundbyberg</option>
            <option value='Täby'>Täby</option>
            <option value='Sollentuna'>Sollentuna</option>
          </select>
        </div>

        <div>
          <label>Date</label>
          <Calendar value={this.state.date} onChange={this.handleDateChange} />
          {console.log(this.state.date)}
        </div>

        <div>
          <label>Time </label>
          <select value={this.state.time} onChange={this.handleTimeChange}>
            <option value='6am-8am'>6.00am-8.00am</option>
            <option value='8am-10am'>8.00am-10.00am</option>
            <option value='10am-12pm'>10.00am-12.00pm</option>
            <option value='12pm-1pm'>12.00pm-1.00pm</option>
            <option value='1pm-3pm'>1.00pm-3.00pm</option>
            <option value='3pm-5pm'>3.00pm-5.00pm</option>
            <option value='5pm-7pm'>5.00pm-7.00pm</option>
            <option value='7pm-9pm'>7.00pm-9.00pm</option>
            <option value='9pm-11pm'>9.00pm-11.00pm</option>
          </select>
        </div>

        <div>
          <label>Activity Description</label>
          <textarea
            value={this.state.description}
            onChange={this.handleDescriptionChange}></textarea>
        </div>
        <div>
          <label>Max number of people</label>
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

       
          <div className='form-group'>
            <button className='btn btn-primary' onClick={this.handleSubmit}>
              Post this service!
            </button>
          </div>
        
      </form>
    );
  }
}

export default serviceForm;
