import React from 'react';
import Header from './ui/Header'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './ui/Theme'
import {BrowserRouter, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <Header/>  
        <Switch>
          <Route exact path="/" component={()=> <div>Home</div>}  />
          <Route exact path="/about" component={()=> <div>About</div>}  />
          <Route exact path="/join" component={()=> <div>Join</div>}  />
          <Route exact path="/dashboard" component={()=> <div>Dashboard</div>}  />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
