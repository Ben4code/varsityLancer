import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './ui/Theme'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './ui/Header'
import Footer from './Home/Footer'
import Home from './Home/Home'
import SignIn from './Auth/SignIn'
import SignUp from './Auth/SignUp'
import Dashboard from './Dashboard/Dashboard'


function App() {
  return (
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}  />
          <Route exact path="/about" component={()=> <div>About</div>}  />
          <Route exact path="/join" component={()=> <div>Join</div>}  />
          <Route exact path="/as-dev" component={SignUp}/>
          <Route exact path="/as-client" component={SignIn}/>
          <Route exact path="/dashboard" component={Dashboard}  />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
