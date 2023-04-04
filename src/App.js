import {BrowserRouter,Route,Routes} from "react-router-dom"

import Counter from "./Components/Counter";
import Home from "./Components/Home"
import Cart from "./Components/Cart"
import Login from "./Components/Login";
import NotFound from "./Components/NotFound";

function App() {
  return ( 
    <BrowserRouter className="App">
      <Routes>
        <Route  path="/" element={<Login />} />
        <Route  path="/home" element={<Home />} />
        <Route  path="/cart" element={<Cart />} />
        <Route  path="/counter" element={<Counter />} />
        <Route  path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
