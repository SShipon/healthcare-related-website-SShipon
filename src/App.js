import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import PagesNotFound from './Pages/PagesNotFound';
import AuthProvider from './contexts/AuthProvider';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div> 
     <AuthProvider>
     <Router>
       <Header></Header>

         <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

         <Route path="/about">
          <About></About>
        </Route>

        <Route path="/contact">
          <Contact>
          </Contact>
        </Route>

        <Route path="/services">
          <Services>
          </Services>
        </Route>

        <Route path="/cart">
          <Cart></Cart>
        </Route>

        <Route path="/login">
         <Login></Login>
        </Route>

        <Route path="/signup">
          <Signup></Signup>
        </Route>

        <Route path="*">
          <PagesNotFound></PagesNotFound>
        </Route>
         </Switch>
         <Footer></Footer>
     </Router>
     
     </AuthProvider>
   
    </div>
  );
}

export default App;
