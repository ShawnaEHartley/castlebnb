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

  return (
    <div className="index">
      {listings.map((listing) => {
        return (
          <ListingIndexItem listing={listing} />
        )
      })}
    </div>
  )
}

export default ListingIndex;