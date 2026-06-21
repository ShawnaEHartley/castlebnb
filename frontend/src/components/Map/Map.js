import { Wrapper } from '@googlemaps/react-wrapper';
import { useEffect, useRef } from 'react';
import './Map.css';

const API_KEY = process.env.REACT_APP_MAPS_API_KEY;

function MyMapComponent({ center, title }) {
  const ref = useRef(null);
  const zoom = 6;

  useEffect(() => {
    if (!window.google) return;
    const myMap = new window.google.maps.Map(ref.current, { center, zoom });
    new window.google.maps.Marker({ position: center, map: myMap, title });
  }, [center, zoom, title]);

  return <div ref={ref} id="map" />;
}

const NoMapFallback = ({ center }) => (
  <div id="map" style={{
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: '#f0ede8', color: '#9BA4A8', fontSize: '0.85rem',
    fontFamily: 'monospace', borderRadius: '12px',
  }}>
    {center ? `${center.lat.toFixed(2)}°N, ${Math.abs(center.lng).toFixed(2)}°W` : 'Map unavailable'}
  </div>
);

const MapWrapper = (props) => {
  if (!API_KEY) return <NoMapFallback {...props} />;

  return (
    <Wrapper apiKey={API_KEY}>
      <MyMapComponent {...props} />
    </Wrapper>
  );
};

export default MapWrapper;
