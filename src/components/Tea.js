import React from "react";
import PropTypes from "prop-types";

function Tea(props){

  return (
    <React.Fragment>
      <div onClick = {() => props.whenTeaClicked(props.id)}>
        <h3 className="listName">{props.name} - {props.origin}</h3>
        <h3>{props.price}</h3>
        <h5>There are about {props.inventory} servings left</h5>
      </div>
    </React.Fragment>
  );
}

Tea.propTypes = {
  names: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.string,
  steep: PropTypes.string,
  inventory: PropTypes.number,
  whenTeaClicked: PropTypes.func
}

export default Tea;