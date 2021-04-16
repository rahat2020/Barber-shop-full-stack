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
          <Route path="/order">
              <MakeOrder/>
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/admin">
            <Admin/>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
