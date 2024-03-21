import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Heading from "./ui/Heading-v1";

//////////////////////////
const StyledApp = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--color-brand-600);
`;

//////////////////////////
function App() {
  return (
    <>
      <GlobalStyles />

      <StyledApp>
        <Heading as="h1">Hola Mundo 1</Heading>

        <Heading as="h2">Hola Mundo 2</Heading>
      </StyledApp>
    </>
  );
}

export default App;
