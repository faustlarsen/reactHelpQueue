import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";

function App(){   //func component  - func that returns code
  return ( 
    <React.Fragment>
      <Header />
      <TicketControl />
    </React.Fragment>
  );
}

export default App;