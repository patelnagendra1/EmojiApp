import React from "react";
import Entry from "./Entry"
import emojipedia from "../emojipedia"


function createemoji(props){
    return(
    <Entry 
        key={props.id}
        name={props.name}
        emoji={props.emoji}
        description={props.meaning}
    />
    )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createemoji)}
       
      </dl>
    </div>
  );
}

export default App;
