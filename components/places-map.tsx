import React from "react";
import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { GiTruck } from "react-icons/gi";

// https://alex3165.github.io/react-mapbox-gl/demos
const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiZG90YW5zaW1oYSIsImEiOiJja3Jyc2F1Ym0xNnBmMm5td3drZWxjamltIn0.RQCUX6Eq7qP72EsQH6_WTg",
});

const icon = new Image(50, 50);
icon.src = "/assets/icon-marker.png";

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
      <Marker coordinates={[34.84455730231234, 32.06210893248879]}>
        <GiTruck size={40} color="red" />
      </Marker>
      <Marker coordinates={[34.994557301312, 32.16110193247879]}>
        <GiTruck size={40} color="blue" />
      </Marker>
    </Map>
  );
}
