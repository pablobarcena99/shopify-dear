"use client";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #141414;
  color: white;
  width: 100%;
  min-height: 50px;
  display: flex;
  align-items: center;
  margin-top: 32px ;
`;

export default function SectionTitle(props) {
  return (
    <Wrapper>
      <div className='container-fluid'>{props.title}</div>
    </Wrapper>
  );
}
