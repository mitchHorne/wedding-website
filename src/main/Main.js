import React, { Component } from "react";
import styled from "styled-components";
import cookie from "js-cookie";

import { Login } from "./Login";
import { Loading } from "./Loader";
import { Header } from "./Header";
import { SaveDate } from "./SaveDate";
import { About } from "./About";

const MainBody = styled.div`
  font-size: 16px;

  ${props => props.theme.fonts.primary}
`;

class Main extends Component {
  state = { isLoading: true, isLoggedIn: false, pin: "" };

  componentDidMount() {
    cookie.remove("user");
    this.setState({ isLoading: false, isLoggedIn: cookie.get("user") });
  }

  loading = isLoading => {
    if (isLoading) return <Loading />;
    return;
  };

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

  login = async pin => {
    const { url } = this.props;
    this.setState({ ...this.state, isLoading: true, isLoggedIn: true });

    try {
      const res = await fetch(`${url}/getGuests/${pin}`);
      const guest = await res.json();
      cookie.set("user", guest);
      this.setState({
        ...this.state,
        isLoading: false,
        isLoggedIn: cookie.get("user")
      });
    } catch (err) {
      this.setState({ ...this.state, isLoading: false, isLoggedIn: false });
      console.error("Login Failed");
    }
  };

  render() {
    const { isLoading, isLoggedIn } = this.state;

    return (
      <MainBody>
        {this.renderLogin(isLoggedIn)}
        {this.loading(isLoading)}
        <Header />
        <SaveDate />
        <About />
      </MainBody>
    );
  }
}
export default Main;
