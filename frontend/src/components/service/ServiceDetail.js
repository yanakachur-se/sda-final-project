import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import PostsApi from '../../api/PostsApi';

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
  const [attendeesLimit, setAttendeesLimit] = React.useState('');
  const [serviceType, setServiceType] = React.useState('');
  const [date, setDate] = React.useState('');
  const [time, setTime] = React.useState('');
  const [place, setPlace] = React.useState('');
  const [edit, setEdit] = useState(false);

  const handleSubmit = () => {
    const onSubmit=({
      id: postId,
      name: name,
      description: description,
      attendeesLimit: attendeesLimit,
      serviceType: serviceType,
      date: date,
      time: time,
      place: place,
    });
    updatePost(onSubmit);
    window.location.reload();
  };
  const deleteAlert = () => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this post!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal('Poof! This post has been deleted!', {
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
      button: 'Yuhuuuu!',
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
    <button
      className='btn btn-warning'
      onClick={() => setEdit(true)}
      id='update'>
      Edit
    </button>
  );
  const deleteButton = (
    <button className='btn btn-danger' onClick={deleteAlert} id='delete'>
      DELETE
    </button>
  );
  const saveButton = (
    <button
      className='btn btn-warning'
      onClick={handleSubmit}
      // onClick={props.onSaveClick}
      id='save'>
      Save
    </button>
  );
  const cancelButton = (
    <button
      className='btn btn-danger'
      onClick={() => setEdit(false)}
      id='cancel'>
      Cancel
    </button>
  );

  const comeToTheEventButton = (
    <button
      className='btn btn-success'
      onClick={registerComeToEvent}
      id='comeToTheEvent'>
      I will come to this event!
    </button>
  );
  const editedTextDescription = (
    <div>
      <label>Activity description: </label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
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
  console.log(post.user.email);

  // let archivedPostView = props.post.status === 'ARCHIVED';

  let showEditButton = serviceProviderView && !edit;
  let showSaveButton = serviceProviderView && edit;
  let showCancelButton = serviceProviderView && edit;
  let seatsLeft = post.attendeesLimit - post.attendees.length;

  return (
    <div className='card mt-3'>
      <div className='card-body'>
        <p>{edit && editedTextDescription}</p>
        <p>{edit && editedAttendeesLimit}</p>
        <p>{edit || 'From: ' + post.user.email}</p>
        <p>{edit || 'Activity Description: ' + post.description}</p>
        <p> {edit || 'Name of the organizer: ' + post.name}</p>
        <p> {edit || 'Activity: ' + post.serviceType}</p>
        <p> {edit || 'Place: ' + post.place}</p>
        <p>
          {edit || 'Max number of people attending: ' + post.attendeesLimit}
        </p>
        <p> {edit || 'Date: ' + post.date}</p>
        <p> {edit || 'Time: ' + post.time}</p>
        <p> {edit || 'Created at: ' + post.createdAt}</p>
        <p> {edit || 'Updated at: ' + post.updatedAt}</p>
        {showEditButton && editButton}
        {showEditButton && deleteButton}
        {showSaveButton && saveButton}
        {showCancelButton && cancelButton}
        {visitorView && comeToTheEventButton}
        {
          <Link to={'/posts/' + postId}>
            <button className='btn btn-primary'>Leave a comment!</button>
          </Link>
        }
        {visitorView &&
          'Only ' + seatsLeft + ' seats left! Smash the green button!'}
        {attendeeView && ' ' + 'Thank you for booking! :)'}
        {seatsLeft === 0 && ' ' + 'Sorry, you missed the last seat :)'}
      </div>
    </div>
  );
}

export default ServiceDetail;
