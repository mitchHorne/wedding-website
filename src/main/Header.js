import React from "react";
import styled from "styled-components";

import headerContainer from "../assets/headerContainer.png";
import mainImage from "../assets/main.jpg";

const Container = styled.div`
  align-items: center;
  background: no-repeat url(${props => props.mainImage});
  background-size: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

const Cover = styled.div`
  align-items: center;
  background: rgba(90, 90, 90, 0.85);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-around;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const Heading = styled.div`
  display: flex;
  justify-content: center;
  postion: absolute;
  width: 100%;

  h1 {
    background: -webkit-linear-gradient(
      right,
      ${props => props.theme.colors.darkGold},
      ${props => props.theme.colors.lightGold},
      ${props => props.theme.colors.darkGold}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 6em;
    position: absolute;
    top: 6rem;

    ${props => props.theme.fonts.accent};
  }
`;

const HeaderAccent = styled.img`
  position: absolute;
  top: 0em;
  width: 43rem;
`;

const SaveDate = styled.div`
  align-self: flex-start;
  color: ${props => props.theme.colors.darkGold};
  font-size: 2.5rem;
  margin-left: 3rem;

  ${props => props.theme.fonts.accent};

  h1,
  h2 {
    background: -webkit-linear-gradient(
      right,
      ${props => props.theme.colors.darkGold},
      ${props => props.theme.colors.lightGold},
      ${props => props.theme.colors.darkGold}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: block;
    margin: 0;
  }
`;

export const Header = () => (
  <Container mainImage={mainImage}>
    <Cover>
      <Heading>
        <h1>Nicoline & Mitch</h1>
        <HeaderAccent src={headerContainer} alt="" />
      </Heading>

      <SaveDate>
        <h1>We're tying the knot!!</h1>
      </SaveDate>
    </Cover>
  </Container>
);
