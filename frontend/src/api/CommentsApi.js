import Api from './Api';

class CommentsApi {
  getEmail() {
    return Api.get('/posts/comment/email');
  }

  getAllCommentsByPost(postId) {
    return Api.get('posts/' + postId + '/comments');
  }

  getCommentById(postId, id) {
    return Api.get('posts/' + postId + '/comments/' + id);
  }

  createComment(comment, postId, email) {
    return Api.post('posts/' + postId + '/comments/' + email, comment);
  }
  updateComment(postId, commentId, comment) {
    return Api.put('/posts/' + postId + '/comments/' + commentId, comment);
  }

  deleteComment(id) {
    return Api.delete('posts/comments/' + id);
  }
}

export default new CommentsApi();
