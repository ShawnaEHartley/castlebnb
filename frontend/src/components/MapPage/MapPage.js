import { Wrapper } from '@googlemaps/react-wrapper';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { fetchListings, getListings } from '../../store/listings';
import NavBar from '../NavBar/NavBar';
import list from '../../assets/images/icons8-bullet-list-90.png';
import './MapPage.css';

const API_KEY = process.env.REACT_APP_MAPS_API_KEY;

function MyMapComponent() {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const listings = useSelector(getListings);
  const history = useHistory();

  useEffect(() => { dispatch(fetchListings()) }, [dispatch]);

  const center = { lat: 53.1464, lng: 0.3379 };
  const zoom = 6;

  useEffect(() => {
    if (!window.google || !ref.current) return;
    const myMap = new window.google.maps.Map(ref.current, { center, zoom });
    listings.forEach(listing => {
      const pos = { lat: parseInt(listing.latitude), lng: parseInt(listing.longitude) };
      const marker = new window.google.maps.Marker({
        position: pos, map: myMap, title: listing.title, optimized: false,
      });
      marker.addListener('click', () => history.push(`/listings/${listing.id}`));
    });
  });

  return <div ref={ref} id='mappage' />;
}

const NoMapFallback = ({ listings, onBack }) => (
  <div id='mappage' style={{
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    justifyContent: 'center', gap: 12, background: '#f0ede8',
    color: '#4F5B61', fontFamily: 'monospace', fontSize: '0.85rem',
  }}>
    <div>Map unavailable — no API key configured.</div>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', maxWidth: 480 }}>
      {listings.map(l => (
        <button key={l.id} onClick={() => onBack(l.id)} style={{
          background: '#1B2327', color: '#F6F7F7', border: 'none',
          borderRadius: 6, padding: '6px 12px', cursor: 'pointer', fontSize: '0.8rem',
        }}>{l.title}</button>
      ))}
    </div>
  </div>
);

const MapPage = () => {
  const history = useHistory();
  const listings = useSelector(getListings);

  return (
    <>
      <NavBar />
      <div className='map-page-wrapper'>
        {API_KEY ? (
          <Wrapper apiKey={API_KEY}>
            <MyMapComponent />
          </Wrapper>
        ) : (
          <NoMapFallback listings={listings} onBack={(id) => history.push(`/listings/${id}`)} />
        )}
        <button className='show-map-button' onClick={() => history.push('/')}>
          Show List <img src={list} alt='list' />
        </button>
      </div>
    </>
  );
};

export default MapPage;
