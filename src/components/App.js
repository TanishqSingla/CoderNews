import React from "react";
import LinkList from "./LinkList";
import logo from "../logo.svg";
import "../styles/App.css";
import CreateLink from "./CreateLink";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={LinkList} />
          <Route exact path="/create" component={CreateLink} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
