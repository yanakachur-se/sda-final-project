import React, { Component } from "react";

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
                src={require(`../../assets/traveling-barber.jpg`)}
                width={1200}
                height={500}
                alt="Logo"
              />
              <div className="carousel-caption d-none d-md-block">
                <h1 className="display-2" text-warning>
                  First slide label
                </h1>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
                <button type="button" className="btn btn-outline-light btn-lg">
                  View Demo
                </button>
                <button type="button" className="btn btn-warning btn-lg">
                  Get Started
                </button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={require(`../../assets/haircit-in-greenery-trees-river-and-park.jpg`)}
                width={1200}
                height={500}
                alt="Logo"
              />
              <div className="carousel-caption d-none d-md-block">
                <h1 className="display-2" text-warning>
                  Second slide label
                </h1>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
                <button type="button" className="btn btn-outline-light btn-lg">
                  View Demo
                </button>
                <button type="button" className="btn btn-warning btn-lg">
                  Get Started
                </button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={require(`../../assets/outdoor-hairdresser.jpg`)}
                width={1200}
                height={500}
                alt="Logo"
              />
              <div className="carousel-caption d-none d-md-block">
                <h1>Third slide label</h1>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
                <button type="button" className="btn btn-outline-light btn-lg">
                  View Demo
                </button>
                <button type="button" className="btn btn-warning btn-lg">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default HomePage;
