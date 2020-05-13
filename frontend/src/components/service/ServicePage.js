import React from 'react';
import PostsApi from './../../api/PostsApi';
import ServiceCard from '../service/serviceCard';

class ServicePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      email: '',
    };
  }

  async createPost(postData, email) {
    try {
      const response = await PostsApi.createPost(postData, email);
      const post = response.data;
      const newPosts = this.state.posts.concat(post);

      this.setState({
        posts: newPosts,
      });
    } catch (e) {
      console.error(e);
    }
  }

  async updatePost(postData) {
    try {
      const response = await PostsApi.updatePost(postData.id, postData);
      const post = response.data;
      const newPosts = this.state.posts.concat(post);

      this.setState({
        posts: newPosts,
      });
    } catch (e) {
      console.error(e);
    }
  }

  async registerAttendee(postData) {
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

  async deletePost(post) {
    try {
      await PostsApi.deletePost(post.id);
      const newPosts = this.state.posts.filter((p) => p.id !== post.id);
      this.setState({
        posts: newPosts,
      });
    } catch (e) {
      console.error(e);
    }
  }

  componentDidMount() {

    PostsApi.getAllPosts()
      .then(({ data }) => this.setState({ posts: data }))
      .catch((err) => console.error(err));
  }

  render() {
    const posts = this.state.posts;

    return (
      <div>
        {posts.map((post) => (
          <ServiceCard
            key={post.id}
            postEmail={post.user.email}
            post={post}
            createdAt={post.createdAt}
            onDeleteClick={() => this.deletePost(post)}
            onSubmit={(postData) => this.updatePost(postData)}
            onRegister={(attendeeData) => this.registerAttendee(attendeeData)}
          />
        ))}
      </div>
    );
  }
}

export default ServicePage;
