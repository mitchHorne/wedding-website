import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 2em;
  padding-bottom: 1em;

  ${(props) => props.theme.fonts.primary}

  h1 {
    margin-bottom: 0.25em;
    text-align: center;
  }

  p {
    margin: 0;
    padding: 0.5em 0;
    text-align: center;
    width: 90%;

    @media only screen and (min-width: 800px) {
      margin: 0 0 0.5em;
      padding: 0em 2em;
      width: 100%;
    }
  }

  form {
    align-items: center;
    display: flex;
    flex-direction: column;
    input {
      border: 1px solid #999;
      border-radius: 10px;
      margin-bottom: 0.5em;
      font-size: 0.5em;
      padding: 0.5em;
      width: 210px;

      @media only screen and (min-width: 800px) {
        margin-right: 0.5em;
      }
    }

    button {
      background: ${(props) =>
        props.active ? props.theme.colors.darkGold : "white"};
      border: 1px solid ${(props) => props.theme.colors.darkGold};
      border-radius: 10px;
      color: ${(props) =>
        props.active ? "white" : props.theme.colors.darkGold};
      font-size: 0.5em;
      margin-bottom: 0.5em;
      padding: 0.5em;
      transition: 0.3s all;
      width: 232px;

      :hover {
        cursor: pointer;
      }

      @media only screen and (min-width: 800px) {
        margin: 0.5em;
      }
    }
  }
`;

const BackIcon = styled.i`
  color: ${(props) => props.theme.colors.darkGold};
  left: 20px;
  position: absolute;
  top: 20px;

  :hover {
    cursor: pointer;
  }
`;

const SongList = styled.div`
  border: 1px solid #999;
  border-radius: 15px;
  font-size: 0.75em;
  overflow-y: scroll;
  height: 200px;
  padding: 0.5em;
  width: 80%;

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.darkGold};
    border-radius: 10px;
  }

  @media only screen and (min-width: 800px) {
    font-size: 1em;
    width: 400px;
  }
`;

export const Music = ({ addedSongs, addSong, backToHome, songs }) => {
  const [artist, setArtist] = useState("");
  const [name, setName] = useState("");
  return (
    <Container>
      <BackIcon
        className="fa fa-arrow-left"
        onClick={() => backToHome()}
      ></BackIcon>
      <h1>Music Requests</h1>
      {addedSongs?.length > 0 ? (
        <img
          src="https://media.giphy.com/media/e3c7wyesTP68w/giphy.gif"
          alt="Funny gif"
        />
      ) : (
        <>
          <p>What song will get you on the dancefloor?</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addSong({ artist, name });
            }}
          >
            <input
              onChange={({ target: { value } }) => setArtist(value)}
              placeholder="Artist"
              value={artist}
            />
            <input
              onChange={({ target: { value } }) => setName(value)}
              placeholder="Song Name"
              value={name}
            />
            <button type="submit">Add song</button>
          </form>
        </>
      )}
      <p>
        * Each guest can make 1 request. More requests are only available with
        sufficient bribery
      </p>

      <h3>Current Requests</h3>
      <SongList>
        <div className="list-container">
          {songs.map((song, index) => (
            <div key={`CURRENT_SONGS_${index}`}>
              {song.artist} - {song.name}
            </div>
          ))}
        </div>
      </SongList>
    </Container>
  );
};
