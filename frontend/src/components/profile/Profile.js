import React from "react";
import AuthApi from "../../api/AuthApi";
import PostsApi from "../../api/PostsApi";

var getListOfAttendees = function(post) {
  let emails = post.attendees.map((a) => a.email)
  return emails;
};


class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: [],
      email: "",
      posts: [],
      bookings: [],
    };
  }

  componentDidMount() {
    AuthApi.getUserDetails()
      .then(({ data }) => this.setState({ user: data }))
      .catch((err) => console.error(err));

    PostsApi.listOfPostsByServiceProviderEmail()
      .then(({ data }) => this.setState({ posts: data }))
      .catch((err) => console.error(err));

    PostsApi.listOfPostsByAttendeeEmail()
      .then(({ data }) => this.setState({ bookings: data }))
      .catch((err) => console.error(err));
  }

  render() {
    const user = this.state.user;
    const posts = this.state.posts;
    const bookings = this.state.bookings;

    return (

      <div>
        <h2>My Profile Information</h2>
        <p>Name : {user.name}</p>
        <p>Email :  {user.email}</p>

        <div className="table table-hover table-responsive ">
          <h3> My Services</h3>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Event Description</th>
                <th scope="col">Location</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
                <th scope="col">Booked</th>
                <th scope="col">Attendees</th>
              </tr>
            </thead>

            <tbody>
              {posts.map((post) =>
                <tr>
                  <td>{post.description}</td>
                  <td>{post.place}</td>
                  <td>{post.date.substring(0,10)}</td>
                  <td>{post.status.toLowerCase()}</td>
                  <td>{post.attendees.length + ' out of ' + post.attendeesLimit}</td>
                  <td>{getListOfAttendees(post).join(', ')}</td>
                </tr>
              )
              }

            </tbody>
          </table>
        </div>

        <div className="table table-hover table-responsive ">
          <h3> My Bookings</h3>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Event Description</th>
                <th scope="col">Activity</th>
                <th scope="col">Location</th>
                <th scope="col">Date</th>
                

              </tr>
            </thead>

            <tbody>
              {bookings.map((booking) =>
                <tr>
                  <td>{booking.description}</td>
                  <td>{booking.serviceType}</td>
                  <td>{booking.place}</td>
                  <td>{booking.date.substring(0,10)}</td>
                </tr>
              )
              }

            </tbody>
          </table>
        </div>
      </div>

    );

  }


}
export default Profile;

