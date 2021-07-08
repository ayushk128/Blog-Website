import { Box } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import React from 'react';
import Header from "./components/Header";
import Home from './components/home/Home';
import DetailView from './components/post/DetailView';
import CreateView from './components/post/CreateView';
import UpdateView from './components/post/UpdateView';


function App() {
  return (
    // If we use div or any other element in place of React.Fragment then it will be visible in the inspect but React.Framgent is not visible.
    <BrowserRouter>
      <Header />
      <Box style={{ marginTop: 64 }}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/details/:id' component={DetailView} />
          <Route exact path='/create' component={CreateView} />
          <Route exact path='/update/:id' component={UpdateView} />
        </Switch>
      </Box>
    </BrowserRouter>
  );
}

export default App;
