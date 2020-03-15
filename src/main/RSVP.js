import React from "react";
import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 2em;

  ${props => props.theme.fonts.primary}

  p {
    padding: 0.5em 2em;
    text-align: center;
    width: 50%;
  }
`;

const renderHelloMessage = (responded, rsvp, plusOne) => {
  const hasPlusOne = plusOne ? " (and your plus one)" : "";

  if (!responded)
    return (
      <p>
        Welcome to the RSVP portal. Please comfirm whether you{hasPlusOne} will
        be attending our awesome wedding, or alternatively avoiding all social
        events due to Covid-19{" "}
        <span role="img" aria-label="Sick">
          😷
        </span>
      </p>
    );

  if (responded && !rsvp)
    return (
      <p>
        I see you have stated that you are not coming, but clearly you are
        conflicted as you are still hanging around on the RSVP portal{" "}
        <span role="img" aria-label="Sick">
          😕
        </span>
        . It's easy - Clearly you want to join us
        <span role="img" aria-label="Sick">
          🎉🎉🎉
        </span>
      </p>
    );

  if (responded && rsvp)
    return (
      <p>
        You have made the right choice. In fact I would venture that you have
        made the <b>BEST</b> choice you will make all year! See you at the
        wedding{" "}
        <span role="img" aria-label="Sick">
          🤘🎉🎉🎉🤘
        </span>
      </p>
    );
};

export const RSVP = ({ associates, backToHome, self }) => {
  console.log(associates);
  console.log(self);

  const { firstName, lastName, plusOne, responded, rsvp } = self;

  return (
    <Container>
      <h1>
        Hello {firstName} {lastName}
      </h1>

      {renderHelloMessage(responded, rsvp, plusOne)}
    </Container>
  );
};
