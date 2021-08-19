import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import FormStore from "./containers/FormStore";
import FormValues from "./containers/FormValues";
import Form from "./containers/Form";
import "uikit/dist/css/uikit.min.css";

const handleSubmit = (formValues) => {
  alert(JSON.stringify(formValues, null, 4));
};

render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2 style={{ textAlign: "center" }}>Interest Calculator</h2>
      <Form onSubmit={handleSubmit} />
      <FormValues />
      <FormStore />
    </div>
  </Provider>,
  document.getElementById("root")
);
