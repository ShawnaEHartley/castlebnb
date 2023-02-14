import { useHistory, Link } from 'react-router-dom';
import image from '../../assets/images/image-coming-soon.png'


const ListingIndexItem = ({listing}) => {

  // const history = useHistory()
  // const clickItem = () => {
  //   history.push(`/listings/${listing.id}`)
  // };
  
  console.log({listing});
  return (
    <div className='index-item'>
    <Link to={`/listings/${listing.id}`}>
      <img className='index-image' src={listing.photoUrl} alt='Default'></img>
      <h1 className='index-header'>{listing.city}, {listing.region}</h1>
      <p className='info-line-1'>{listing.subtitle}</p>
      <p className='index-price'>$ {listing.price} night</p>
    </Link>
  </div>
  )

};

export default ListingIndexItem