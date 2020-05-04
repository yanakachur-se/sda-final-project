import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import PostsApi from '../../api/PostsApi';

function ServiceCard(props) {
  const postId = props.post.id;
  const [post, setPost] = React.useState({});

  const [name, setName] = React.useState('');
  //   const [email, setEmail] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [attendeesLimit, setAttendeesLimit] = React.useState('');
  const [serviceType, setServiceType] = React.useState('');
  const [date, setDate] = React.useState('');
  const [time, setTime] = React.useState('');
  const [place, setPlace] = React.useState('');
  const [status, setStatus] = React.useState('active');

  const handleSubmit = () => {
    props.onSubmit({
      id: props.post.id,
      name: name,
      //   email:email,
      description: description,
      attendeesLimit: attendeesLimit,
      serviceType: serviceType,
      date: date,
      time: time,
      place: place,
      status: 'active',
    });

    window.location.reload();
  };

  const registerComeToEvent = () => {
    props.onRegister({
      id: props.post.id,
    });
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

    // window.location.reload();
    // .then(window.location.reload())
    // .catch((error) => {
    //   console.log(error);
    // });
  };

  const [edit, setEdit] = useState(false);

  const editButton = (
    <button
      className='btn btn-warning'
      onClick={() => setEdit(true)}
      id='update'>
      Edit
    </button>
  );
  const deleteButton = (
    <button
      className='btn btn-danger'
      onClick={props.onDeleteClick}
      id='delete'>
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

  // useEffect(() => {
  //   try {
  //     async function fetchData() {
  //       const response = await PostsApi.getPostById(postId);
  //       setPost(response.data);
  //     }
  //     fetchData();
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }, []);

  return (
    <div className='card mt-3'>
      <div className='card-body'>
        <p>{edit && editedTextDescription}</p>
        <p>{edit && editedAttendeesLimit}</p>
        <p>{edit || 'Activity Description: ' + props.post.description}</p>
        <p> {edit || 'Name of the organizer: ' + props.post.name}</p>
        <p> {edit || 'Activity: ' + props.post.serviceType}</p>
        <p> {edit || 'Place: ' + props.post.place}</p>
        <p>
          {edit ||
            'Max number of people attending: ' + props.post.attendeesLimit}
        </p>
        <p> {edit || 'Date: ' + props.post.date}</p>
        <p> {edit || 'Time: ' + props.post.time}</p>
        <p> {edit || 'Created at: ' + props.post.createdAt}</p>
        <p> {edit || 'Updated at: ' + props.post.updatedAt}</p>

        {edit || editButton}
        {edit || deleteButton}
        {edit && saveButton}
        {edit && cancelButton}
        {edit || comeToTheEventButton}
      </div>
    </div>
  );
}

export default ServiceCard;
