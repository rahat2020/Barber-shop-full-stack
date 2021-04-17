import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import { createContext, useState } from 'react';
import MakeOrder from './components/MakeOrder/MakeOrder/MakeOrder';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Admin from './components/Admin/Admin/Admin';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Checkout from './components/MakeOrder/Chcekout/Checkout';
import AddReview from './components/MakeOrder/AddReview/AddReview';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
              <Login/>
          </Route>
          <PrivateRoute path="/order/:_id">
              <MakeOrder/>
          </PrivateRoute>
          <PrivateRoute path="/checkout/:_id">
              <Checkout/>
          </PrivateRoute>
          <Route path="/addReview">
            <AddReview/>
          </Route>
          <PrivateRoute path="/admin">
            <Admin/>
          </PrivateRoute>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
