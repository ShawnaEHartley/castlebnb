import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListings, getListings } from '../../store/listings';
import image from '../../assets/images/image-coming-soon.png'

import './ListingIndex.css'



const ListingIndex = () => {
  const dispatch = useDispatch();
  const listings = useSelector(getListings);

  useEffect(()=> {
    dispatch(fetchListings())
  }, [dispatch])

  console.log(listings)

  return (
    <div className="index">
      {listings.map((listing) => {
        return (
          <div className='index-item'>
            <img className='index-image'src={image} alt='Default'></img>
            <h1 className='index-header'>{listing.city}, {listing.region}</h1>
            <p className='info-line-1'>placeholder</p>
            <p className='info-line-2'>placeholder</p>
            <p className='index-price'>$ {listing.price} night</p>
          </div>
        )
      })}
    </div>
  )
}

export default ListingIndex;