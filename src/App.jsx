import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Footer, HomePage } from "./utils";
import ScreenSize from "./utils/screenSize";

function App() {
  return (
    <BrowserRouter>
      <ScreenSize/>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
