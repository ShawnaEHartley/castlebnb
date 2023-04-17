import { Wrapper } from '@googlemaps/react-wrapper';

import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { fetchListings, getListings } from '../../store/listings';
import NavBar from '../NavBar/NavBar';

import list from '../../assets/images/icons8-bullet-list-90.png';
import './MapPage.css';

function MyMapComponent() {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const listings = useSelector(getListings);
  const history = useHistory();

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

      const title = listing["title"]
      
      const marker = new window.google.maps.Marker({
        position: center,
        map: myMap,
        title: title,
        optimized: false
      }, [center, zoom, title]);
      marker.addListener("click", () => {
        history.push(`/listings/${listing.id}`)
      })
    }
  })
  return <div ref={ref} id='mappage' />;
};

const MapWrapper = (props) => {
  const history = useHistory();

  const openList = () => {
    history.push('/')
  }

  return (
  <>
    <NavBar />
    <div className='map-page-wrapper'>
      <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY} >
        <MyMapComponent { ...props } />
      </Wrapper>
      <button className='show-map-button' onClick={openList}> Show List <img src={list} alt='list'></img></button>
    </div>
  </>
  )
};

export default MapWrapper;