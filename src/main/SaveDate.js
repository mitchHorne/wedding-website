import React from "react";
import styled from "styled-components";

import MobileArrows from "../assets/mobile-arrow.png";
import Arrows from "../assets/arrow.png";

const Container = styled.div`
  align-items: center;
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  padding: 2rem 2rem 5rem;
  justify-content: center;

  @media only screen and (min-width: 800px) {
    font-size: 2rem;
  }

  ${(props) => props.theme.fonts.primary}

  h1 {
    color: ${(props) => props.theme.colors.darkGold};
    margin: 0;

    ${(props) => props.theme.fonts.accent}
  }
`;

const ChangeButton = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  position: relative;
  width: 75%;

  @media only screen and (min-width: 800px) {
    flex-direction: row;
    padding: 1rem 2rem;
  }

  button {
    background: transparent;
    border: 1px solid ${(props) => props.theme.colors.darkGold};
    border-radius: 20px;
    color: ${(props) => props.theme.colors.darkGold};
    font-size: 1em;
    margin-bottom: 0.5em;
    padding: 0.5em 0;
    position: relative;
    transition: all 0.4s;
    top: 1rem;
    width: 100%;
    z-index: 2;

    @media only screen and (min-width: 800px) {
      margin-right: 0.5em;
      font-size: 1.5rem;
      top: 0;
      width: 30%;
    }

    :hover {
      background: ${(props) => props.theme.colors.darkGold};
      color: white;
      cursor: pointer;
    }
  }
`;

const RsvpButton = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 6rem 1rem;
  position: relative;

  @media only screen and (min-width: 800px) {
    padding: 10rem 2rem;
  }

  button {
    background: transparent;
    border: 1px solid ${(props) => props.theme.colors.darkGold};
    border-radius: 20px;
    color: ${(props) => props.theme.colors.darkGold};
    font-size: 1.3em;
    padding: 0.5em 1em;
    position: relative;
    top: 20px;
    transition: all 0.4s;
    z-index: 2;

    @media only screen and (min-width: 800px) {
      font-size: 2rem;
    top: 8px;
      width: 100%;
    }

    :hover {
      background: ${(props) => props.theme.colors.darkGold};
      color: white;
      cursor: pointer;
    }
  }

  img {
    bottom: 0.5rem;
    display: none;
    position: absolute;
    right: -7.5rem;
    width: 30rem;

    @media only screen and (min-width: 800px) {
      display: block;
    }
  }
  img.mobile {
    bottom: -1.9rem;
    display: block;
    position: absolute;
    right: -2.5rem;
    width: 19rem;
      
    @media only screen and (min-width: 800px) {
      display: none;
    }
  }
} 
`;

export const SaveDate = ({ attending, responded, toMusic, toRsvp }) => (
  <Container>
    <h1>31 / 10 / 2020</h1>
    <h1>{responded ? "Remember" : "Save"} The Date!</h1>
    {responded ? (
      <ChangeButton>
        <button onClick={() => toRsvp()}>Change Response</button>
        {attending ? (
          <button onClick={() => toMusic()}>Request a Song</button>
        ) : null}
      </ChangeButton>
    ) : (
      <RsvpButton>
        <button onClick={() => toRsvp()}>RSVP Now</button>
        <img src={Arrows} alt="" />
        <img className="mobile" src={MobileArrows} alt="" />
      </RsvpButton>
    )}
  </Container>
);
