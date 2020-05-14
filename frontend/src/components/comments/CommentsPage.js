import React from 'react';
import CommentsApi from '../../api/CommentsApi';
import PostsApi from '../../api/PostsApi';
import CommentCard from './CommentCard';
import CommentForm from './CommentForm';
import ServiceEditor from '../service/ServiceEditor';

class CommentsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      post: {
        user: { email: '' },
        description: '',
        name: '',
        attendeesLimit: '',
        serviceType: '',
        date: '',
        time: '',
        place: '',
        attendees: [{ email: '' }],
      },
      postId: '',
      email: '',
    };
  }

  async createComment(commentData, postId, email) {
    try {
      const response = await CommentsApi.createComment(
        commentData,
        postId,
        email
      );
      const comment = response.data;
      const newComments = this.state.comments.concat(comment);

      this.setState({
        comments: newComments,
      });
    } catch (e) {
      console.error(e);
    }
  }
  async updateComment(comment, postId) {
    try {
      await CommentsApi.updateComment(postId, comment.id, comment);
    } catch (e) {
      console.error(e);
    }
  }
  async deleteComment(comment) {
    try {
      await CommentsApi.deleteComment(comment.id);
      const newComments = this.state.comments.filter(
        (c) => c.id !== comment.id
      );
      this.setState({
        comments: newComments,
      });
    } catch (e) {
      console.error(e);
    }
  }

  componentDidMount() {
    const idPost = Number(this.props.match.params.id);

    PostsApi.getPostById(idPost)
      .then(({ data }) => this.setState({ post: data }))
      .catch((err) => console.error(err));

    CommentsApi.getEmail()
      .then(({ data }) => this.setState({ email: data }))
      .catch((err) => console.error(err));

    this.setState({ postId: idPost });

    CommentsApi.getAllCommentsByPost(idPost)
      .then(({ data }) => this.setState({ comments: data }))
      .catch((err) => console.error(err));
  }

  render() {
    const comments = this.state.comments;
    const currentEmail = this.state.email;
    const id = Number(this.props.match.params.id);
    let posts = [];

    return (
      <div>
        <div className='card mt-3'>
          <div className='card-body'>
            <p>Name: {this.state.post.name}</p>
            <p>
              Email : <u>{this.state.post.user.email}</u>
            </p>
            <p>Max number of people: {this.state.post.attendeesLimit}</p>
            <p>Date: {this.state.post.date}</p>
            <p>Time: {this.state.post.time}</p>
            <p> Service type: {this.state.post.serviceType}</p>
            <p>Activity Description: </p>
            {this.state.post.description ? (
              <ServiceEditor
                editorState={JSON.parse(this.state.post.description)}
                readOnly={true}
              />
            ) : (
              <div />
            )}
          </div>
        </div>
        <br />
        <CommentForm
          onSubmit={(commentData) =>
            this.createComment(commentData, id, currentEmail)
          }
          post={posts}
        />

        {comments.map((comment) => (
          <CommentCard
            key={comment.id}
            currentEmail={currentEmail}
            comment={comment}
            onDeleteClick={() => this.deleteComment(comment)}
            onSubmit={this.updateComment}
            postID={id}
          />
        ))}
      </div>
    );
  }
}

export default CommentsPage;
