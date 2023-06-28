"use client";

import React from "react";
import styled from "styled-components";

const HeroSection = styled.div`
  min-height: 50vh;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 16px;
  background-color: #141414;

  h1 {
    color: #993747;
    font-family: var(--font-varent);
    font-size: calc(2rem + 5vw);
    font-weight: 700;
    color: #fadada;
    margin-left: 32px;
  }
`;
function Hero() {
  return (
    <HeroSection>
      <div className='container-fluid'>
        <h1>dear:</h1>
        <h2></h2>
      </div>
    </HeroSection>
  );
}

export default Hero;
