import React from "react";
import PropTypes from "prop-types";

function TeaDetail(props){
  const { tea, onClickingDelete, onClickingEdit } = props; 

  return (
    <React.Fragment>
      <h1>Tea Detail</h1>
      <h3>{tea.location} - {tea.names}</h3>
      <p><em>{tea.issue}</em></p>
      <button onClick={onClickingEdit}>Update Tea</button>
      <button onClick={()=> onClickingDelete(tea.id)}>Close Tea</button>
      <hr/>
    </React.Fragment>
  );
}

TeaDetail.propTypes = {
  tea: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default TeaDetail;