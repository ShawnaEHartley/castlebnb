import { Wrapper } from '@googlemaps/react-wrapper';
import { useEffect, useRef, useState } from 'react';
import './Map.css';

const Map = ({listings, mapOptions = {}, mapEventHandlers = {}, markerEventHandlers = {}}) => {
  const [map, setMap] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!map) {
      setMap(new window.google.maps.Map(mapRef.current, {
        center: {
          lat: 52.7901,
          lng: -0.1557
        },
        zoom: 13,
        ...mapOptions
      }))
    }
  }, [mapRef, map, mapOptions])

  return (
    <div ref={mapRef} className='map' >Map</div>
  )
};

const MapWrapper = (props) => {

  return (
    <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY}>
      <Map {...props} />
    </Wrapper>
  )
};

export default MapWrapper;