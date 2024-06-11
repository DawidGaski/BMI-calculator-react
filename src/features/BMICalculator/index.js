import { useState } from "react";
import Result from "./Result";

const Form = () => {
  const [result, setResult] = useState();

  const calculateResult = (weight, height) => {
    const bmi = weight / (height / 100) ** 2;

    setResult({
      bmi,
    });
  };

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(weight, height);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <fieldset>
        <p>
          <label>
            {" "}
            Wpisz swój wzrost
            <input onChange={({ target }) => setHeight(target.value)}></input>
          </label>
        </p>
        <p>
          <label>
            {" "}
            wpisz swoją wagę
            <input onChange={({ target }) => setWeight(target.value)}></input>
          </label>
        </p>
        <p>
          <button>Przelicz</button>
        </p>
      </fieldset>
      <Result result={result} />
    </form>
  );
};

export default Form;
