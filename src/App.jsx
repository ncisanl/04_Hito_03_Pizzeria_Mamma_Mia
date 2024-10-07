import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Cart } from "./components/Cart.jsx";
import { Home } from "./components/Home";
import { Register } from "./components/Register.jsx";
import { Login } from "./components/Login.jsx";

function App() {
  return (
    <>
      <Navbar />
      {/*<Home />*/}
      {/*<Register />*/}
      {/*<Login />*/}
      <Cart />
      <Footer />
    </>
  );
}

export default App;
