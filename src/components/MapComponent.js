import { withScriptjs, withGoogleMap, GoogleMap, Marker, } from "react-google-maps";
import React from 'react';
  
const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 53.505, lng: -2.329 }}
    >
      <Marker
        position={{ lat: 53.505, lng: -2.329 }}
      />
    </GoogleMap>
  ));
  
  export default MapWithAMarker;