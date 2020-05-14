import React, { Component } from "react";

class Booking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      service: "haircut",
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };
  handleServiceChange = (event) => {
    this.setState({
      service: event.target.value,
    });
  };
  handlesubmit = (event) => {
    alert(`${this.state.username}${this.state.comments}${this.state.service}`);
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>UserName</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={this.state.comment}
            onChange={this.handleCommentsChange}
          ></textarea>
        </div>
        <div>
          <label>Service</label>
          <select
            value={this.state.service}
            onChange={this.handleServiceChange}
          >
            <option value="haircut">HairCut</option>
            <option value="individualTraining">Induvudual Training</option>
            <option value="groupTraining">group Training</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Booking;
