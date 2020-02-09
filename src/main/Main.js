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
  state = { isLoggedIn: false, pin: "" };

  componentDidMount() {
    cookie.remove("user");
    this.setState({ isLoggedIn: cookie.get("user") });
  }

  renderLogin = loggedIn => {
    const { pin } = this.state;
    if (!loggedIn)
      return <Login handleChange={this.handleLoginChange} value={pin} />;
    return;
  };

  handleLoginChange = event => {
    const changeType =
      this.state.pin.length < event.target.value.length ? "add" : "remove";

    if (changeType === "add") {
      const char = event.target.value[event.target.value.length - 1];
      if (!isNaN(char)) {
        this.setState({ ...this.state, pin: event.target.value });
        if (event.target.value.length === 4)
          return this.login(event.target.value);
      }
      return;
    }

    if (changeType === "remove") {
      this.setState({ ...this.state, pin: event.target.value });
    }

    return;
  };

  login = pin => {
    console.log("login");
    console.log(pin);
    cookie.set("user", pin);
    this.setState({ isLoggedIn: cookie.get("user") });
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
