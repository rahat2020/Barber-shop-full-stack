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

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="App">
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
            
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
