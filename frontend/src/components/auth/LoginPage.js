import React, { Component } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Auth from "../../services/Auth";
import CustomNavbar from "../layout/Navbar11";
import { Carousel, Card } from "react-bootstrap";
import logo from "../../assets/logo1.png";

class LoginPage extends Component {
  async login(loginData) {
    const loginSuccess = await Auth.login(loginData);
    if (!loginSuccess) {
      alert("Invalid credentials");
    }
  }

  async register(registrationData) {
    const registerSuccess = await Auth.register(registrationData);
    if (!registerSuccess) {
      alert("Couldn't register check credentials and try again");
    }
  }

  render() {
    return (
      <div className="wrapper-login container-fluid bg-light">
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-12">
              <div className="row">
                <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top container-fluid">
                  <a className="navbar-brand" href="#">
                    <img src={logo} alt="logo" style={{ width: "80px" }} />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span
                      i
                      className="fas fa-bars"
                      style={{ color: "#fff" }}
                    ></span>
                  </button>

                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav m-auto">
                      <li className="nav-item active">
                        <button
                          type="button"
                          className="btn btn-warning"
                          data-toggle="modal"
                          data-target="#login"
                        >
                          Login
                        </button>

                        <div className="modal" id="login">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-body">
                                <div className="col-12  strong-shadow">
                                  <LoginForm onSubmit={this.login} />
                                </div>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                  data-dismiss="modal"
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item">
                        <button
                          type="button"
                          className="btn btn-warning"
                          data-toggle="modal"
                          data-target="#sign-up"
                        >
                          Sign up
                        </button>

                        <div className="modal" id="sign-up">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-body">
                                <div className="col-12 mt-4" id="sign-up">
                                  <RegisterForm onSubmit={this.register} />
                                </div>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                  data-dismiss="modal"
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <br />
          <div className = 'container-fluid'>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={require(`../../assets/nature/nature2.jpeg`)}
                  width={1200}
                  height={300}
                  alt="Logo"
                  d-block w-100
                />
                <div className="carousel-caption d-none d-md-block">
                  <h1 className="display-2" text-warning>
                    First slide label
                  </h1>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-light btn-lg"
                  >
                    View Demo
                  </button>
                  <button type="button" className="btn btn-warning btn-lg">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={require(`../../assets/nature/yellow-flowers.jpeg`)}
                  width={1200}
                  height={300}
                  alt="Logo"
                  d-block w-100
                />
                <div className="carousel-caption d-none d-md-block">
                  <h1 className="display-2" text-warning>
                    Second slide label
                  </h1>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-light btn-lg"
                  >
                    View Demo
                  </button>
                  <button type="button" className="btn btn-warning btn-lg">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={require(`../../assets/nature/nature2.jpeg`)}
                  width={1200}
                  height={300}
                  alt="Logo"
                  d-block w-100
                />
                <div className="carousel-caption d-none d-md-block">
                  <h1 className="display-2" text-warning>
                    Third slide label
                  </h1>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-light btn-lg"
                  >
                    View Demo
                  </button>
                  <button type="button" className="btn btn-warning btn-lg">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* MEET THE TEAM */}
        <div className="container-fluid-padding">
          <div className="row welcome text-center">
            <div className="col-12">
              <h1 className="display-4">Check Our Services</h1>
            </div>
            <hr></hr>
          </div>
        </div>
        {/* CARDS */}
        <div className="container-fluid-padding">
          <div className="row padding">
            <div className="col-md-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src={require(`../../assets/group-training.jpeg`)}
                   width={200}
                   height={300}
                />
                <div className="card-body">
                  <h4 className="card.title">Outdoor group trainings</h4>
                  <p className="card-text">
                    Interval trainings, fitness and yoga outdoor: up to 50 people, nice outdoor locations and qualified trainers
                  </p>
                  <a href="#" className="btn btn-outline-warning">
                    See profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src={require(`../../assets/traveling-barber.jpg`)}
                  width={200}
                  height={300}
                />
                <div className="card-body">
                  <h4 className="card.title">Outdoor haircuts</h4>
                  <p className="card-text">
                    Wide range of outdoors services from best hairdressers. Book your time or come to drop-in and have a safe haircut
                  </p>
                  <a href="#" className="btn btn-outline-warning">
                    See profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src={require(`../../assets/individual-trainings.jpeg`)}
                  width={200}
                  height={300}
                />
                <div className="card-body">
                  <h4 className="card.title">Outdoor personal trainings</h4>
                  <p className="card-text">
                    Adjust your trainings to you needs and level, have personal sessions in outdoor gyms in your neighbourhood
                  </p>
                  <a href="#" className="btn btn-outline-warning">
                    See profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
