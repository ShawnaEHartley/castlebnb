import ListingIndex from "../ListingIndex/ListingIndex";
import NavBar from "../NavBar/NavBar";
import './SplashPage.css'

const SplashPage = () => {

  return (
    <>
      <div className='splash-page-wrapper'>
        <NavBar />
        <ListingIndex />
      </div>
    </>
  )
}

export default SplashPage;