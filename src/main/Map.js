import React from "react";
import styled from "styled-components";

const Contaienr = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  padding: 1rem 0 3em;
  width: 100%;

  i {
    color: ${(props) => props.theme.colors.darkGold};
    margin-right: 1rem;
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

  a {
    transition: 0.2s all;

    h2 {
      margin: 0 0 1rem;

      ${(props) => props.theme.fonts.accent};
    }

    :hover {
      color: ${(props) => props.theme.colors.darkGold};
    }
  }

  div {
    h2 {
      color: ${(props) => props.theme.colors.darkGold};
      margin: 2rem 0 1rem;
      text-align: center;

      ${(props) => props.theme.fonts.accent};
    }
  }
`;

const MapContainer = styled.div`
  width: 100%;

  @media only screen and (min-width: 800px) {
    width: 50%;
  }
`;

// const AccomodationContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
// `;

// const Accomodation = styled.div`
//   align-items: space-around;
//   display: flex;
//   flex-direction: column;
//   padding: 0 3rem;

//   @media only screen and (min-width: 800px) {
//     flex-direction: row;
//   }

//   div {
//     display: flex;
//     flex-direction: column;
//     flex-grow: 1;

//     p {
//       margin: 0;
//     }
//   }
// `;

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
      <a href="https://www.pontdeval.co.za/">
        <h2>Pont de Val</h2>
      </a>
      <div>
        <p>
          <i className="fa fa-map-marker fa-fw"></i>
          Address: 212 Boundary Rd, Cote de Val, Parys
        </p>
        <p>
          <i className="fa fa-phone fa-fw"></i>
          Contact: 016 004 0019
        </p>
      </div>
      <IFrame />
      {/* <AccomodationContainer>
        <h2>Accomodation near Pont de Val</h2>
        <Accomodation>
          <div>
            <p>
              <i className="fa fa-hotel fa-fw"></i>
              Vender 1
            </p>
            <p>
              <i className="fa fa-map-marker fa-fw"></i>
              Address thing
            </p>
            <p>
              <i className="fa fa-road fa-fw"></i>
              Distance: 10km Away
            </p>
            <p>
              <i className="fa fa-globe fa-fw"></i>
              Link to place
            </p>
          </div>
          <div>
            <p>
              <i className="fa fa-hotel fa-fw"></i>
              Vender 1
            </p>
            <p>
              <i className="fa fa-map-marker fa-fw"></i>
              Address thing
            </p>
            <p>
              <i className="fa fa-road fa-fw"></i>
              Distance: 10km Away
            </p>
            <p>
              <i className="fa fa-globe fa-fw"></i>
              Link to place
            </p>
          </div>
          <div>
            <p>
              <i className="fa fa-hotel fa-fw"></i>
              Vender 1
            </p>
            <p>
              <i className="fa fa-map-marker fa-fw"></i>
              Address thing
            </p>
            <p>
              <i className="fa fa-road fa-fw"></i>
              Distance: 10km Away
            </p>
            <p>
              <i className="fa fa-globe fa-fw"></i>
              Link to place
            </p>
          </div>
        </Accomodation>
      </AccomodationContainer> */}
    </Contaienr>
  );
};
