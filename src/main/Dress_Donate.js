import React from "react";
import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  background: #eee;
  box-shadow: 0 0 15px #333;
  display: flex;
  flex-direction: column;
  padding: 1rem 0rem 2rem;

  @media only screen and (min-width: 800px) {
    font-size: 2rem;
    padding: 1rem 2rem 2rem;
  }

  h1 {
    color: ${(props) => props.theme.colors.darkGold};
    font-size: 3rem;
    margin: 0;

    ${(props) => props.theme.fonts.accent};

    @media only screen and (min-width: 800px) {
      font-size: 3em;
    }
  }

  h2 {
    color: ${(props) => props.theme.colors.darkGold};
    font-size: 2rem;
    margin: 0;

    ${(props) => props.theme.fonts.accent};

    @media only screen and (min-width: 800px) {
      font-size: 2em;
    }
  }

  p {
    margin: 0;
    margin-bottom: 0.5em;
    text-align: center;
  }
`;

export const Other = () => (
  <Container>
    <h1>Other Arrangements</h1>
    <h2>Dress Code</h2>
    <p>Formal. All Black.</p>
    <p>The Bride wants to bring Goth back</p>
    <h2>Gifts</h2>
    <p>Love us and want to shower us with a gifts?</p>
    <p>Donate towards our honeymoon plans (That s**t ain't cheap)</p>
    <p>Despise us and coming to our wedding just for the food?</p>
    <p>
      No problem! Donate towards ouor honeymoon and send us far away from you!
    </p>
  </Container>
);
