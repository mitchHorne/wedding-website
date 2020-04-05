import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 2em;

  ${(props) => props.theme.fonts.primary}

  p {
    padding: 0.5em 2em;
    text-align: center;
    width: 50%;
  }
`;

const AttendingButton = styled.button`
  background: ${(props) =>
    props.active ? props.theme.colors.darkGold : "white"};
  border: 2px solid ${(props) => props.theme.colors.darkGold};
  color: ${(props) => (props.active ? "white" : props.theme.colors.darkGold)};
  font-size: 1em;
  margin: 0.5em;
  padding: 0.5em;
  transition: 0.3s all;
  width: 232px;

  :hover {
    cursor: pointer;
  }
`;

const Associations = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 50%;

  h2 {
    margin: 0;
    text-align: center;
  }

  div {
    display: flex;
    justify-content: center;
  }
`;

const PlusOneContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1em;
  width: 50%;

  input {
    font-size: 1em;
    margin-bottom: 0.5em;
    padding: 10px;
    width: 100%;
  }

  div {
    display: flex;
    justify-content: center;
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
        <span role="img" aria-label="confused">
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
        <span role="img" aria-label="Cheerful">
          🤘🎉🎉🎉🤘
        </span>
      </p>
    );
};

const renderAttending = (attending, responded, setAttending) => (
  <div>
    <AttendingButton active={attending} onClick={() => setAttending(true)}>
      Attending
    </AttendingButton>
    <AttendingButton
      active={responded && !attending}
      onClick={() => setAttending(false)}
    >
      Not Attending
    </AttendingButton>
  </div>
);

const renderAssociates = (associates, changeAssociates) => {
  const persons = associates.map((person) => (
    <li>
      <h2>
        {person.firstName} {person.lastName}
      </h2>
      <div>
        <AttendingButton
          active={person.rsvp}
          onClick={() => changeAssociates({ id: person.id, coming: true })}
        >
          Attending
        </AttendingButton>
        <AttendingButton
          active={person.responded && !person.rsvp}
          onClick={() => changeAssociates({ id: person.id, coming: false })}
        >
          Not Attending
        </AttendingButton>
      </div>
    </li>
  ));

  return <Associations>{persons}</Associations>;
};

const renderPlusOne = (plusOne, changePlusOne) => {
  if (!plusOne) return;

  if (!plusOne.firstName || !plusOne.lastName)
    return (
      <PlusOneContainer>
        <input
          onChange={(e) => changePlusOne(e.target.value, "firstName")}
          placeholder="First name"
          type="text"
          value={plusOne.firstName}
        />
        <input
          onChange={(e) => changePlusOne(e.target.value, "lastName")}
          placeholder="Last name"
          type="text"
          value={plusOne.lastName}
        />
      </PlusOneContainer>
    );

  return (
    <PlusOneContainer>
      <input
        onChange={(e) => changePlusOne(e.target.value, "firstName")}
        placeholder="First name"
        type="text"
        value={plusOne.firstName}
      />
      <input
        onChange={(e) => changePlusOne(e.target.value, "lastName")}
        placeholder="Last name"
        type="text"
        value={plusOne.lastName}
      />
      <div>
        <AttendingButton
          active={plusOne.coming}
          onClick={() => changePlusOne(!plusOne.coming, "coming")}
        >
          {plusOne.coming ? "Attending" : "Not Attending"}
        </AttendingButton>
      </div>
    </PlusOneContainer>
  );
};

export class RSVP extends Component {
  constructor(props) {
    super(props);

    const { associates, self } = props;
    const { plusOne, responded, rsvp } = self;

    console.log(associates);
    console.log(self);

    this.state = {
      associates,
      attending: rsvp,
      attendingChange: false,
      plusOne,
      plusOneChange: false,
      responded,
      respondedChange: false,
    };
  }

  setAttending = (coming) =>
    this.setState({
      ...this.state,
      attending: coming,
      attendingChange: true,
      responded: true,
    });

  changeAssociates = (change) => {
    const { id, coming } = change;
    const associates = this.state.associates.map((person) => {
      if (person.id !== id) return person;

      return { ...person, responded: true, rsvp: coming };
    });

    this.setState({ ...this.state, associates });
  };

  changePlusOne = (value, changeType) => {
    const plusOne = { ...this.state.plusOne };
    plusOne[changeType] = value;
    this.setState({ ...this.state, plusOne });
  };

  render() {
    const { firstName, lastName } = this.props.self;
    const { associates, attending, plusOne, responded } = this.state;

    return (
      <Container>
        <h1 style={{ marginBottom: 0 }}>
          Hello {firstName} {lastName}
        </h1>

        {renderHelloMessage(responded, attending, plusOne)}
        {renderAttending(attending, responded, this.setAttending)}

        {associates.length ? (
          <p>Feel free to respond for your household as well</p>
        ) : (
          ""
        )}
        {renderAssociates(associates, this.changeAssociates)}

        {plusOne ? (
          <p>Please indicate whether you will be bringing a +1</p>
        ) : (
          ""
        )}
        {renderPlusOne(plusOne, this.changePlusOne)}
      </Container>
    );
  }
}
