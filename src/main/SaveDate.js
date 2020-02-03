import React from "react";
import styled from "styled-components";

import Arrows from "../assets/arrow.png";

const Container = styled.div`
  align-items: center;
  color: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  padding: 2rem;
  justify-content: center;

  ${props => props.theme.fonts.primary}

  h1 {
    color: ${props => props.theme.colors.darkGold};
    margin: 0;

    ${props => props.theme.fonts.accent}
  }
`;

const RsvpButton = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 10rem 2rem;
  position: relative;

  button {
    background: transparent;
    border: 2px solid ${props => props.theme.colors.darkGold};
    color: ${props => props.theme.colors.darkGold};
    font-size: 3rem;
    position: relative;
    z-index: 2;
  }

  img {
    bottom: 0.5rem;
    position: absolute;
    right: -7.5rem;
    width: 30rem;
  }
`;

export const SaveDate = () => (
  <Container>
    <h1>31 / 10 / 2020</h1>
    <h1>Save The Date!</h1>
    <RsvpButton>
      <button>RSVP Now</button>
      <img src={Arrows} alt="" />
    </RsvpButton>
  </Container>
);
