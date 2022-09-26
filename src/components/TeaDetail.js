import React from "react";
import PropTypes from "prop-types";

function TeaDetail(props){
  const { tea, onClickingDelete, onRestockClick } = props; 

  return (
    <React.Fragment>
      <h1>Detail's on {tea.name} Tea</h1>
      <h3>Imported from {tea.origin}</h3>
      <p><em>at a price of: {tea.price}</em></p>
      <p><em>It takes {tea.steep} minutes to steep </em></p>
      <p><em>There are {tea.inventory} left</em></p>

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