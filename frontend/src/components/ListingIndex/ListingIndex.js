import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ListingIndexItem from './ListingIndexItem.js';

import { fetchListings, getListings } from '../../store/listings';

import map from '../../assets/images/icons8-map-32.png';
import './ListingIndex.css'
import { useHistory } from 'react-router-dom';

const ListingIndex = () => {
  const dispatch = useDispatch();
  const listings = useSelector(getListings);
  const history = useHistory();

  useEffect(()=> {
    dispatch(fetchListings())
  }, [dispatch])

  if (!listings) {
    return (
      <div>..loading</div>
    )
  };

  const openMap = () => {
    history.push('/map')
  }

  return (
    <div className='index-wrapper'>
      <div className="index">
        {listings.map((listing) => {
          return (
            listing ? <ListingIndexItem listing={listing} key={listing.id} /> : 'loading'
          )
        })}
      </div>
      <button className='show-map-button' onClick={openMap}> Show Map <img src={map} alt='map'></img></button>
    </div>
  )
}

export default ListingIndex;