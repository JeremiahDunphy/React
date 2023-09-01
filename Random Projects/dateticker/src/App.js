import "./styles.css";
import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const nextStepHandler = () => {
    setStep((step) => step + 1);
  };

  const previousStepHandler = () => {
    setStep((step) => step - 1);
  };

   const previousCountHandler = () => {
     setCount((prevCount) => prevCount - 1);
     if(step > 1) {
     setCount((prevCount) => prevCount - step)
     } else if(step < 1) {
      setCount((prevCount) => prevCount - Math.abs(step))
     }
   };

   const nextCountHandler = () => {
     setCount((nextCount) => nextCount + 1);
     if(step > 1) {
      setCount((nextCount) => nextCount + step);
     }
   };

  return (
    <>
      <div className="inner-Container">
        <button className="btn" onClick={previousStepHandler}>
          -
        </button>
        <span> Step: {step} </span>
        <button className="btn" onClick={nextStepHandler}>+</button>
      </div>
      <div className="outer-Container">
        <button className="btn" onClick={previousCountHandler}>
          -
        </button>
        <span>Count: {count} </span>
        <button className="btn" onClick={nextCountHandler}>
          +
        </button>
      </div>
      {count === 0 && <p>{`Today is ${new Date().toDateString()}`}</p>}

      <p>
        {count > 0
          ? `${count} days from today is ${new Date(
              new Date().setDate(new Date().getDate() + count)
            ).toDateString()}`
          : `${Math.abs(count)} days ago was ${new Date(
              new Date().setDate(new Date().getDate() - Math.abs(count))
            ).toDateString()}
            `}
      </p>
    </>
  );
}
