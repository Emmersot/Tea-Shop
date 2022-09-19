import React from "react";
import Header from "./Header";
import TeaControl from "./TeaControl";

function App(){
  return (
    <React.Fragment>
      <div className="container">
        <Header />
        <TeaControl />
      </div>
    </React.Fragment>
  );
}

export default App;