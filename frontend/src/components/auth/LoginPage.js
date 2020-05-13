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
    window.location.reload();
    
  }

  render() {
    return (
      <div className="wrapper-login">
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-12">
              <div className="row">
                <nav className="navbar flex-column navbar-expand-lg navbar-light bg-dark">
                  <a className="navbar-brand" href="#">
                    <img src={logo} alt="logo" style={{ width: "40px" }} />
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
                          class="btn btn-warning"
                          data-toggle="modal"
                          data-target="#login"
                        >
                          Login
                        </button>

                        <div class="modal" id="login">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-body">
                                <div className="col-12  strong-shadow">
                                  <LoginForm onSubmit={this.login} />
                                </div>
                              </div>
                              <div class="modal-footer">
                                <button
                                  type="button"
                                  class="btn btn-danger"
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
                          class="btn btn-warning"
                          data-toggle="modal"
                          data-target="#sign-up"
                        >
                          Sign up
                        </button>

                        <div class="modal" id="sign-up">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-body">
                                <div className="col-12 mt-4" id="sign-up">
                                  <RegisterForm onSubmit={this.register} />
                                </div>
                              </div>
                              <div class="modal-footer">
                                <button
                                  type="button"
                                  class="btn btn-danger"
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
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
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
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src={require(`../../assets/how-to-cut-hair.jpg`)}
                  width={1200}
                  height={500}
                  alt="Logo"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h1 class="display-2" text-warning>
                    First slide label
                  </h1>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                  <button type="button" class="btn btn-outline-light btn-lg">
                    View Demo
                  </button>
                  <button type="button" class="btn btn-warning btn-lg">
                    Get Started
                  </button>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src={require(`../../assets/haircut-sitting-on-bike.jpg`)}
                  width={1200}
                  height={500}
                  alt="Logo"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h1 class="display-2" text-warning>
                    Second slide label
                  </h1>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                  <button type="button" class="btn btn-outline-light btn-lg">
                    View Demo
                  </button>
                  <button type="button" class="btn btn-warning btn-lg">
                    Get Started
                  </button>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src={require(`../../assets/outdoor-hairdresser.jpg`)}
                  width={1200}
                  height={500}
                  alt="Logo"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h1 class="display-2" text-warning>
                    Third slide label
                  </h1>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                  <button type="button" class="btn btn-outline-light btn-lg">
                    View Demo
                  </button>
                  <button type="button" class="btn btn-warning btn-lg">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MEET THE TEAM */}
        <div class="container-fluid-padding">
          <div class="row welcome text-center">
            <div class="col-12">
              <h1 class="display-4">Meet the Team</h1>
            </div>
            <hr></hr>
          </div>
        </div>
        {/* CARDS */}
        <div class="container-fluid-padding">
          <div class="row padding">
            <div class="col-md-4">
              <div class="card">
                <img
                  class="card-img-top"
                  src={require(`../../assets/hair-style.jpeg`)}
                />
                <div class="card-body">
                  <h4 class="card.title">Jessica</h4>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate deserunt quos tempore omnis expedita suscipit
                    cumque obcaecati magni. Dignissimos minima vel labore quos,
                    nostrum doloremque blanditiis iure tempore pariatur facilis.
                  </p>
                  <a href="#" class="btn btn-outline-warning">
                    See profile
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img
                  class="card-img-top"
                  src={require(`../../assets/hair-tales.jpeg`)}
                />
                <div class="card-body">
                  <h4 class="card.title">Amana </h4>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate deserunt quos tempore omnis expedita suscipit
                    cumque obcaecati magni. Dignissimos minima vel labore quos,
                    nostrum doloremque blanditiis iure tempore pariatur facilis.
                  </p>
                  <a href="#" class="btn btn-outline-warning">
                    See profile
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img
                  class="card-img-top"
                  src={require(`../../assets/hair-color.jpeg`)}
                />
                <div class="card-body">
                  <h4 class="card.title">Monica</h4>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate deserunt quos tempore omnis expedita suscipit
                    cumque obcaecati magni. Dignissimos minima vel labore quos,
                    nostrum doloremque blanditiis iure tempore pariatur facilis.
                  </p>
                  <a href="#" class="btn btn-outline-warning">
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
