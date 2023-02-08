import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import SignUpPage from './components/UserAuthModal/SignUpPage/SignUpPage';
import LoginFormPage from './components/UserAuthModal/LoginFormPage/LoginFormPage';
import Navigation from './components/Navigation/Navigation'

function App() {
  return (
    <>
      {/* <Navigation /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/login" component={LoginFormPage } />
      </Switch>
    </>
  );
}

export default App;
