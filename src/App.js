import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
function App() {
  return (
    
    <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/starred">
          <Starred />
        </Route>

        <Route>
          <div>Did not found 404</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
