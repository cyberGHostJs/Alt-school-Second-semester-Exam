import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: state.count * 0 };
    default:
      throw new Error();
  }
}
export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="main_container">
      <div>
        <h1>Frontend Second Semester Examination Project Question 2 </h1>
        <ul>
          <li>
            setup a custom counter hook with increament, decreament, reset,
            setValue function.
          </li>
          <li>
            impliment a page for the custom hook, useReducer, 404 Page, and page
            to test error boundary and Good SEO
          </li>
          <li>I added a future that shows "last count before reset" in the test error boundary page</li>
        </ul>
        <h1 className="reducer">This is a useReducer Counter</h1>
        <div className="counter_label"> Count: {state.count}</div>
        <button
          className="Action-btn"
          onClick={() => dispatch({ type: "increment" })}
        >
          Increament
        </button>
        <button
          className="Action-btn"
          onClick={() => dispatch({ type: "decrement" })}
        >
          Decreament
        </button>
        <button
          className="Action-btn"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </div>
    </div>
  );
}