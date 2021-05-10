import React from "react";
import styled from "styled-components";

import headerContainer from "../assets/headerContainer.png";
import mainImage from "../assets/main.jpg";

const Container = styled.div`
  align-items: center;
  background: no-repeat url(${(props) => props.mainImage});
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;

  @media only screen and (min-width: 800px) {
    background-size: 100%;
    background-position: top;
  }
`;

const Cover = styled.div`
  align-items: center;
  background: rgba(90, 90, 90, 0.65);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-around;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;

  @media only screen and (min-width: 800px) {
    width: 100%;
  }
`;

const Heading = styled.div`
  display: flex;
  justify-content: center;
  postion: absolute;
  width: 100%;

  h1 {
    background: -webkit-linear-gradient(
      right,
      ${(props) => props.theme.colors.darkGold},
      ${(props) => props.theme.colors.lightGold},
      ${(props) => props.theme.colors.darkGold}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: none;
    font-size: 6rem;
    position: absolute;
    top: 6rem;

    ${(props) => props.theme.fonts.accent};

    @media only screen and (min-width: 800px) {
      display: block;
    }
  }

  .mobile {
    display: block;

    @media only screen and (min-width: 800px) {
      display: none;
    }

    h1 {
      display: block;
      font-size: 5rem;
      margin: 0;
      position: relative;
      text-align: center;
      top: 0;
    }
  }
`;

const HeaderAccent = styled.img`
  display: none;

  @media only screen and (min-width: 800px) {
    display: block;
    position: absolute;
    top: 0em;
    width: 43rem;
  }
`;

const SecondaryText = styled.div`
  color: ${(props) => props.theme.colors.darkGold};
  font-size: 1.5rem;
  text-align: center;

  @media only screen and (min-width: 800px) {
    align-self: center;
    font-size: 2.5rem;
  }

  ${(props) => props.theme.fonts.accent};

  h1,
  h2 {
    background: -webkit-linear-gradient(
      right,
      ${(props) => props.theme.colors.darkGold},
      ${(props) => props.theme.colors.lightGold},
      ${(props) => props.theme.colors.darkGold}
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
        <div className="mobile">
          <h1>Nicoline</h1>
          <h1>&</h1>
          <h1>Mitch</h1>
        </div>
        <HeaderAccent src={headerContainer} alt="" />
      </Heading>

      <SecondaryText>
        <h1>We're getting hitched!!</h1>
      </SecondaryText>
    </Cover>
  </Container>
);
