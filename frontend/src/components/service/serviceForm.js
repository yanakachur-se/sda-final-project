import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import PostsApi from './../../api/PostsApi';
import ServiceEditor from './ServiceEditor';
import '../../style/serviceForm.css';
import moment from 'moment';
import ServiceMap from './ServiceMap'

class serviceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '{"blocks":[],"entityMap":{}}',
      attendeesLimit: '10',
      serviceType: 'Outdoor Yoga',
      date: new Date(),
      time: '6am-8am',
      place: 'Solna',
      latitude: '',
      longitude: '',
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
      longitude: this.state.longitude,
      latitude: this.state.latitude,
    })
      .then((response) => {
        if (response.status == 200) {
          window.location = '/service?service=all';
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

  handleDescriptionChange = (raw) => {
    this.setState({
      description: JSON.stringify(raw),
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


  handleCoordinatesChange = (event) => {
    console.log(event.latlng);
    this.setState({
      latitude: event.latlng.lat,
      longitude: event.latlng.lng,
    });
  };

  handleDateChange = (date) => {
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
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
        <div className='form-group'>
          <label for='exampleFormControlTextarea1'>Title</label>
          <input
            class='form-control'
            id='exampleFormControlTextarea1'
            rows='3'
            type='text'
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </div>

        <div className='form-row'>
          <div class='form-group col-md-6'>
            <label for='inputType'>Type of activity</label>
            <select
              id='inputType'
              className='form-control'
              value={this.state.serviceType}
              onChange={this.handleServiceTypeChange}>
              <option value='groupTraining'>Group Training</option>
              <option value='groupRun'>Group Run</option>
              <option value='meditation'>Meditation</option>
              <option value='haircut'>Outdoor Haircut</option>
              <option value='outdoorYoga'>Outdoor Yoga</option>
              <option value='soccer'>Soccer</option>
            </select>
          </div>

          <div class='form-group col-md-6'>
            <label for='inputPlace'>Place</label>
            <select
              id='inputPlace'
              class='form-control'
              value={this.state.place}
              onChange={this.handlePlaceChange}>
              <option value='Solna'>Solna</option>
              <option value='Sundbyberg'>Sundbyberg</option>
              <option value='Täby'>Täby</option>
              <option value='Sollentuna'>Sollentuna</option>
              <option value='Stockholm'>Stockholm</option>
            </select>
          </div>
        </div>

        <div className='form-group'>
          <label>Date</label>
          <Calendar value={this.state.date} onChange={this.handleDateChange} />
          <p>
            The date you've selected is:{' '}
            {moment(this.state.date).format('ddd, MMMM Do YYYY')}
          </p>
        </div>
        <br />

        <div className='form-row'>
          <div class='form-group col-md-4'>
            <label for='inputTime'>Time</label>
            <select
              id='inputTime'
              class='form-control'
              value={this.state.time}
              onChange={this.handleTimeChange}>
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

          <div class='form-group col-md-4'>
            <label for='inputMax'>Max number of people</label>
            <select
              id='inputMax'
              class='form-control'
              value={this.state.attendeesLimit}
              onChange={this.handleAttendeesLimitChange}>
              <option value='1'>1</option>
              <option value='10'>10</option>
              <option value='20'>20</option>
              <option value='30'>30</option>
              <option value='40'>40</option>
              <option value='50'>50</option>
            </select>
          </div>
        </div>

        <div className='form-group'>
          <label>Activity Description</label>
          <ServiceEditor onChange={this.handleDescriptionChange} />
        </div>

        <div className='form-group'>
          <label>Pick a spot!</label>
          <ServiceMap onChange={this.handleCoordinatesChange} />
        </div>

        <div className='form-group'>
          <button className='btn btn-info' onClick={this.handleSubmit}>
            Post this service!
          </button>
        </div>
      </form>
    );
  }
}

export default serviceForm;
