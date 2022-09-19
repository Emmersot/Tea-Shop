import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditTeaForm (props) {
  const { tea } = props;

  function handleEditTeaFormSubmission(event) {
    event.preventDefault();
    props.onEditTea({
      names: event.target.names.value, 
      origin: event.target.origin.value, price:
      event.target.price.value, steep:
      event.target.steep.value, 
      inventory: tea.inventory, 
      id: tea.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditTeaFormSubmission} 
        buttonText="Update Tea" />
    </React.Fragment>
  );
}

EditTeaForm.propTypes = {
  onEditTea: PropTypes.func,
  tea: PropTypes.object
};

export default EditTeaForm;