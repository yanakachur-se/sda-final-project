import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import PostsApi from '../../api/PostsApi';
import { Editor, EditorState, convertFromRaw, ConvertFromRaw } from 'draft-js';
import ServiceEditor from './ServiceEditor';
import moment from 'moment';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../style/ServiceDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';

var getLocalTime = function (stringDate) {
  let localTime = moment.utc(stringDate);
  return localTime.local().format('ddd, MMMM Do YYYY, h:mm:ss a');
};

var formatDate = function (stringDate) {
  return moment(stringDate).format('ddd, MMMM Do YYYY');
};

var getUpdateTime = function (stringDate) {
  let localTime = moment.utc(stringDate);
  return localTime.local().startOf('hour').fromNow();
};

function ServiceDetail(props) {
  let emptyPost = {
    user: { email: '' },
    description: '',
    name: '',
    attendeesLimit: '',
    serviceType: '',
    date: '',
    time: '',
    place: '',
    attendees: [{ email: '' }],
  };

  const postId = props.match.params.id;
  const [email, setEmail] = React.useState('');
  const [post, setPost] = React.useState(emptyPost);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [attendeesLimit, setAttendeesLimit] = React.useState('10');
  const [serviceType, setServiceType] = React.useState('');
  const [date, setDate] = React.useState('');
  const [time, setTime] = React.useState('');
  const [place, setPlace] = React.useState('');
  const [edit, setEdit] = useState(false);

  const handleSubmit = (event) => {
    const onSubmit = {
      id: postId,
      name: name,
      description: description,
      attendeesLimit: attendeesLimit,
      serviceType: serviceType,
      date: date,
      time: time,
      place: place,
    };
    updatePost(onSubmit);
    window.location.reload();
  };

  console.log(description);
  const deleteAlert = () => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this post!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal('Done! This post has been deleted!', {
          icon: 'success',
        });
        deletePost(post);
      } else {
        swal('Your post is safe!');
      }
    });
  };
  const registerComeToEvent = () => {
    registerAttendee(post);
    swal({
      title: 'Good job!',
      text: 'You are successfully registered!',
      icon: 'success',
      button: 'Confirmed!',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      closeOnConfirm: true,
      closeOnCancel: true,
    }).then(function () {
      window.location.reload();
    });
  };

  useEffect(() => {
    try {
      async function fetchData() {
        const response = await PostsApi.getPostById(postId);
        setPost(response.data);
      }
      fetchData();
    } catch (e) {
      console.error(e);
    }
  }, []);
  useEffect(() => {
    try {
      async function fetchData() {
        const response = await PostsApi.getEmail();
        setEmail(response.data);
      }
      fetchData();
    } catch (e) {
      console.error(e);
    }
  }, []);

  async function updatePost(postData) {
    try {
      const response = await PostsApi.updatePost(postData.id, postData);
      const post = response.data;

      setPost({
        post,
      });
    } catch (e) {
      console.error(e);
    }
  }

  async function registerAttendee(postData) {
    try {
      const response = await PostsApi.updatePostWithAttendeeInfo(postData.id);
      const post = response.data;
      const newPosts = this.state.posts.concat(post);

      this.setState({
        posts: newPosts,
      });
    } catch (e) {
      console.error(e);
    }
  }
  async function deletePost(post) {
    try {
      await PostsApi.deletePost(postId).then((response) => {
        if (response.status == 200) {
          window.location = '/service?service=all';
        }
      });
    } catch (e) {
      console.error(e);
    }
  }

  const editButton = (
    <Col xs={2}>
      <button
        className='btn btn-warning'
        onClick={() => setEdit(true)}
        id='update'>
        Edit
      </button>
    </Col>
  );
  const deleteButton = (
    <Col xs={2}>
      <button className='btn btn-danger' onClick={deleteAlert} id='delete'>
        Delete
      </button>
    </Col>
  );
  const saveButton = (
    <Col xs={2}>
      <button
        className='btn btn-warning'
        onClick={handleSubmit}
        // onClick={props.onSaveClick}
        id='save'>
        Save
      </button>
    </Col>
  );
  const cancelButton = (
    <Col xs={2}>
      <button
        className='btn btn-secondary'
        onClick={() => setEdit(false)}
        id='cancel'>
        Cancel
      </button>
    </Col>
  );

  const comeToTheEventButton = (
    <Col xs={4}>
      <button
        className='btn btn-info'
        onClick={registerComeToEvent}
        id='comeToTheEvent'>
        I will come to this event!
      </button>
    </Col>
  );

  const editedTextDescription = (
    <div>
      <label>Activity Description</label>
      <ServiceEditor onChange={(raw) => setDescription(JSON.stringify(raw))} />
    </div>
  );

  const editedAttendeesLimit = (
    <div>
      <label>Max number of people attending: </label>
      <select
        value={attendeesLimit}
        onChange={(e) => setAttendeesLimit(e.target.value)}>
        <option value='10'>10</option>
        <option value='20'>20</option>
        <option value='30'>30</option>
        <option value='40'>40</option>
        <option value='50'>50</option>
      </select>
    </div>
  );

  let visitorView =
    post.attendees.filter((x) => x.email == email).length === 0 &&
    post.status === 'ACTIVE' &&
    post.user.email !== email;
  let attendeeView =
    post.attendees.filter((x) => x.email == email).length === 1;

  let serviceProviderView = post.user.email === email;

  let archivedPostView = post.status === 'ARCHIVED';

  let showEditButton = serviceProviderView && !edit;
  let showSaveButton = serviceProviderView && edit;
  let showCancelButton = serviceProviderView && edit;
  let seatsLeft = post.attendeesLimit - post.attendees.length;
  let showYouMissTheLastSeat =
    post.attendees.filter((x) => x.email == email).length === 0 &&
    post.status === 'FULL' &&
    post.user.email !== email;

  return (
    <div className='card'>
      <h5 className='card-header'>{edit || 'Organizer: ' + post.user.name}</h5>

      <div className='card-body'>
        <p>{edit && editedTextDescription}</p>
        <p>{edit && editedAttendeesLimit}</p>

        <span className='badge badge-default float-right m-2'>
          {edit || 'Max ' + post.attendeesLimit + ' people'}
        </span>
        <span className='badge badge-default float-right m-2'>
          {edit || post.serviceType}
        </span>

        <div className='card-title'>{edit || post.name}</div>

        <div className='mt-3'>
          <span className='d-inline-block'>
            {edit || <FontAwesomeIcon icon={faMapMarkerAlt} />}
          </span>
          <span className='d-inline-block'> {edit || post.place}</span>
        </div>

        <div className='mt-3'>
          <span className='d-inline-block'>
            {edit || <FontAwesomeIcon icon={faClock} />}
          </span>
          <span className='d-inline-block'>
            {' '}
            {edit || formatDate(post.date) + ' at ' + post.time}
          </span>
        </div>

        <div className='mt-3'>
          <p className='headline-description'>
            {edit || `Activity Description:`}
          </p>
          <div className='text-box'>
            {edit ||
              (post.description !== '' && (
                <ServiceEditor
                  editorState={JSON.parse(post.description)}
                  readOnly={true}
                />
              ))}
            <div className='card-footer'>
              <small className='text-muted'>
                <div className='row'>
                  <div className='col'>
                    {' '}
                    {edit || 'Created at: ' + getLocalTime(post.createdAt)}
                  </div>
                  <div className='col-right'>
                    {' '}
                    {edit || 'Updated ' + getUpdateTime(post.updatedAt)}
                  </div>
                </div>
              </small>
            </div>
            <Container style={{ marginTop: '30px' }}>
              <Row>
                {showEditButton && editButton}
                {showEditButton && deleteButton}
                {showSaveButton && saveButton}
                {showCancelButton && cancelButton}
                {visitorView && comeToTheEventButton}
                <Col xs={{ span: 2, offset: 5 }}>
                  {
                    <Link to={'/posts/' + postId}>
                      {archivedPostView || (
                        <button className='btn btn-primary'>View</button>
                      )}
                    </Link>
                  }
                </Col>
              </Row>
            </Container>

            <p>
              {archivedPostView &&
                'Sorry! This is an archived service post. :('}
            </p>

            {visitorView &&
              'Only ' + seatsLeft + ' seats left! Smash the button above!'}
            {attendeeView && ' ' + 'Thank you for booking! :)'}
            {showYouMissTheLastSeat &&
              ' ' + 'Sorry, you missed the last seat :)'}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetail;
