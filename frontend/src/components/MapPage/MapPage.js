import { Wrapper } from '@googlemaps/react-wrapper';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListings, getListings } from '../../store/listings';

import './MapPage.css';

function MyMapComponent() {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const listings = useSelector(getListings);

  useEffect(()=>{
    dispatch(fetchListings())
  }, [dispatch])

  const center = {lat: 0.531464e2, lng: 0.3379e0};
  const zoom = 6

  useEffect(()=> {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  })

  console.log(listings)

  return <div ref={ref} id='mappage' />;
};

const MapWrapper = (props) => {

  return (
    <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY} >
      <MyMapComponent { ...props } />
    </Wrapper>
  )
};

export default MapWrapper;