import React from "react";
import PropTypes from "prop-types";

function TeaDetail(props){
  const { tea, onClickingDelete, onRestockClick } = props; 

  return (
    <React.Fragment>
      <h1>Tea Detail's</h1>
      <h3>{tea.name} Tea - From {tea.origin}</h3>
      <p><em>Price: {tea.price}</em></p>
      <p><em>Steep time in minutes: {tea.steep}</em></p>
      <p><em>Inventory: {tea.inventory}</em></p>

      <button onClick={()=> onRestockClick()}>Restock Tea</button>
      <button onClick={props.onBuyClick}>Buy Tea</button>
      <button onClick={props.onClickingEdit}>Edit Tea</button>
      <button onClick={()=> onClickingDelete(tea.id)}>Delete Tea</button>
      <hr/>
    </React.Fragment>
  );
}

TeaDetail.propTypes = {
  tea: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onRestockClick: PropTypes.func,
  onBuyClick: PropTypes.func
};

export default TeaDetail;