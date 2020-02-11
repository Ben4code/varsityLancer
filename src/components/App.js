import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './ui/Theme'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './ui/Header'
import Home from './Home/Home'


function App() {
  return (
    <ThemeProvider theme={theme} >
      
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}  />
          <Route exact path="/about" component={()=> <div>About</div>}  />
          <Route exact path="/join" component={()=> <div>Join</div>}  />
          <Route exact path="/dev-signup" component={()=> <div>Developer Sign Up Page</div>}  />
          <Route exact path="/client-signup" component={()=> <div>Client Sign Up Page</div>}  />
          <Route exact path="/dashboard" component={()=> <div>Dashboard</div>}  />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
