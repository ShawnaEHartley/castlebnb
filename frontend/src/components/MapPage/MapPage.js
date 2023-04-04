import { Wrapper } from '@googlemaps/react-wrapper';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListings, getListings } from '../../store/listings';
import NavBar from '../NavBar/NavBar';

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
    const myMap = new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
    
    for (let i = 0; i < listings.length; i++) {
      const listing = listings[i];
      
      const lat = parseInt(listing["latitude"]);
      const long = parseInt(listing["longitude"]);
      const center = {lat: lat, lng: long};

      console.log(center)

      const title = listing["title"]
      
      new window.google.maps.Marker({
        position: center,
        map: myMap,
        title: title
      }, [center, zoom, title]);
    }
  })
  return <div ref={ref} id='mappage' />;
};

const MapWrapper = (props) => {

  return (

    <>
    <NavBar />
    <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY} >
      <MyMapComponent { ...props } />
    </Wrapper>
    </>
  )
};

export default MapWrapper;