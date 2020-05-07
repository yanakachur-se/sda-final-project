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

  updatePostWithAttendeeInfo(postId) {
    return Api.put(`/posts/${postId}/book`);
  }
}

export default new PostsApi();