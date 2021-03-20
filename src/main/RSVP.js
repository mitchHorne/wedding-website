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

  div {
    display: flex;
    justify-content: center;
  }
`;

const InputContainer = styled.div`
  align-items: center;
  margin-bottom: 0.5em;

  input {
    font-size: 1em;
    margin-left: 0.5em;
    padding: 10px;
    flex-grow: 1;
  }
`;

const BackIcon = styled.i`
  color: ${(props) => props.theme.colors.darkGold};
  left: 20px;
  position: fixed;
  top: 20px;

  :hover {
    cursor: pointer;
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
    <li key={`ASSOCIATION_${person.id}`}>
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

  return (
    <PlusOneContainer>
      <InputContainer>
        First Name
        <input
          onChange={(e) => changePlusOne(e.target.value, "firstname")}
          placeholder="First name"
          type="text"
          value={plusOne.firstname}
        />
      </InputContainer>
      <InputContainer>
        Last Name
        <input
          onChange={(e) => changePlusOne(e.target.value, "lastname")}
          placeholder="Last name"
          type="text"
          value={plusOne.lastname}
        />
      </InputContainer>
      {!plusOne.firstname || !plusOne.lastname ? (
        ""
      ) : (
        <div>
          <AttendingButton
            active={plusOne.coming}
            onClick={() => changePlusOne(true, "coming")}
          >
            Attending
          </AttendingButton>
          <AttendingButton
            active={!plusOne.coming}
            onClick={() => changePlusOne(false, "coming")}
          >
            Not Attending
          </AttendingButton>
        </div>
      )}
      {!plusOne.firstname || !plusOne.lastname ? (
        ""
      ) : (
        <div>
          *If you should change your plus one's first or last name, be sure to
          click the attending button again to update it
        </div>
      )}
    </PlusOneContainer>
  );
};

export class RSVP extends Component {
  constructor(props) {
    super(props);

    const { associates, self } = props;
    const { plusOne, responded, rsvp } = self;

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

  setAttending = async (coming) => {
    const { attend, self, unAttend } = this.props;

    if (coming) {
      const success = await attend(self.id);
      if (success)
        this.setState({
          ...this.state,
          attending: coming,
          attendingChange: true,
          responded: true,
        });
      return;
    }

    if (!coming) {
      const success = await unAttend(self.id);
      if (success)
        this.setState({
          ...this.state,
          attending: coming,
          attendingChange: true,
          responded: true,
        });
      return;
    }
  };

  changeAssociates = async (change) => {
    const { attend, unAttend } = this.props;
    const { id, coming } = change;
    const associates = this.state.associates.map((person) => {
      if (person.id !== id) return person;

      return { ...person, responded: true, rsvp: coming };
    });

    if (coming) {
      const success = await attend(id);
      if (success) this.setState({ ...this.state, associates });
      return;
    }

    if (!coming) {
      const success = await unAttend(id);
      if (success) this.setState({ ...this.state, associates });
      return;
    }
  };

  changePlusOne = async (value, changeType) => {
    const { self, setPlusOne } = this.props;
    const plusOne = { ...this.state.plusOne };
    plusOne[changeType] = value;

    if (changeType !== "coming")
      return this.setState({ ...this.state, plusOne });

    const success = await setPlusOne(self.id, plusOne);
    if (success) this.setState({ ...this.state, plusOne });
  };

  render() {
    const { backToHome, self } = this.props;
    const { firstName, lastName } = self;
    const { associates, attending, plusOne, responded } = this.state;

    return (
      <Container>
        <BackIcon
          className="fa fa-arrow-left"
          onClick={() => backToHome()}
        ></BackIcon>
        <h1 style={{ marginBottom: 0 }}>
          Hello {firstName} {lastName}
        </h1>

        {renderHelloMessage(responded, attending, plusOne)}
        {renderAttending(attending, responded, this.setAttending)}

        {plusOne ? (
          <p>Please indicate whether you will be bringing a +1</p>
        ) : (
          ""
        )}
        {renderPlusOne(plusOne, this.changePlusOne)}

        {associates.length ? (
          <p>Feel free to respond for your household as well</p>
        ) : (
          ""
        )}
        {renderAssociates(associates, this.changeAssociates)}
      </Container>
    );
  }
}
