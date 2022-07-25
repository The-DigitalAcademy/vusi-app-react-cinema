import { BrowserRouter } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import { Container } from '@mui/material';
import SimpleBottomNavigation from './components/MainNav';




function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
      <Container>
        {/* <Switch>
        <Router path='/' components={Trending} exact/>
        <Router path='/movies' components={Movies}/>
        <Router path='/series' components={Series}/>
        <Router path='/search' components={Search}/>
       <Switch> */}
      </Container>
      </div>

      <SimpleBottomNavigation /> 
    </BrowserRouter>
  );
}

export default App;
