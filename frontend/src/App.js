import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import SplashPage from './components/SplashPage/SplashPage.js';
import SignUpPage from './components/UserAuthModal/SignUpPage';
import LoginFormPage from './components/UserAuthModal/LoginFormPage';

function App() {
  return (
    <>
      {/* <Navigation /> */}
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/login" component={LoginFormPage } />
      </Switch>
    </>
  );
}

export default App;
