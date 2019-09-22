import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomeView from "./views/HomeView";
import HotelsView from "./views/HotelsView";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={HomeView}/>
        <Route exact path="/hotels" component={HotelsView}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
