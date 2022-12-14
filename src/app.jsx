import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./assets/base.scss";
import Edit from "./components/edit";
import Modal from "./components/modal";
import Register from "./components/register";
import Sign from "./components/sign";

export default class app extends Component {
  state = {
    formData: [
      { label: "Email", placeHolder: "Inter your email" },
      { label: "Password", placeHolder: "Inter your password" },
    ],
    registerData: [
      { label: "First Name", placeHolder: "Inter your Name" },
      { label: "Last Name", placeHolder: "Inter your Last Name" },
      { label: "Email", placeHolder: "Inter your email" },
      { label: "Password", placeHolder: "Inter your password" },
    ],
  };

  render() {
    const { formData, registerData } = this.state;
    return (
      <div className="container">
        <div className="bg-color">
          <Switch>
            <Route exact path="/" component={(props) => <Modal props={props}/>} />
            <Route
              exact
              path="/login"
              component={(props) => <Sign formData={formData} />}
            />
            <Route
              exact
              path="/register"
              component={(props) => <Register registerData={registerData} />}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
