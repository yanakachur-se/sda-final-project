import Api from "./Api";

class PostsApi {
  getEmail() {
    return Api.get('/posts/email');
  }

  getAllPosts() {
    return Api.get('/posts');
  }

  getAllActiveAndFull() {
    return Api.get('/posts/future');
  }

  getPostById(id) {
    return Api.get('/posts/' + id);
  }

  getActiveAndFullPostByEmailAddress(emailAddress){
    return Api.get(`/posts/by-email/${emailAddress}`);
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

  listOfPostsByServiceProviderEmail(){
    return Api.get('/posts/myEvents');
  }

  listOfPostsByAttendeeEmail(){
    return Api.get('/posts/myBookings')
  }

}

export default new PostsApi();