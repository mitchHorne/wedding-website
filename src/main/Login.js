import React from "react";
import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  background: rgba(200, 200, 200, 0.9);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 4;
`;

const Modal = styled.div`
  align-items: center;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 1rem 5rem;
  width: 75%;

  @media only screen and (min-width: 800px) {
    width: 30%;
  }
`;

const TextBox = styled.input`
  border: 0;
  border-bottom: 1px solid #000;
  font-size: 1.5rem;
  text-align: center;
  transition: 0.3s;
  width: 5rem;

  :hover {
    border-bottom: 1px solid ${(props) => props.theme.colors.darkGold};
  }

  :focus {
    border-bottom: 1px solid ${(props) => props.theme.colors.darkGold};
    outline: none;
  }
`;

export const Login = (props) => (
  <Container>
    <Modal>
      <h1>Enter your Pin</h1>
      <TextBox
        onChange={props.handleChange}
        placeholder="PIN"
        value={props.value}
      />
    </Modal>
  </Container>
);
