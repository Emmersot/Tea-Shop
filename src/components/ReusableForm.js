
import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <div className="form-group d-flex flex-row justify-content-center text-center">
        <form onSubmit={props.formSubmissionHandler}>
          <input
            type='text'
            name='name'
            placeholder='Name' />
          <input
            type='text'
            name='price'
            placeholder='Price' />
            <input
            type='text'
            name='origin'
            placeholder='Origin' />
            <input
            type='text'
            name='steep'
            placeholder='Steep time in minutes' />
          <button type='submit'>{props.buttonText}</button>
        </form>
      </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;