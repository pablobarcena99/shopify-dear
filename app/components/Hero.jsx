"use client";

import React from "react";
import styled from "styled-components";

const HeroSection = styled.div`
  min-height: 50vh;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 16px;
  background-color: #993747;

  h1 {
    color: #993747;
    font-family: var(--font-varent);
    font-size: calc(2rem + 5vw);
    font-weight: 700;
    color: #f5f5f5;
    text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191, 1px 4px 1px #919191,
      1px 5px 1px #919191, 1px 6px 1px #919191, 1px 7px 1px #919191, 1px 8px 1px #919191,
      1px 9px 1px #919191, 1px 10px 1px #919191, 1px 18px 6px rgba(16, 16, 16, 0.4),
      1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2),
      1px 30px 60px rgba(16, 16, 16, 0.4);
  }
`;
function Hero() {
  return (
    <HeroSection>
      <div className='container'>
        <h1>dear:</h1>
        <h2></h2>
      </div>
    </HeroSection>
  );
}

export default Hero;
