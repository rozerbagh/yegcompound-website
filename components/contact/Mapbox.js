import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1Ijoicm96ZXJiYWdoIiwiYSI6ImNsZW4wbnJqMDFhamszb3BnZTBpemtqMWwifQ.xB6GvhTxbIi1UP4qLmGYBA",
});

const MapBox = () => {
  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "50vh",
        // width: "100vw",
      }}
    >
      <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
        <Feature coordinates={[51.03792000000000001, -113.99153700000000001]} />
      </Layer>
    </Map>
  );
};

export default MapBox;
`-0.13235092163085938,51.518250335096376`;
