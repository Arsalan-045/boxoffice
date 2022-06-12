import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import Show from "./pages/Show";
import {ThemeProvider} from 'styled-components';

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

function App() {
  return (
    
    <ThemeProvider theme={theme}>

    <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/starred">
          <Starred />
        </Route>

        <Route exact path="/show/:id">
        <Show />
       </Route>

        <Route>
          <div>Did not found 404</div>
        </Route>
      </Switch>
    </BrowserRouter>
    
   </ThemeProvider>
  );
}

export default App;
