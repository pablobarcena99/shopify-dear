"use client";
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: #ffdada;
  min-height: 400px;
  padding: 32px 0;
`;
const FooterLogo = styled.h3`
  color: #141414;
  font-family: var(--font-varent);
`;
const FooterLinks = styled.div`
  color: #141414;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-6 col-sm-12'>
            <FooterLogo>dear:</FooterLogo>
          </div>

          <div className='col-lg-6 col-sm-12'>
            <div className='row'>
              <div className='col-lg-4 col-sm-6'>
                <FooterLinks>
                  <h3>Links</h3>
                  <p>Home</p>
                  <p>About Us</p>
                  <p>FAQ</p>
                </FooterLinks>
              </div>
              <div className='col-lg-4 col-sm-6'>
                <FooterLinks>
                  <h3>Links</h3>
                  <p>Home</p>
                  <p>About Us</p>
                  <p>FAQ</p>
                </FooterLinks>
              </div>
              <div className='col-lg-4 col-sm-6'>
                <FooterLinks>
                  <h3>Links</h3>
                  <p>Home</p>
                  <p>About Us</p>
                  <p>FAQ</p>
                </FooterLinks>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}
