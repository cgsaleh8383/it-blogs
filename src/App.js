import React from 'react';
import Navigation from './Components/Navigation';
import { BrowserRouter as Router, Switch, Route, Redirect}from 'react-router-dom'
import PageRender from './PageRender';

function App() {
  const user = {
    firstName: 'sajjat',
    lastName: 'hossain'
  }
  return (
    <Router>
      <div className="App">
      <Navigation user={user} />
      <Switch>
        <Route path="/:page" component={PageRender} />
        <Route path='/' render={() => <Redirect to="/home" />} />
        <Route component={() => 404}  />
      </Switch>
    </div> 
    </Router>
  );
}

export default App;
