import React, { useEffect, useState } from "react";
// import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap({ latitue }) {
  const [defaultProps, setDefaultProps] = useState({
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  });

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      if (position) {
        setDefaultProps((ps) => ({
          ...ps,
          center: {
            ...ps.center,
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
        }));
        // console.log({
        //   lat: position.coords.latitude,
        //   lng: position.coords.longitude,
        // });
      }
    });
  };
  useEffect(() => {
    handleLocation();
  }, []);

  const handleApiLoaded = (map, maps) => {
    // console.log(map, maps);
  };
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "50vh", width: "100%" }}>
      <GoogleMapReact
        // bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        <AnyReactComponent
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
// export class MapContainer extends Component {
//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={14}
//         style={mapStyles}
//         initialCenter={{
//           lat: -1.2884,
//           lng: 36.8233,
//         }}
//       />
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyDcOuFij8ydq4vGwIFEGE0P9qwad7OPDng",
// })(MapContainer);
