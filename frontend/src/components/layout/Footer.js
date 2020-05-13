import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-4 col-sm-8">
              <h12>Email</h12>
              <p>https:www.meetout.se</p>
            </div>
            {/* Column 2 */}
            <div className="col-md-4 col-sm-8">
              <h12>Phone No</h12>

              <p>0046-08 8675432</p>
            </div>
            {/* Column 3 */}
            <div className="col-md-4 col-sm-8">
              <h12>Address</h12>

              <p>Sveavägen 89, Stockholm</p>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} MeetOut App - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    margin-top: 30px
    background: #79ba9e;
    padding-top: 3rem;
    color: white;
  }

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

   .col-md-4 h12 {
    font-weight: bold;
    text-decoration: underline;
  }

  ul li a {
    color: grey;
  }

  ul li a:hover {
    color: #f3eee6;
  }
`;
