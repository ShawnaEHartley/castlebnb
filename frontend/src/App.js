import { Route, Switch } from 'react-router-dom';

import SplashPage from './components/SplashPage/SplashPage.js';
import ListingShow from './components/ListingShow/ListingShow';
import ConfirmationPage from './components/ReservationForm/ConfirmationPage';
import MapPage from './components/MapPage/MapPage';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route exact path="/listings/:listingId" component={ListingShow} />
        <Route exact path="/reservations/:reservationId/confirmation" component={ConfirmationPage} />
        <Route exact path="/map" component={MapPage} />
      </Switch>
    </>
  );
}

export default App;
