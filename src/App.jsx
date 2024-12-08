import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Footer, HomePage } from "./utils";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
