import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import SignIn from './Views/SignIn';
import SignUp from './Views/SignUp';
import Home from './Views/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink to="/signin">Sign In</NavLink>
          <NavLink to="/signup">Sign In</NavLink>
        </header>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/signin" exact>
            <SignIn />
          </Route>
          <Route path="/signup" exact>
            <SignUp />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
