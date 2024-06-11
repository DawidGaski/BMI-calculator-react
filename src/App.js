import { Container } from "./Components/Container";
import { End, Result } from "./Components/End";
import { Header, Headline } from "./Components/Header";
import { Section } from "./Components/Section";
import Form from "./features/BMICalculator";

function App() {
  return (
    <Container>
      <Header>
        <Headline>Kalkulator BMI</Headline>
      </Header>
      <Section>
        <Form />
      </Section>
      <End>
        <Result>25.90</Result>
      </End>
    </Container>
  );
}

export default App;
