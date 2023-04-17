import { Route, Switch } from 'react-router-dom';

import SplashPage from './components/SplashPage/SplashPage.js';
import ListingShow from './components/ListingShow/ListingShow';
import ConfirmationPage from './components/ReservationForm/ConfirmationPage';
import MapPage from './components/MapPage/MapPage';
import AccountPage from './components/AccountPage/AccountPage.js';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route exact path="/listings/:listingId" component={ListingShow} />
        <Route exact path="/reservations/:reservationId/confirmation" component={ConfirmationPage} />
        <Route exact path="/map" component={MapPage} />
        <Route exact path="/account/:userId" component={AccountPage} />
      </Switch>
    </>
  );
}

export default App;
