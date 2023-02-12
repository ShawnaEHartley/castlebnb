import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import SplashPage from './components/SplashPage/SplashPage.js';
import SignUpPage from './components/UserAuthModal/SignUpPage';
import LoginFormPage from './components/UserAuthModal/LoginFormPage';
import ListingShow from './components/ListingShow/ListingShow';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route exact path="/listings/:listingId" component={ListingShow} />
      </Switch>
    </>
  );
}

export default App;
