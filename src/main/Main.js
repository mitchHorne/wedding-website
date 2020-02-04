import React from "react";
import styled from "styled-components";

import { Header } from "./Header";
import { SaveDate } from "./SaveDate";
import { About } from "./About";

const MainBody = styled.div`
  font-size: 16px;

  ${props => props.theme.fonts.primary}
`;

const Main = () => (
  <MainBody>
    <Header />
    <SaveDate />
    <About />
  </MainBody>
);

export default Main;
