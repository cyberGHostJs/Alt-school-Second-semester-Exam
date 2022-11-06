import React from "react";
import { useState, useCallback } from "react";



const initialState = {count: 0};

function reducer (state, action) {
  switch (action.type){
    case "increment":
      return {count: state.count + 1};
      case "decrement":
        return {count: state.count -1};
        case "reset":
          return {count: 0};
  }
}

function useReducer(reducer , initState){
  const [value , setValue] = useState(initState);

  const dispatch = useCallback((action) =>{
    const nextState =reducer(value, action)
    setValue(nextState)
  }, [setValue, value])
  return [value, dispatch]; 
}

function App() {
  
const [state, dispatch] = useReducer(reducer, initialState);

  return (

    <React.Fragment>

      <section className="main_container">
      <div className="counter_label">{state.count}</div>
      <button
        className="Action-btn"
        onClick={() => dispatch({type: "increment"})
        }
      >
        increment
      </button>
      <button className="Action-btn" onClick={() => dispatch({type: "decrement"})}>
        decreament
      </button>
      <button className="Action-btn" onClick={() => dispatch({type: "reset"})}>
        reset
      </button>
    </section>
    </React.Fragment>
    
  );
}

export default App;
