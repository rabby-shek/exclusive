import Topnav from "./components/topnav/Topnav";
import Footer from "./components/footer/Footer";
import { BackToTop, SearchModal } from "./components/component";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
const App = () => {
  return (
    <Router>
      <Topnav />
      <SearchModal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <BackToTop />
    </Router>
  );
};

export default App;
