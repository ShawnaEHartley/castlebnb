import ListingIndex from "../ListingIndex/ListingIndex";
import NavBar from "../NavBar/NavBar";
import './SplashPage.css'

const SplashPage = () => {

  return (
    <>
      <NavBar />
      <div className='splash-page-wrapper'>
        <ListingIndex />
      </div>
    </>
  )
}

export default SplashPage;