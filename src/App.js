import { Container } from "./Components/Container";
import { End, Result } from "./Components/End";
import { Header, Headline } from "./Components/Header";
import { Section } from "./Components/Section";

function App() {
  return (
    <Container>
      <Header>
        <Headline>Kalkulator BMI</Headline>
      </Header>
      <Section>Tu będzie Kalkulator</Section>
      <End>
        <Result>25.90</Result>
      </End>
    </Container>
  );
}

export default App;
