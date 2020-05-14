import React from "react";
import styled from "styled-components";
import '../../style/Footer.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer className="footer is-primary main-footer">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-4 col-sm-8">
              <h6>Contact Us</h6>
              <div className="address">
                E-Mail: meetout.se@gmail.com <br></br>
                Address: Sveavägen 89, Stockholm <br></br>
                Phone No: 0046-08 8675432
              </div>
            </div>

            {/* Column 2 */}
            <div className="col-md-4 col-sm-8">
              <h6>Have Questions ?</h6>
              <div className="footer-link-container">
                <a href="/Faq" className="footer-links">FAQ</a> <br></br>
                <a href="/Chat" className="footer-links">Chat</a>
              </div>
            </div>

            {/* Column 3 */}
            <div className="col-md-4 col-sm-8">
              <h6>Service Partners</h6>
              <li>KTH Royal Institute of Technology, Stockholm</li>
              <li>Novare Potential, Stockholm</li>
            </div>
          </div>
          <hr></hr>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} MeetOut App - All Rights Reserved | Terms of Service | Privacy
            </p>
          </div>
        </div>

      </footer>
    </div>
  );
}

export default Footer;
