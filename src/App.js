import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavHeader from './components/Controls/NavHeader';
import Admin from './views/Admin/DogForm';
import Home from './views/Home/DogList';
import DogDetail from './views/Home/DogDetail';


function App() {
  return (
    <BrowserRouter>
      <NavHeader />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/dogs/:id" >
            <DogDetail />
          </Route>
          <Route exact path="/dogs/admin">
            <Admin />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
