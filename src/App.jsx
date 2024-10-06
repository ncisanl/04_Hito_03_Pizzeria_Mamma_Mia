import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Register } from "./components/Register.jsx";
import { Login } from "./components/Login.jsx";

function App() {
    return (
        <>
            <Navbar />
            <Home />
            {/*<Register />*/}
            {/*<Login />*/}
            <Footer />
        </>
    );
}

export default App;
