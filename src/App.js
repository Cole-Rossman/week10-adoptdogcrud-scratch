import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

import NavHeader from './components/Controls/NavHeader';
import Home from './views/Home/DogList';
import DogDetail from './views/Home/DogDetail';
import NewPage from './views/Home/NewPage';
import EditPage from './views/Home/EditPage';
import { getUser } from './services/users';
import Auth from './views/Auth';


function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  return (
    <BrowserRouter>
      <NavHeader currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/auth">
            <Auth setCurrentUser={setCurrentUser} />
          </Route>
          <Route exact path="/dogs/new">
            <NewPage />
          </Route>
          <Route exact path="/dogs/:id/edit">
            <EditPage />
          </Route>
          <Route exact path="/dogs/:id" >
            <DogDetail currentUser={currentUser} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
