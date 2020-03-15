import React from "react";
import styled from "styled-components";

const Contaienr = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  padding: 1rem 0 3em;

  h1 {
    color: ${props => props.theme.colors.darkGold};
    font-size: 3rem;
    margin: 0 0 1rem;

    ${props => props.theme.fonts.accent};

    @media only screen and (min-width: 800px) {
      font-size: 3em;
    }
  }
`;

const MapContainer = styled.div`
  width: 100%;

  @media only screen and (min-width: 800px) {
    width: 50%;
  }
`;

const IFrame = () => (
  <MapContainer>
    <iframe
      frameBorder="0"
      height="600"
      marginHeight="0"
      marginWidth="0"
      scrolling="no"
      src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Pont%20de%20val+(Pont%20de%20Val)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
      title="Map"
      width="100%"
    ></iframe>
  </MapContainer>
);

export const Map = () => {
  return (
    <Contaienr>
      <h1>Where?</h1>
      <IFrame />
    </Contaienr>
  );
};
