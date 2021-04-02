import React, { Component } from "react";
import styled from "styled-components";
import cookie from "js-cookie";

import { Login } from "./Login";
import { Loading } from "./Loader";
import { Header } from "./Header";
import { SaveDate } from "./SaveDate";
import { Music } from "./Music";
import { About } from "./About";
import { Party } from "./BridalParty";
import { Other } from "./Dress_Donate";
import { Map } from "./Map";
import { RSVP } from "./RSVP";

const MainBody = styled.div`
  font-size: 16px;

  ${(props) => props.theme.fonts.primary}
`;

const renderBody = ({
  addedSongs,
  addSong,
  associates,
  attend,
  attending,
  backToHome,
  music,
  responded,
  rsvp,
  self,
  setPlusOne,
  songs,
  toMusic,
  toRsvp,
  unAttend,
}) => {
  if (music)
    return (
      <Music
        addedSongs={addedSongs}
        addSong={addSong}
        backToHome={backToHome}
        songs={songs}
      />
    );
  if (rsvp)
    return (
      <RSVP
        associates={associates}
        attend={attend}
        backToHome={backToHome}
        self={self}
        setPlusOne={setPlusOne}
        unAttend={unAttend}
      />
    );
  return (
    <div>
      <Header />
      <SaveDate
        attending={attending}
        responded={responded}
        toMusic={toMusic}
        toRsvp={toRsvp}
      />
      <About />
      <Party />
      <Other />
      <Map />
    </div>
  );
};

class Main extends Component {
  state = {
    associates: [],
    isLoading: true,
    isLoggedIn: false,
    music: false,
    pin: "",
    rsvp: false,
    self: {},
    songs: [],
  };

  stopLoading = () => this.setState({ ...this.state, isLoading: false });

  startLoading = () => this.setState({ ...this.state, isLoading: true });

  componentDidMount() {
    const guest = cookie.get("user");

    if (guest) {
      const data = JSON.parse(guest);
      this.login(data.self.id);
      this.getSongs();
    }
  }

  loading = (isLoading) => {
    if (isLoading) return <Loading />;
    return;
  };

  renderLogin = (loggedIn) => {
    const { pin } = this.state;
    const loadUtils = { stop: this.stopLoading, start: this.startLoading };
    if (!loggedIn)
      return (
        <Login
          handleChange={this.handleLoginChange}
          load={loadUtils}
          value={pin}
        />
      );
    return;
  };

  handleLoginChange = (event) => {
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

  login = async (pin) => {
    const { url } = this.props;
    this.setState({ ...this.state, isLoading: true, isLoggedIn: true });

    try {
      const res = await fetch(`${url}/getGuests/${pin}`);
      const guest = await res.json();
      cookie.set("user", guest);
      this.setState({
        ...this.state,
        associates: guest.associates,
        isLoading: false,
        isLoggedIn: true,
        self: guest.self,
      });
    } catch (err) {
      this.setState({ ...this.state, isLoading: false, isLoggedIn: false });
      console.error("Login Failed");
    }
  };

  toRsvp = () => {
    window.scrollTo(0, 0);
    this.setState({
      ...this.state,
      rsvp: true,
    });
  };

  attend = async (id) => {
    const { url } = this.props;
    this.startLoading();

    try {
      const body = JSON.stringify({ id });
      const options = { method: "POST", body };
      const res = await fetch(`${url}/rsvp`, options);

      if (res.status !== 200) throw Error("Failed in RSVP call");

      const success = await res.json();

      if (!success) throw Error("Failed in RSVP call");

      this.login(this.state.self.id);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    } finally {
      this.stopLoading();
    }
  };

  unAttend = async (id) => {
    const { url } = this.props;
    this.startLoading();

    try {
      const body = JSON.stringify({ id });
      const options = { method: "POST", body };
      const res = await fetch(`${url}/unrsvp`, options);

      if (res.status !== 200) throw Error("Failed in unRSVP call");

      const success = await res.json();

      if (!success) throw Error("Failed in unRSVP call");

      this.login(this.state.self.id);
      return true;
    } catch (err) {
      console.log(err);
    } finally {
      this.stopLoading();
    }
  };

  toMusic = () => {
    window.scrollTo(0, 0);
    this.setState({
      ...this.state,
      music: true,
    });
  };

  getSongs = async () => {
    const { url } = this.props;
    this.startLoading();

    try {
      const options = { method: "GET" };
      const res = await fetch(`${url}/getSongs`, options);

      if (res.status !== 200) throw Error("Failed in getSongs call");

      const songs = await res.json();
      console.log(songs);
      this.setState({ ...this.state, songs });

      return true;
    } catch (err) {
      console.log(err);
    } finally {
      this.stopLoading();
    }
  };

  addSong = async (song) => {
    const { url } = this.props;
    this.startLoading();

    try {
      const body = JSON.stringify({ id: this.state.self.id, song });
      const options = { method: "POST", body };
      const res = await fetch(`${url}/addSong`, options);

      if (res.status !== 200) throw Error("Failed in Add song call");

      const success = await res.json();

      if (!success) throw Error("Failed in Add song call");

      this.getSongs();
      this.login(this.state.self.id);
      return true;
    } catch (err) {
      console.log(err);
    } finally {
      this.stopLoading();
    }
  };

  setPlusOne = async (id, plusOne) => {
    const { url } = this.props;
    this.startLoading();

    try {
      const body = JSON.stringify({ id, plusOne });
      const options = { method: "POST", body };
      const res = await fetch(`${url}/plusOne`, options);

      if (res.status !== 200) throw Error("Failed in plusOne call");

      const success = await res.json();

      if (!success) throw Error("Failed in plusOne call");

      return true;
    } catch (err) {
      console.log(err);
    } finally {
      this.stopLoading();
    }
  };

  backToHome = () => {
    window.scrollTo(0, 0);
    this.setState({
      ...this.state,
      music: false,
      rsvp: false,
    });
  };

  render() {
    const {
      addSong,
      attend,
      backToHome,
      loading,
      renderLogin,
      toMusic,
      toRsvp,
      setPlusOne,
      unAttend,
    } = this;
    const {
      associates,
      isLoading,
      isLoggedIn,
      music,
      rsvp,
      self,
      songs,
    } = this.state;
    const { responded } = this.state.self;
    const attending = this.state.self?.rsvp;
    const addedSongs = this.state.self.songs;

    const renderBodyParams = {
      addedSongs,
      addSong,
      associates,
      attend,
      attending,
      backToHome,
      music,
      responded,
      rsvp,
      self,
      setPlusOne,
      songs,
      toMusic,
      toRsvp,
      unAttend,
    };

    return (
      <MainBody>
        {renderLogin(isLoggedIn)}
        {loading(isLoading)}
        {renderBody(renderBodyParams)}
      </MainBody>
    );
  }
}
export default Main;
