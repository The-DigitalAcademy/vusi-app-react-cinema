import { Container } from "@material-ui/core";
import { Movie } from "@material-ui/icons";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';
import Trending from "./Pages/Trending/Trending";
// import Movies from "./Pages/Movies/Movies";
import Search from "./Pages/Search/Search";
// import Series from "./Pages/Series/Series";




function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>



        <div clsass="row">
        <img src="https://images.unsplash.com/photo-1627133805103-ce2d34ccdd37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNpbmVtYXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="watching movies" width="250" height="250"></img>
        <img src="https://media.istockphoto.com/photos/movie-projector-on-dark-background-picture-id1007557230?b=1&k=20&m=1007557230&s=170667a&w=0&h=q7wFD_3yD6kuD-lsnN3_OJvktwnmpukh0IbQrgqq0uY=" alt="watching movies" width="250" height="250"></img>
        <img src="https://media.istockphoto.com/photos/audience-in-the-cinema-picture-id1308453483?b=1&k=20&m=1308453483&s=170667a&w=0&h=hR7kPYeuH9sNpTsXdSr_exWcWkzceu-c7mUuPPXsvEI=" alt="watching movies" width="250" height="250"></img>
        <img src="https://images.unsplash.com/photo-1585647347384-2593bc35786b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9wY29ybiUyMGNpbmVtYXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="watching movies" width="250" height="250"></img>
        <img src="https://img.freepik.com/free-vector/cinema-movie-film-festival-background_1017-23458.jpg" alt="watching movies" width="250" height="250"></img>
        <img src="http://cdn.primedia.co.za/primedia-broadcasting/image/upload/c_fill,h_437,w_700/jazscy2tl8ncdvwge6xy" alt="watching movies" width="250" height="250"></img>
        <img src="https://www.discoverwalks.com/blog/wp-content/uploads/2020/05/henry-co-21ht36zwln8-unsplash-1024x683.jpg" alt="watching movies" width="250" height="250"></img>
        <img src="https://media.istockphoto.com/photos/movie-time-text-in-lightbox-picture-id1127815281?b=1&k=20&m=1127815281&s=170667a&w=0&h=i6nzPtvKe-R5Nzw5IHfq0jmVX4PtxfKJjX_BFxwnAEk=" alt="watching movies" width="250" height="250"></img>
        <img src="https://img.apmcdn.org/748d4f208b20e50edf082a4ec3c17f6892265207/normal/e78a33-20190205-saturday-cinema-01.jpg" alt="watching movies" width="250" height="250"></img>
        <img src="https://media.istockphoto.com/photos/africanamerican-couple-on-a-date-watching-a-movie-at-the-cinema-picture-id1281543294?b=1&k=20&m=1281543294&s=170667a&w=0&h=6rU0HbUJmxkM6V8eaOr0gyvi7l3ryxaHNhHGtSuk7hM=" alt="watching movies" width="250" height="250"></img>
        <img src="https://images.unsplash.com/photo-1561722798-9a732d141027?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2luZW1hJTIwcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="watching movies" width="250" height="250"></img>
        <img src="https://t3.ftcdn.net/jpg/00/77/68/38/360_F_77683876_PLF17M0IBi56nktgKNATVfOCEgqWFPBU.jpg" alt="watching movies" width="250" height="250"></img>



          </div>
        
        </Container>
        
      <Container>
        <Switch>
          
          {/* <Route path="/" component={Trending}export/>
          <Route path="/movies" component={Movies}/>
          <Route path="/series" component={Series}/> */}
          <Route path="/search" component={Search}/>
        </Switch> 
      </Container>
      </div>
      <SimpleBottomNavigation /> 

    </BrowserRouter>
    
  ); 
}

export default App;
