import React from "react";
import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 3;
`;

const Icon = styled.div`
  .lds-heart {
    display: inline-block;
    position: relative;
    width: 100px;
    height: 100px;
    transform: rotate(45deg);
    transform-origin: 40px 40px;

    div {
      top: 0px;
      left: 0px;
      position: absolute;
      width: 85px;
      height: 85px;
      background: ${props => props.theme.colors.darkGold};
      animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    div:after,
    div:before {
      content: " ";
      position: absolute;
      display: block;
      width: 85px;
      height: 85px;
      background: ${props => props.theme.colors.darkGold};
    }

    div:before {
      left: -50px;
      border-radius: 50% 0 0 50%;
    }

    div:after {
      top: -50px;
      border-radius: 50% 50% 0 0;
    }
  }

  @keyframes lds-heart {
    0% {
      transform: scale(0.95);
    }
    5% {
      transform: scale(1.1);
    }
    39% {
      transform: scale(0.85);
    }
    45% {
      transform: scale(1);
    }
    60% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(0.9);
    }
  }
`;
export const Loading = () => (
  <Container>
    <Icon>
      <div className="lds-heart">
        <div />
      </div>
    </Icon>
  </Container>
);
