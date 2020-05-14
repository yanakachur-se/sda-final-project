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
              <p>email</p>
              <p>https:www.meetout.se</p>
            </div>
            {/* Column 2 */}
            <div className="col-md-4 col-sm-8">
              <p>Phone No</p>

              <p>0046-08 8675432</p>
            </div>
            {/* Column 3 */}
            <div className="col-md-4 col-sm-8">
              <p>Address</p>

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
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  ul li a {
    color: var(--mainGrey);
  }

  ul li a:hover {
    color: var(--mainLightGrey);
  }
`;
