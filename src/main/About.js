import React, { useState } from "react";
import styled from "styled-components";

import Frame from "../assets/frame.png";

import woamn_1 from "../assets/woman_1.jpg";
import woamn_2 from "../assets/woman_2.jpg";
import woamn_3 from "../assets/woman_3.jpg";
import woamn_4 from "../assets/woman_4.jpg";

import mitch_1 from "../assets/mitch_1.jpg";
import mitch_2 from "../assets/mitch_2.jpg";
import mitch_3 from "../assets/mitch_3.jpg";
import mitch_4 from "../assets/mitch_4.jpg";

const Container = styled.div`
  align-items: center;
  background: #d0d0d0;
  box-shadow: 0 0 15px #333;
  display: flex;
  flex-direction: column;
  padding: 1rem 0rem 2rem;

  @media only screen and (min-width: 800px) {
    font-size: 2rem;
    padding: 1rem 2rem 2rem;
  }

  h1 {
    color: ${props => props.theme.colors.darkGold};
    font-size: 3rem;
    margin: 0;

    ${props => props.theme.fonts.accent};

    @media only screen and (min-width: 800px) {
      font-size: 3em;
    }
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: ${props => (props.reverse ? "column-reverse" : "column")};
  padding: 2rem 0rem;
  width: 100%;

  @media only screen and (min-width: 800px) {
    flex-direction: row;
    padding: 2rem 1rem;
    justify-content: space-around;
  }

  ul {
    color: ${props => props.theme.colors.primary};
    list-style: none;
    margin: 0;
  }

  p {
    ${props => props.theme.fonts.primary}
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-grow: 1;
  height: 300px;
  justify-content: center;
  position: relative;

  @media only screen and (min-width: 800px) {
    height: 425px;
  }

  img.frame {
    height: 308px;
    position: absolute;
    top: -4px;
    width: 256px;
    z-index: 10;

    :hover {
      cursor: Pointer;
    }

    @media only screen and (min-width: 800px) {
      height: 440px;
      position: absolute;
      top: -9px;
      width: 373px;
    }
  }
`;

const Desctiption = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 800px) {
    flex-grow: 1;

    ${props => (props.left ? "align-items: flex-end;" : "")}
  }

  h1 {
    font-size: 2.5em;
    margin-top: 1rem;
    padding: 0 1rem;
    position: relative;
    text-align: center;

    @media only screen and (min-width: 800px) {
      font-size: 2em;
      left: ${props => (props.left ? "-16rem" : "2rem")};
      margin: 0;
      text-align: left;
    }
  }

  ul {
    padding-left: 1rem;

    li {
      display: flex;
      padding-right: 0.5rem;
      padding-top: 0.5rem;

      @media only screen and (min-width: 800px) {
        padding: 0;
      }

      i {
        color: ${props => props.theme.colors.darkGold};
        margin-right: 1rem;
      }
    }
  }
`;

const Portrait = styled.img`
  height: 300px;
  opacity: ${props => (props.show ? 1 : 0)};
  position: absolute;
  transition: all 0.5s;
  width: 250px;


  @media only screen and (min-width: 800px) {
    height: 425px;
    width: 354px;
`;

const ListItem = props => {
  const { gender, children } = props;

  return (
    <li>
      <i className={`fa fa-${gender}`}></i>
      <div>{children}</div>
    </li>
  );
};

const toggleImage = (image, setImage) => {
  if (image < 4) return setImage(++image);
  if (image === 4) return setImage(1);
};

export const About = () => {
  const [woman_img, setWomanImg] = useState(1);
  const [mitch_img, setMitchImg] = useState(1);

  return (
    <Container>
      <h1>About us</h1>
      <AboutContent>
        <ImageContainer>
          <img
            className="frame"
            src={Frame}
            alt=""
            onClick={() => toggleImage(woman_img, setWomanImg)}
          />
          <Portrait show={1 === woman_img} src={woamn_1} alt="" />
          <Portrait show={2 === woman_img} src={woamn_2} alt="" />
          <Portrait show={3 === woman_img} src={woamn_3} alt="" />
          <Portrait show={4 === woman_img} src={woamn_4} alt="" />
        </ImageContainer>
        <Desctiption>
          <h1>Nicole-Colene de Beer</h1>
          <ul>
            <ListItem gender="female">Running speed of -1.73Km/h.</ListItem>
            <ListItem gender="female">
              Has a death stare that can wither plants.
            </ListItem>
            <ListItem gender="female">
              Accidentally steals men's souls.
            </ListItem>
            <ListItem gender="female">
              Is human, but identifies as a mermaid.
            </ListItem>
          </ul>
        </Desctiption>
      </AboutContent>
      <AboutContent reverse>
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
          </ul>
        </Desctiption>
        <ImageContainer>
          <img
            className="frame"
            src={Frame}
            alt=""
            onClick={() => toggleImage(mitch_img, setMitchImg)}
          />
          <Portrait show={1 === mitch_img} src={mitch_1} alt="" />
          <Portrait show={2 === mitch_img} src={mitch_2} alt="" />
          <Portrait show={3 === mitch_img} src={mitch_3} alt="" />
          <Portrait show={4 === mitch_img} src={mitch_4} alt="" />
        </ImageContainer>
      </AboutContent>
    </Container>
  );
};
