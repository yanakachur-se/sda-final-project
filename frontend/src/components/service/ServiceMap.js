import * as React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function ServiceMap(props) {
  const [latitude, setLatitude] = React.useState('');
  const [longitude, setLongitude] = React.useState('');

  React.useEffect(() => {
    const L = require('leaflet');

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    });
  }, []);

  const handleClick = (event) => {
    // console.log(event.latlng);
    props.onChange(event)
    setLatitude(event.latlng.lat);
    setLongitude(event.latlng.lng);
  };
  return (
    <Map
      center={[59.3293, 18.0686]}
      zoom={13}
      style={{ height: '100vh' }}
      onClick={handleClick}
      >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={[latitude, longitude]}>
        <Popup>
          {'Latitude: ' + Number(latitude).toFixed(4)} <br />
          {'Longitude: ' + Number(longitude).toFixed(4)}
        </Popup>
      </Marker>
    </Map>
  );
}
export default ServiceMap;
