import { useHistory } from "react-router-dom";
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material'


const ListingIndexItem = ({listing}) => {
  const history = useHistory();

  const openShow = (e) => {
    e.preventDefault();
    history.push(`/listings/${listing.id}`);
  }

  // create an array of all photoUrl's for each listing
  
  return (
    <div className='index-item'>
    <div onClick={openShow}>
      <Carousel className='index-image-carousel' autoPlay={false} indicators={true} > 
        { listing.photoUrl.map ((photo) => <Paper> <img className='index-image' src={photo} alt='Default'></img> </Paper> )}
      </Carousel>
      {/* <img className='index-image' src={listing.photoUrl} alt='Default'></img> */}
      <h1 className='index-header'>{listing.city}, {listing.region}</h1>
      <p className='info-line-1'>{listing.subtitle}</p>
      <p className='index-price'>$ {listing.price} night</p>
    </div>
  </div>
  )



};

export default ListingIndexItem