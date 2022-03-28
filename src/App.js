import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavHeader from './components/Controls/NavHeader';
import DogForm from './views/Admin/DogForm';
import Home from './views/Home/DogList';
import DogDetail from './views/Home/DogDetail';
import NewPage from './views/Home/NewPage';


function App() {
  return (
    <BrowserRouter>
      <NavHeader />
      <div className="App">
        <Switch>
          <Route exact path="/dogs/admin">
            <DogForm />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/dogs/new">
            <NewPage />
          </Route>
          <Route exact path="/dogs/:id" >
            <DogDetail />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
