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
        <nav className="navbar navbar-expand-lg navbar-light bg-sedondary shadowNavbar">
          <a className="navbar-brand" href="#">
            <img
              src={require(`../../assets/meetout1.png`)}
              width={120}
              height={50}
              alt="Logo"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

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
              </li>
            </ul>
          </div>
        </nav>

        <br />
        <br />
        <div className="container mt-2">
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
                  src={require(`../../assets/bars.jpeg`)}
                  width={1200}
                  height={400}
                  alt="Logo"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h1 class="display-2" text-secondary>
                    Outdoor Trainings
                  </h1>
                  <p>
                    We provide safe outdoor services in this Cororona pandemic:
                    Yoga, Aerobics, Meditation and Soccer.
                  </p>

                  <button type="button" class="btn btn-outline-light  btn-lg">
                    Get Started
                  </button>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src={require(`../../assets/contrast.jpeg`)}
                  width={1200}
                  height={400}
                  alt="Logo"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h1 class="display-2" text-secondary>
                    Outdoor Haircut Services
                  </h1>
                  <p>
                    In the indoor services, there are more chances of corona
                    spread. To deal with the situation and to provide
                    opportunity for business and customer, we have arranged
                    services regarding hair in outdoor, open-air settings.
                  </p>

                  <button type="button" class="btn btn-outline-light btn-lg">
                    Get Started
                  </button>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src={require(`../../assets/leaves.jpeg`)}
                  width={1200}
                  height={400}
                  alt="Logo"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h1 class="display-2" text-secondary>
                    Open oppertunities for business sufferers
                  </h1>
                  <p>
                    The main initiative of this application is to help people
                    with their business to get new customers.
                  </p>

                  <button type="button" class="btn btn-outline-light btn-lg">
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
                Outdoor Services
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
                  src={require(`../../assets/meditation.jpeg`)}
                  width={300}
                  height={600}
                />
                <div class="card-body">
                  <h4 class="card.title">Meditation</h4>
                  <p class="card-text">
                    Meditation is a practice where an individual uses a
                    technique – such as mindfulness, or focusing the mind on a
                    particular object, thought, or activity – to train attention
                    and awareness, and achieve a mentally clear and emotionally
                    calm and stable state.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card shadow">
                <img
                  class="card-img-top"
                  src={require(`../../assets/sports.jpeg`)}
                  width={300}
                  height={600}
                />
                <div class="card-body">
                  <h4 class="card.title">Sports </h4>
                  <p class="card-text">
                    Sport includes all forms of competitive physical activity or
                    games which through casual or organized participation, at
                    least in part aim to use, maintain or improve physical
                    ability and skills while providing enjoyment to
                    participants, entertainment for spectators.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card shadow">
                <img
                  class="card-img-top"
                  src={require(`../../assets/running.jpeg`)}
                  width={300}
                  height={600}
                />
                <div class="card-body">
                  <h4 class="card.title">Running</h4>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate deserunt quos tempore omnis expedita suscipit
                    cumque obcaecati magni. Dignissimos minima vel labore quos,
                    nostrum doloremque blanditiis iure tempore pariatur facilis.
                  </p>
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
