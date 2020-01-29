import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: ${props => props.theme.colors.background};
  height: 100vh;
  width: 100%;
`;

export const Header = () => (
  <Container>
    <h1>Mitch & Nicoline</h1>
  </Container>
);
