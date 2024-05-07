import Topnav from "./components/topnav/Topnav";

import Footer from "./components/footer/Footer";
import { BackToTop, SearchModal } from "./components/component";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
const App = () => {
  return (
    <Router>
      <Topnav />
      <SearchModal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
      <BackToTop />
    </Router>
  );
};

export default App;
