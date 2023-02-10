import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListings, getListings } from '../../store/listings';



const ListingIndex = () => {
  const dispatch = useDispatch();
  const listings = useSelector(getListings);

  useEffect(()=> {
    dispatch(fetchListings())
  }, [dispatch])

  console.log(listings)

  return (
    <h3>This is the listing index</h3>

  )
}

export default ListingIndex;