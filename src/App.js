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
import AddAdmin from './components/Admin/AddAdmin/AddAdmin';
import AddServices from './components/Admin/AddServices/AddServices';
import ManageInventory from './components/Admin/ManageInventory/ManageInventory';
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
          <Route path="/addAdmin">
            <AddAdmin/>
          </Route>
          <Route path="/addServices">
            <AddServices/>
          </Route>
          <Route path="/manage">
            <ManageInventory/>
          </Route>
          {/* <PrivateRoute path="/admin">
            <Admin/>
          </PrivateRoute> */}
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
