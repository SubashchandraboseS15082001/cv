import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import {Switch, Route} from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Login from './component/Login';
import Register from './component/Register';
import About from './component/About';
import Conatct from './component/Conatct';
import Cart from './component/Cart';


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/products/:id' component={Product} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Conatct} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </>
  );
}

export default App;
