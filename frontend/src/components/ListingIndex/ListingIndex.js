import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ListingIndexItem from './ListingIndexItem.js';

import { fetchListings, getListings } from '../../store/listings';


import './ListingIndex.css'


const ListingIndex = () => {
  const dispatch = useDispatch();
  const listings = useSelector(getListings);

  useEffect(()=> {
    dispatch(fetchListings())
  }, [dispatch])

  if (!listings) {
    return (
      <div>..loading</div>
    )
  };

  console.log(listings)

  return (
    <div className="index">
      {listings.map((listing) => {
        return (
          listing ? <ListingIndexItem listing={listing} key={listing.id} /> : 'loading'
        )
      })}
    </div>
  )
}

export default ListingIndex;