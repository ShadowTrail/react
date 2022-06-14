import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";

const App = () => {
  let component
  switch (window.location.pathname) {
    case "/Register":
      component = <Register />;
      break;
    case "/Login":
      component = <Login />;
      break;
    case "/Cart":
      component = <Cart />;
      break;
    case "/Product":
      component = <Product />;
      break;
    case "/ProductList":
      component = <ProductList />;
      break;
    default:
      component = <Home />;
      break;
  }
  return (
    <>
      <Navbar />
      <Announcement />
      {component}
    </>
  );
}

export default App
