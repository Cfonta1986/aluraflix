import Header from "./componentes/Header";
import Body from "./componentes/body";
import styled from "@emotion/styled";
import Footer from "./componentes/Footer";

const Container = styled.div`  
margin: -8px;
  text-decoration: none;
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  background: rgba(0, 18, 51, 0.56);
`


function App() {
  return (
  <Container>
    <Header />
    <Body />
    <Footer />
  </Container>
    
  );
}

export default App;
