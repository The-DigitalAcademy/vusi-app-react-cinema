import { Container } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import CardContainer from "./components/Card";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <CardContainer />
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
