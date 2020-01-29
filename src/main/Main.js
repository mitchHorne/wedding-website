import React from "react";
import styled from "styled-components";

const MainBody = styled.div`
  font-size: 16px;
  padding: 2em;

  ${props => props.theme.fonts.primary}
`;

const Main = () => <MainBody>Main</MainBody>;

export default Main;
