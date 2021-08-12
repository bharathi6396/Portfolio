import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Knowledges from './pages/Knowledges';
import Portfolio from './pages/Portfolio';
import Notfoound from './pages/Notfoound';
const App = () => { 
    return (
        <>
          <BrowserRouter>
          <Switch>
          <Route path= "/" exact component={Home} />
          <Route path= "/knowledges" component={Knowledges} />
          <Route path= "/contact" component={Contact} />
          <Route path= "/portfolio" component={Portfolio} />
          <Route path = "*" component={Notfoound} />
          </Switch>
          </BrowserRouter>  
           
        </>
    );
};
export default App;


