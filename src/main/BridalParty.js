import React, { useState } from "react";
import styled from "styled-components";

import Frame from "../assets/frame.png";

import hot_3 from "../assets/Hot_3.png";

import sergio_3 from "../assets/Sergio_3.jpg";

import alpha_1 from "../assets/alpha_1.jpg";
import alpha_2 from "../assets/alpha_2.jpg";
import alpha_3 from "../assets/alpha_3.jpg";

const Container = styled.div`
  align-items: center;
  background: transparent;
  display: flex;
  flex-direction: column;
  padding: 1rem 0rem 2rem;

  @media only screen and (min-width: 800px) {
    font-size: 2rem;
    padding: 1rem 2rem 2rem;
  }

  h1 {
    color: ${(props) => props.theme.colors.darkGold};
    font-size: 3rem;
    margin: 0;

    ${(props) => props.theme.fonts.accent};

    @media only screen and (min-width: 800px) {
      font-size: 3em;
    }
  }

  h2 {
    color: ${(props) => props.theme.colors.darkGold};
    font-size: 2rem;
    margin: 0;

    ${(props) => props.theme.fonts.accent};

    @media only screen and (min-width: 800px) {
      font-size: 2em;
    }
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "column-reverse" : "column")};
  padding: 2rem 0rem;
  width: 100%;

  @media only screen and (min-width: 800px) {
    flex-direction: row;
    padding: 2rem 1rem;
    justify-content: space-around;
  }

  ul {
    color: ${(props) => props.theme.colors.primary};
    list-style: none;
    margin: 0;
  }

  p {
    ${(props) => props.theme.fonts.primary}
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

    ${(props) => (props.left ? "align-items: flex-end;" : "")}
  }

  h1 {
    font-size: 2.5em;
    margin-top: 1rem;
    padding: 0 1rem;
    position: relative;
    text-align: center;

    @media only screen and (min-width: 800px) {
      font-size: 2em;
      left: ${(props) => (props.left ? "-16rem" : "2rem")};
      margin: 0;
      text-align: left;
    }
  }

  h2 {
    font-size: 1.5em;
    margin-top: 1rem;
    padding: 0 1rem;
    position: relative;
    text-align: center;

    @media only screen and (min-width: 800px) {
      font-size: 1.5em;
      left: ${(props) => (props.left ? "-16rem" : "2rem")};
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
        color: ${(props) => props.theme.colors.darkGold};
        margin-right: 1rem;
      }
    }
  }
`;

const Portrait = styled.img`
  height: 300px;
  opacity: ${(props) => (props.show ? 1 : 0)};
  position: absolute;
  transition: all 0.5s;
  width: 250px;


  @media only screen and (min-width: 800px) {
    height: 425px;
    width: 354px;
`;

const ListItem = (props) => {
  const { gender, children } = props;

  return (
    <li>
      <i className={`fa fa-${gender}`}></i>
      <div>{children}</div>
    </li>
  );
};

const toggleImage = (image, setImage) => {
  if (image < 3) return setImage(++image);
  if (image === 3) return setImage(1);
};

export const Party = () => {
  const [alpha_img, setAlphaImg] = useState(1);
  const [hot_img, setHotImg] = useState(1);
  const [sergio_img, setsergioImg] = useState(1);

  return (
    <Container>
      <h1>Bridal Party</h1>
      <h2>Not us - But still kinda important</h2>
      <AboutContent>
        <ImageContainer>
          <img
            className="frame"
            src={Frame}
            alt=""
            onClick={() => toggleImage(hot_img, setHotImg)}
          />
          <Portrait show={1 === hot_img} src={hot_3} alt="" />
          <Portrait show={2 === hot_img} src={hot_3} alt="" />
          <Portrait show={3 === hot_img} src={hot_3} alt="" />
        </ImageContainer>
        <Desctiption>
          <h1>Simonne "Hot" de Beer</h1>
          <h2>Maid of Honor</h2>
          <ul>
            <ListItem gender="female">Runs on Crossfit and Sushi</ListItem>
            <ListItem gender="female">Becomes very upset when not fed</ListItem>
            <ListItem gender="female">
              Might have any hair colour on a given day
            </ListItem>
          </ul>
        </Desctiption>
      </AboutContent>
      <AboutContent reverse>
        <Desctiption left>
          <h1>Alpha Shuro</h1>
          <h2>Best Man</h2>
          <ul>
            <ListItem gender="male">
              Adjusts glasses regularly to show dominance
            </ListItem>
            <ListItem gender="male">
              Loves egg salad (He just says it often I suppose)
            </ListItem>
            <ListItem gender="male">
              Becomes invisible in the dark, unless you tell a joke
            </ListItem>
          </ul>
        </Desctiption>
        <ImageContainer>
          <img
            className="frame"
            src={Frame}
            alt=""
            onClick={() => toggleImage(alpha_img, setAlphaImg)}
          />
          <Portrait show={1 === alpha_img} src={alpha_1} alt="" />
          <Portrait show={2 === alpha_img} src={alpha_2} alt="" />
          <Portrait show={3 === alpha_img} src={alpha_3} alt="" />
        </ImageContainer>
      </AboutContent>
      <AboutContent>
        <ImageContainer>
          <img
            className="frame"
            src={Frame}
            alt=""
            onClick={() => toggleImage(sergio_img, setsergioImg)}
          />
          <Portrait show={1 === sergio_img} src={sergio_3} alt="" />
          <Portrait show={2 === sergio_img} src={sergio_3} alt="" />
          <Portrait show={3 === sergio_img} src={sergio_3} alt="" />
        </ImageContainer>
        <Desctiption>
          <h1>Sergio Oliveira</h1>
          <h2>Groomsman</h2>
          <ul>
            <ListItem gender="male">Is fluent in Italian gesturing</ListItem>
            <ListItem gender="male">Has the cooking gene</ListItem>
            <ListItem gender="male">Keeps Simonne happy (fed)</ListItem>
          </ul>
        </Desctiption>
      </AboutContent>
    </Container>
  );
};
