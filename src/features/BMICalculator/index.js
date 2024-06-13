import { useState, useEffect } from "react";
import { Button, Form, Input, Paragraph, Result } from "./styled";

const BmiCalculator = () => {
  const [result, setResult] = useState(null);
  const [info, setInfo] = useState("");

  const calculateResult = (weight, height) => {
    const bmi = weight / (height / 100) ** 2;
    setResult(bmi);
  };

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const W1 = 18.5;
  const W2 = 25;
  const W3 = 29.9;

  useEffect(() => {
    if (result !== null) {
      if (result < W1) {
        setInfo("Wynik wskazuje na niedowagę");
      } else if (result >= W1 && result < W2) {
        setInfo("Wynik wskazuje, że masz prawidłową wagę, gratulacje");
      } else if (result >= W2 && result < W3) {
        setInfo("Wynik wskazuje na nadwagę");
      } else if (result >= W3) {
        setInfo("Wynik wskazuje na otyłość");
      }
    }
  }, [result]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(weight, height);
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Paragraph>
        WZROST:
        <Input
          placeholder="wpisz swój wzrost w cm"
          onChange={({ target }) => setHeight(target.value)}
          type="number"
          step="0.5"
          value={height}
        />
      </Paragraph>
      <Paragraph>
        WAGA:
        <Input
          placeholder="wpisz swoją wagę w kg"
          onChange={({ target }) => setWeight(target.value)}
          type="number"
          step="0.1"
          value={weight}
        />
      </Paragraph>
      <Paragraph>
        <Button>Przelicz</Button>
      </Paragraph>
      <Paragraph>Wynik:</Paragraph>
      <Result>
        {result !== null && (
          <>
            <Paragraph>Twoje BMI: {result.toFixed(4)}</Paragraph>
            <Paragraph>{info}</Paragraph>
          </>
        )}
      </Result>
    </Form>
  );
};

export default BmiCalculator;
