import React from 'react'
import { Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path={'/'} render={() => <Home />}/> 
        <Route path={'/cart'} render={() => <Cart/>}/> 
      </div>
    </div>
  );
}

export default App;
