import React, { useState } from 'react';
import swal from 'sweetalert';

function CommentCard(props) {
  const [body, setBody] = React.useState('');
  const [edit, setEdit] = useState(false);
  const handleSubmit = () => {
    // Invoke the passed in event callback
    console.log(body);
    props.onSubmit({ body: body, id: props.comment.id }, props.postID);

    // Clear the input field
    setBody('');
    window.location.reload();
  };

 const deleteComment = () => {
  
   swal({
     title: 'Are you sure?',
     text: 'Once deleted, you will not be able to recover this comment!',
     icon: 'warning',
     buttons: true,
     dangerMode: true,
   }).then((willDelete) => {
     if (willDelete) {
       swal('Done! This comment has been deleted!', {
         icon: 'success',
       });
        props.onDeleteClick({
          id: props.comment.id,
        });
     } 
     else {
       swal('Your comment is safe!');
     }
   });
 };
  const editButton = (
    <button
      className='btn btn-warning'
      onClick={() => setEdit(true)}
      id='update'>
      Edit
    </button>
  );
  const deleteButton = (
    <button className='btn btn-danger' onClick={deleteComment} id='delete'>
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

  const editedText = (
    <textarea
      className='form-control'
      value={body}
      onChange={(e) => setBody(e.target.value)}
    />
  );

  let authUser = props.comment.user.email === props.currentEmail;
  //  let visitorView = props.comment.user.email !== props.currentEmail;
  let showEditButton = authUser && !edit;
  let showDeleteButton = authUser && !edit;
  let showSaveButton = authUser && edit;
  let showCancelButton = authUser && edit;
  return (
    <div className='card mt-3'>
      <div className='card-body'>
        {edit && editedText}
        <p> {edit || 'From: ' + props.comment.user.email}</p>
        <p>{edit || props.comment.body}</p>
        <p> {'Created at:' + props.comment.createdAt}</p>
        <p> {'Updated at:' + props.comment.updatedAt}</p>

        {showEditButton && editButton}
        {showDeleteButton && deleteButton}
        {showSaveButton && saveButton}
        {showCancelButton && cancelButton}
      </div>
    </div>
  );
}

export default CommentCard;
