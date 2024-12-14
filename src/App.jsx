import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Footer, HomePage } from "./utils";
import ScreenSize from "./utils/ScreenSize";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <ScreenSize/>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/products/:product" element={<ProductPage/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
