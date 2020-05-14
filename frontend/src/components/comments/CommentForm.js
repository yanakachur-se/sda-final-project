import React from 'react';
import Col from 'react-bootstrap/Col';


function CommentForm(props) {
  const [body, setBody] = React.useState('');

  const handleSubmit = () => {
    // Invoke the passed in event callback
    props.onSubmit({ body: body });

    // Clear the input field
    setBody('');
  };

  let archivedCommentView = props.post.status === 'ARCHIVED';
  const commentFormDiv = (
    <div className='card-body'>
      <h4 className='card-title'>Comment down below </h4>
      <div>
        <div className='form-group'>
          <textarea
            className='form-control'
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <Col xs={2}>
            <button className='btn btn-primary' onClick={handleSubmit}>
              Comment
            </button>
          </Col>
        </div>
      </div>
    </div>
  );
  return <div className='card'>{archivedCommentView || commentFormDiv}</div>;
}

export default CommentForm;
