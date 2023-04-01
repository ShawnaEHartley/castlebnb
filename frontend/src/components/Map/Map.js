import { Wrapper } from '@googlemaps/react-wrapper';
import { useEffect, useRef } from 'react';

import './Map.css';

function MyMapComponent({ center, title }) {
  const ref = useRef(null);
  const zoom = 6;

  useEffect(() => {
    const myMap = new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });

    new window.google.maps.Marker({
      position: center,
      map: myMap,
      title: title
    })
  }, [center, zoom, title]);
  return <div ref={ref} id="map" />;
}

const MapWrapper = (props) => {

  return (
    <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY}>
      <MyMapComponent {...props} />
    </Wrapper>
  )
};

export default MapWrapper;