import React from "react";
import styled from "styled-components";

import { Header } from "./Header";

const MainBody = styled.div`
  font-size: 16px;

  ${props => props.theme.fonts.primary}
`;

const Main = () => (
  <MainBody>
    <Header />
  </MainBody>
);

export default Main;
