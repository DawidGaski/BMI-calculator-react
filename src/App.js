import { Container } from "./Components/Container/styled";
import { Header, Headline } from "./Components/Header/styled";
import { Section } from "./Components/Section/styled";
import BmiCalculator from "./features/BMICalculator";

function App() {
  return (
    <Container>
      <Header>
        <Headline>Kalkulator BMI</Headline>
      </Header>
      <Section>
        <BmiCalculator />
      </Section>
    </Container>
  );
}

export default App;
