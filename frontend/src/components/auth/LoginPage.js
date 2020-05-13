import React, { Component } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Auth from "../../services/Auth";
import Footer from "../layout/Footer";

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
      <div className="wrapper-login bg-light">
        <nav className="navbar navbar-expand-md navbar-light bg-light shadowNavbar">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            <img
              src={require(`../../assets/meetout1.png`)}
              width={64}
              height={40}
              alt="Logo"
            />
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <button
                  type="button"
                  class="btn"
                  data-toggle="modal"
                  data-target="#login"
                >
                  Login
                </button>

                <div class="modal" id="login">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button class="close" data-dismiss="modal">
                          &times;
                        </button>
                      </div>
                      <div class="modal-body">
                        <div className="col-12">
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
                  class="btn"
                  data-toggle="modal"
                  data-target="#sign-up"
                >
                  Sign up
                </button>

                <div class="modal" id="sign-up">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button class="close" data-dismiss="modal">
                          &times;
                        </button>
                      </div>
                      <div class="modal-body">
                        <div className="col-12 mt-4">
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

        <br />
        <div className="container">
          <div
            container
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
                  src={require(`../../assets/wild-green.jpeg`)}
                  width={1200}
                  height={700}
                  alt="Logo"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h1 class="display-2" text-secondary>
                    First slide label
                  </h1>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                  <button type="button" class="btn btn-outline-light btn-lg">
                    View Demo
                  </button>
                  <button type="button" class="btn btn-secondary btn-lg">
                    Get Started
                  </button>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src={require(`../../assets/pattern-multi.jpeg`)}
                  width={1200}
                  height={700}
                  alt="Logo"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h1 class="display-2" text-secondary>
                    Second slide label
                  </h1>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                  <button type="button" class="btn btn-outline-light btn-lg">
                    View Demo
                  </button>
                  <button type="button" class="btn btn-secondary btn-lg">
                    Get Started
                  </button>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src={require(`../../assets/green-tree.jpeg`)}
                  width={1200}
                  height={700}
                  alt="Logo"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h1 class="display-2" text-secondary>
                    Third slide label
                  </h1>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                  <button type="button" class="btn btn-outline-light btn-lg">
                    View Demo
                  </button>
                  <button type="button" class="btn btn-secondary btn-lg">
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
              <h1
                class="display-4 landingPageHeader"
                style={{ paddingTop: "60px", paddingBottom: "30px" }}
              >
                Meet the Team
              </h1>
            </div>
            <hr></hr>
          </div>
        </div>
        {/* CARDS */}
        <div class="container-fluid" style={{ padding: "30px" }}>
          <div class="row padding">
            <div class="col-md-4">
              <div class="card shadow">
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
                  <a href="#" class="btn btn-outline-secondary">
                    See profile
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card shadow">
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
                  <a href="#" class="btn btn-outline-secondary">
                    See profile
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card shadow">
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
                  <a href="#" class="btn btn-outline-secondary">
                    See profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default LoginPage;
