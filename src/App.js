import "react-loading-skeleton/dist/skeleton.css";
import { Route, Switch } from 'react-router-dom';
import './App.css';
import About from './component/About';
import Cart from './component/Cart';
import Conatct from './component/Conatct';
import Home from './component/Home';
import Login from './component/Login';
import Navbar from './component/Navbar';
import Product from './component/Product';
import Products from './component/Products';
import Register from './component/Register';



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
