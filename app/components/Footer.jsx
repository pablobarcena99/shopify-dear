"use client";
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: #fb4d3d;
  min-height: 400px;
  padding: 32px 0;
`;
const FooterLogo = styled.h3`
  color: #141414;
  font-family: var(--font-varent);
`;
const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  a{
    color: inherit;
    color: #141414;
    text-decoration: none;

  }
  a:hover{
    color: white
  }

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
                  <h3>Products</h3>
                  <a href=''>Shirts</a>
                  <a href=''>Sweatshirts</a>
                  <a href=''>Jeans</a>
                </FooterLinks>
              </div>
              <div className='col-lg-4 col-sm-6'>
                <FooterLinks>
                  <h3>Links</h3>
                  <a href=''>Home</a>
                  <a href=''>About Us</a>
                  <a href=''>FAQ</a>
                </FooterLinks>
              </div>
              <div className='col-lg-4 col-sm-6'>
                <FooterLinks>
                  <h3>Social</h3>
                  <a href=''>Instagram</a>
                  <a href=''>TikTok</a>
                  <a href=''>Twitter</a>
                </FooterLinks>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}
