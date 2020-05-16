import React from 'react';
import LocationPicker from 'react-leaflet-location-picker';
import { Map, Popup, TileLayer, Marker, Circle } from 'react-leaflet';

const Mapp = (props) => {
  const pointVals = [
    // [59.3293, 18.0686],
  ];
  const pointMode = {
    banner: true,
    control: {
      values: pointVals,
      onClick: (point) => {
        props.onChange(point);
        console.log("I've just been clicked on the map!", point);
      },
      onRemove: (point) =>
        console.log("I've just been clicked for removal :(", point),
        
    },
    
  };
  const circleMode = {
    banner: false,
  };

  const IViewport = {
    center: [59.3293, 18.0686],
    zoom: 12,
  };

  

  return (
    <LocationPicker
      startPort={IViewport}
      pointMode={pointMode}
      circleMode={circleMode} />
  );
};

export default Mapp;
