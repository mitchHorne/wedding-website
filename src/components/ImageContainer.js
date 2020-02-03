import React from "react";
import styled from "styled-components";
import InlineSVG from "svg-inline-react";

import { imageFrame } from "../assets/imageFrame";

const Container = styled.div`
  padding: 1rem;
`;

const InnerContainer = styled.div`
  border: 3px solid ${props => props.theme.colors.darkGold};
  display: inline-block;

  img {
    width: 40rem;
  }
`;

export const ImageContainer = ({ imgSrc }) => (
  <Container>
    <InnerContainer>
      <InlineSVG src={imageFrame} />
      <img src={imgSrc} alt="" />
    </InnerContainer>
  </Container>
);
