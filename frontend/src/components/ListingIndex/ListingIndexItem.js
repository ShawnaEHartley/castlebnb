
const ListingIndexItem = ({listing}) => {
  
  return (
    <div className='index-item'>
    <a href={`/listings/${listing.id}`}>
      <img className='index-image' src={listing.photoUrl} alt='Default'></img>
      <h1 className='index-header'>{listing.city}, {listing.region}</h1>
      <p className='info-line-1'>{listing.subtitle}</p>
      <p className='index-price'>$ {listing.price} night</p>
    </a>
  </div>
  )

};

export default ListingIndexItem