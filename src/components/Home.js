import React from "react";
import { useRef, useState } from "react";



export default function Home () {
    const [state, setState] = useState(0);
    //increament, decreament and reset functions...
    const Increament = () => {
        setState(state + 1);
      };
    const Decreament = () => {
      setState(state - 1);
    };
    const Reset = (prev) => {
      setState((prev = 0));
    };
    const inputRef = useRef(null);
  
    function handleClick() {
      setState(inputRef.current.value - 0);
    }
    //display
    return (
      <section className="main_container">
        <div>
          <h1>COUNTER</h1>
          <p>
            This is just a normal counter with the increament, decreament, reset and set value options
          </p>
          <p>
          <input ref={inputRef} type='number' id="message" name="message" />
            <button onClick={handleClick}>set value</button>
          </p>
          <div className="counter_label">Count: {state}</div>
          <button className="Action-btn" onClick={Increament}>
            Increament
          </button>
          <button className="Action-btn" onClick={Decreament}>
            Decreament
          </button>
          <button className="Action-btn" onClick={Reset}>
            reset
          </button>
        </div>
      </section>
    );
  }
  
