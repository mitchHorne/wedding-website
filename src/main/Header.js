import React from "react";
import styled from "styled-components";

import headerContainer from "../assets/headerContainer.png";
import mainImge from "../assets/main.jpg";

const Container = styled.div`
  background: ${props => props.theme.colors.background};
  height: 100vh;
  width: 100%;
`;

const Heading = styled.h1`
  align-items: center;
  background: -webkit-linear-gradient(
    right,
    ${props => props.theme.colors.darkGold},
    ${props => props.theme.colors.lightGold},
    ${props => props.theme.colors.darkGold}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: 4em;
  padding-top: 1.5em;

  ${props => props.theme.fonts.accent};

  img {
    margin-top: -3.9em;
    width: 35%;
  }
`;

export const Header = () => (
  <Container>
    <Heading>
      Nicoline & Mitch
      <img src={headerContainer} alt="" />
    </Heading>
  </Container>
);
