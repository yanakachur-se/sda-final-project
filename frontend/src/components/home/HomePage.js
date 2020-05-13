import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide "
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={require(`../../assets/abstract.jpeg`)}
              width={1200}
              height={500}
              alt="Logo"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="display-2" text-warning>
                Post a service
              </h1>
              <p>Click on the Get Started button below to post a service</p>

              <Link className="link-button" to="/serviceform">
                <button
                  type="button"
                  className="btn btn-lg"
                >
                  Get Started
                </button>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={require(`../../assets/leaves.jpeg`)}
              width={1200}
              height={500}
              alt="Logo"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="display-2" text-warning>
                Book a Service
              </h1>
              <p>Click on the Get Started button below to book a service</p>

              <Link className="link-button" to="/service?service=all">
                <button
                  type="button"
                  className="btn btn-lg"
                >
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
