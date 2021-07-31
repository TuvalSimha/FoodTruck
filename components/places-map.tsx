import React from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// https://alex3165.github.io/react-mapbox-gl/demos
const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiZG90YW5zaW1oYSIsImEiOiJja3Jyc2F1Ym0xNnBmMm5td3drZWxjamltIn0.RQCUX6Eq7qP72EsQH6_WTg",
});

export default function PlacesMap() {
  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      center={[34.84455730231234, 32.06210893248879]}
      zoom={[8]}
      containerStyle={{
        height: "100%",
        width: "100%",
      }}
    >
      <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
        <Feature coordinates={[34.84455730231234, 32.06210893248879]} />
      </Layer>
    </Map>
  );
}
