import React from "react";
import styled from "styled-components";

import Frame from "../assets/frame.png";
import Mitch from "../assets/mitch.jpg";
import Nicoline from "../assets/nicoline.jpg";

const Container = styled.div`
  align-items: center;
  background: #d0d0d0;
  box-shadow: 0 0 15px #333;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  padding: 1rem 2rem 2rem;

  h1 {
    color: ${props => props.theme.colors.darkGold};

    ${props => props.theme.fonts.accent}
  }
`;

const AboutContent = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2rem 1rem;
  width: 100%;

  h1,
  ul {
    margin: 0;
  }

  ul {
    color: ${props => props.theme.colors.primary};
    list-style: none;
  }

  p {
    ${props => props.theme.fonts.primary}
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  position: relative;

  img {
    height: 425px;
    width: 325px;
  }

  img.frame {
    height: 440px;
    position: absolute;
    top: -9px;
    width: 333px;
  }
`;

const Desctiption = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  ${props => (props.left ? "align-items: flex-end;" : "")}

  h1 {
    position: relative;
    left: ${props => (props.left ? "-16rem" : "2rem")};
  }

  ul {
    li {
      i {
        color: ${props => props.theme.colors.darkGold};
        margin-right: 1rem;
      }
    }
  }
`;

const ListItem = props => {
  const { gender, children } = props;

  return (
    <li>
      <i className={`fa fa-${gender}`}></i>
      {children}
    </li>
  );
};

export const About = () => (
  <Container>
    <h1>About us</h1>
    <AboutContent>
      <ImageContainer>
        <img className="frame" src={Frame} alt="" />
        <img src={Nicoline} alt="" />
      </ImageContainer>
      <Desctiption>
        <h1>Nicole-Colene de Beer</h1>
        <ul>
          <ListItem gender="female">Running speed of -1.73Km/h.</ListItem>
          <ListItem gender="female">
            Has a death stare that can wither plants.
          </ListItem>
          <ListItem gender="female">Accidentally steals men's souls.</ListItem>
          <ListItem gender="female">
            Is human, but identifies as a mermaid.
          </ListItem>
          <ListItem gender="female">
            Has terrible taste in men, but great tastes in future husbands.
          </ListItem>
        </ul>
      </Desctiption>
    </AboutContent>
    <AboutContent>
      <Desctiption left>
        <h1>Mitchell Horne</h1>
        <ul>
          <ListItem gender="male">
            Sight range of 3 moles and 1 bat combined.
          </ListItem>
          <ListItem gender="male">Never sarcastic - Not even once.</ListItem>
          <ListItem gender="male">
            Is hand crafted by the divine , and humble too!
          </ListItem>
          <ListItem gender="male">
            Didn't make this website just to extoll his own virtues.
          </ListItem>
          <ListItem gender="male">
            Best thing for Nicoline - EVER (Her own words).
          </ListItem>
          <ListItem gender="male">Is a strong independent woman.</ListItem>
        </ul>
      </Desctiption>
      <ImageContainer>
        <img className="frame" src={Frame} alt="" />
        <img src={Mitch} alt="" />
      </ImageContainer>
    </AboutContent>
  </Container>
);
