import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector, change } from "redux-form";
import "./styles.css";

class SelectingFormValuesForm extends PureComponent {
  componentDidUpdate() {
    this.props.change("selectingFormValues", "total", this.props.total);
  }

  render() {
    const {
      amount1,
      amount2,
      amount3,
      handleSubmit,
      pristine,
      reset,
      submitting
    } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Principal</label>
          <div>
            <Field
              className="uk-input"
              name="amount1"
              component="input"
              type="text"
              placeholder="Principal value"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div>
          <label>Percent</label>
          <div>
            <Field
              className="uk-input"
              name="amount2"
              component="input"
              type="text"
              placeholder="rate as decimal value for eg 0.02 = 2%"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div>
          <label>Years</label>
          <div>
            <Field
              className="uk-input"
              name="amount3"
              component="input"
              type="text"
              placeholder="Years"
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div>
          <label>total</label>
          <div>
            <Field className="uk-select" name="total" component="input" />
          </div>
        </div>
      </form>
    );
  }
}

const selector = formValueSelector("selectingFormValues"); // select current form
// Decorate form with selected redux form state values
const mapStateToProps = (state) => {
  const { amount1, amount2, amount3 } = selector(
    state,
    "amount1",
    "amount2",
    "amount3"
  );
  const total =
    parseFloat(amount1 || 0) *
    (1 + parseFloat(amount2 || 0) * parseFloat(amount3 || 0));
  return {
    amount1,
    amount2,
    amount3,
    total
  };
};

// Decorate form with dispatchable actions
const mapDispatchToProps = {
  change
};

// create a redux form, then include the above decorators for the created form to utilize
export default reduxForm({
  form: "selectingFormValues"
})(connect(mapStateToProps, mapDispatchToProps)(SelectingFormValuesForm));
