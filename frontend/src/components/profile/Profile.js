import React from "react";
import AuthApi from "../../api/AuthApi";
import PostsApi from "../../api/PostsApi";
import moment from 'moment';
import '../../style/Profile.css';

var getListOfAttendees = function (post) {
  let emails = post.attendees.map((a) => a.email)
  return emails;
};

var formatDate = function (stringDate) {
  return moment(stringDate).format("dddd, MMMM Do YYYY");
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
        <div className="profile">
          <div class="text-uppercase"> <h3>{user.name}</h3></div>
          <hr></hr>
          <div class="font-weight-bold">Contact Info</div>

          <p>E-Mail</p>
          <p>{user.email}</p>
        </div>

        <hr></hr>

        <div className="table table-hover table-responsive ">
          <h3> My Services</h3>
          <table className="table service-table " >

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
                  <td>{formatDate(post.date)}</td>
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
          <table class="table service-table">
            <thead>
              <tr>
              <th scope="col">Event Description</th>
                <th scope="col">Location</th>
                <th scope="col">Date</th>
                <th scope="col">Activity</th>
                <th scope="col"> Status</th>
                <th scope="col">Provided By</th>

              </tr>
            </thead>

            <tbody>
              {bookings.map((booking) =>
                <tr>
                  <td>{booking.description}</td>
                  <td>{booking.place}</td>
                  <td>{formatDate(booking.date)}</td>
                  <td>{booking.serviceType}</td>
                  <td>{booking.status}</td>
                  <td>{booking.user.name}</td>
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

