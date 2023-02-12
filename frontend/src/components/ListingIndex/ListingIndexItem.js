import { useHistory } from 'react-router-dom';
import image from '../../assets/images/image-coming-soon.png'


const ListingIndexItem = ({listing}) => {

  const history = useHistory()
  const clickItem = () => {
    history.push(`/listings/${listing.id}`)
  };

  return (
    <div className='index-item' onClick={clickItem}>
      <img className='index-image'src={image} alt='Default'></img>
      <h1 className='index-header'>{listing.city}, {listing.region}</h1>
      <p className='info-line-1'>placeholder</p>
      <p className='info-line-2'>placeholder</p>
      <p className='index-price'>$ {listing.price} night</p>
  </div>
  )

};

export default ListingIndexItem