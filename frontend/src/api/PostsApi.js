import Api from "./Api";

class PostsApi {
  getEmail() {
    return Api.get('/posts/email');
  }

  getAllPosts() {
    return Api.get('/posts');
  }

  getPostById(id) {
    return Api.get('/posts/' + id);
  }

  createPost(post) {
    return Api.post(`/posts`, post);
  }

  updatePost(postId, post) {
    return Api.put(`/posts/${postId}`, post);
  }

  deletePost(id) {
    return Api.delete('/posts/' + id);
  }

  savePostWithAttendeeInfo(postId) {
    return Api.post(`/posts/${postId}`);
  }
}

export default new PostsApi();