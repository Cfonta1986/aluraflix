import Header from "./componentes/Header";
import styled from "@emotion/styled";
import Footer from "./componentes/Footer";
import { BrowserRouter as Route, Router, Routes } from "react-router-dom";
import Home from "./paginas/Home";

const Container = styled.div`  
margin: -8px;
  text-decoration: none;
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  background: rgba(0, 18, 51, 0.56);
`


function App() {
  return (
  <Router>
    <Container>
      <Header />
      <Routes>
        <Route path="*" element={ <Home/> } />
      </Routes>
      <Footer />
    </Container>
  </Router>
    
  );
}

export default App;


/*

<Container>
      <Header />
      <Routes>
        <Route path="*" element={ <Home/> } />
      </Routes>
      <Footer />
    </Container>



<Container>
    <Header />
    <Body />
    <Footer />
  </Container>*/