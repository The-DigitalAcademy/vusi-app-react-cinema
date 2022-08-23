import { Container } from "@material-ui/core";
import { BrowserRouter, } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Search from "./components/Card";
import Card from 'react-bootstrap/Card';




function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">

        <Container >
       
            <Search />
            <Card />
          
        </Container>

      </div>


    </BrowserRouter>

  );
}

export default App;
