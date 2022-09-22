import React from "react";
import PropTypes from "prop-types";

const cardStyles = {
  container: {
    display: "flex",
    height: 130,
    width: 130,
    boxShadow: "10px 0 30px 0 #000000",
    color: "Red",
    alignItems: "center",
    padding: 20,
    borderRadius: 200,
    marginLeft: 30,
    marginBottom: 30,
  },
  profilePicture: {
    // display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "Green",
    color: "Black",
    height: 100,
    width: 100,
    borderRadius: "50%",
    padding: 35,
    fontWeight: "bold",
    
  },
  bio: {
    marginLeft: 10,
  },
  userName: {
    fontWeight: "bold",
  },
};
function Tea(props){

  return (
    <React.Fragment>
      <div style={cardStyles.container}>
        <div onClick = {() => props.whenTeaClicked(props.id)}>
          <div style={cardStyles.profilePicture}>
            <span style={cardStyles.userName} className="listName">{props.name} Tea - From {props.origin}</span>
            <h3>{props.price}</h3>
            <h5> {props.inventory} servings left</h5>
          </div>
        </div>
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