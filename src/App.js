import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './components/Home/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Header from './components/Header/Header';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Footer from './components/Footer/Footer';
import Blog from './components/Blog/Blog';
import AllProjects from './components/AllProjects/AllProjects';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/projects">
              <AllProjects></AllProjects>
            </Route>

            <Route path="/blog">
              <Blog></Blog>
            </Route>

            <Route path="/about">
              <AboutMe></AboutMe>
            </Route>

            <Route path="/contact">
              <Contact></Contact>
            </Route>



            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>


          </Switch>
          <Footer></Footer>
        </ScrollToTop>

      </Router>
      <AnimatedCursor
        innerSize={5}
        outerSize={9}
        color='053, 43, 201'
        outerAlpha={0.3}
        innerScale={0.5}
        outerScale={3}
      />
    </div>
  );
}

export default App;
