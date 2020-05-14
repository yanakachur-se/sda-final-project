import React from "react";

import "../../style/Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col">
            <h6>Contact Us</h6>
            <ul className="list-unstyled">
              <li>E-Mail: meetout.se@gmail.com</li>
              <li>Address: Sveavägen 89, Stockholm </li>
              <li>Phone No: 0046-08 8675432</li>
            </ul>
            {/* <div className="address">
                E-Mail: meetout.se@gmail.com <br></br>
                Address: Sveavägen 89, Stockholm <br></br>
                Phone No: 0046-08 8675432
              </div> */}
          </div>

          {/* Column 2 */}
          <div className="col">
            <h6>Have Questions ?</h6>
            <div className="footer-link-container">
              <a href="/Faq" className="footer-links">
                FAQ
              </a>{" "}
              <br></br>
              <a href="/Chat" className="footer-links">
                Chat
              </a>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col">
            <h6>Service Partners</h6>
            <ul className="list-unstyled">
              <li>KTH Royal Institute of Technology, Stockholm</li>
              <li>Novare Potential, Stockholm</li>
            </ul>
          </div>
        </div>
        <hr />

        {/* Footer Bottom */}
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} ANTHURIUMS INC | All Rights
            Reserved | Terms of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
