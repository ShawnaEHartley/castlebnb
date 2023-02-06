import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import SignUp from './components/SignUpPage/SignUpPage';
import Login from './components/LoginFormPage/LoginFormPage';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </>
  );
}

export default App;
