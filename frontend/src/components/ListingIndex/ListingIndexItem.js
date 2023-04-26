import { useHistory } from "react-router-dom";


const ListingIndexItem = ({listing}) => {
  const history = useHistory();

  const openShow = (e) => {
    e.preventDefault();
    history.push(`/listings/${listing.id}`);
  }
  
  return (
    <div className='index-item'>
    <div onClick={openShow}>
      <img className='index-image' src={listing.photoUrl} alt='Default'></img>
      <h1 className='index-header'>{listing.city}, {listing.region}</h1>
      <p className='info-line-1'>{listing.subtitle}</p>
      <p className='index-price'>$ {listing.price} night</p>
    </div>
  </div>
  )

};

export default ListingIndexItem