import React, { Component } from "react";
import styled from "styled-components";
import cookie from "js-cookie";

import { Login } from "./Login";
import { Header } from "./Header";
import { SaveDate } from "./SaveDate";
import { About } from "./About";

const MainBody = styled.div`
  font-size: 16px;

  ${props => props.theme.fonts.primary}
`;

class Main extends Component {
  state = { isLoggedIn: false };

  componentDidMount() {
    this.setState({ isLoggedIn: cookie.get("user") });
  }

  renderLogin = loggedIn => {
    if (!loggedIn) return <Login />;
    return;
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <MainBody>
        {this.renderLogin(isLoggedIn)}
        <Header />
        <SaveDate />
        <About />
      </MainBody>
    );
  }
}
export default Main;
