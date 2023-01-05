import { useRef, useState } from "react";
import { useErrorHandler } from "react-error-boundary";

const MAX_COUNT_ALLOWED = 5;

export default function ErrorBoundary() {
  //useState for count...
  const [state, setState] = useState(0);
  const [history, setHistory] = useState('');

  //initializing errorHandler
  const HandleError = useErrorHandler();

  //increament, decreament and reset functions...

  if (state > MAX_COUNT_ALLOWED) {
    throw new Error("Exceeded count");
  }
  const Increament = () => {
    try {
      if (state === MAX_COUNT_ALLOWED) {
        throw new Error("Exceeded count");
      } else {
        setState(state + +1);
      }
    } catch (e) {
      HandleError(e);
    }
  };
  const Decreament = () => {
    setState(state - 1);

  };
  const Reset = (prev) => {
    if (prev === 0) {
      setHistory(0)
    }else{
      setHistory(state)
    }
    setState((prev = 0));
  };

  const inputRef = useRef(null);
  // const listHistory = history.map((number) => <li>{number}</li>);

  function handleClick() {
    setState(inputRef.current.value - 0);
  }
  //display
  return (
    <section className="main_container">
      <div>
        <h1>Testing error boundary</h1>
        <p>Increament from 0 to 5, as 5 is the limit.</p>
        <p>count cannot be greater than 5.</p>
        <p>Reset takes count back to 0</p>
        <p>
          <input ref={inputRef} type="number" id="message" name="message" />
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
        <p>Your last count beofore you reset was: {history}</p>          
      </div>
    </section>
  );
}
