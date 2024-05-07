import Home from "../pages/Home";
import Shop from "../pages/Shop";
import NotFound from "../pages/NotFound";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";

const routingElements = [
  {
    id: 1,
    path: "/",
    component: <Home />,
  },
  {
    id: 2,
    path: "/shop",
    component: <Shop />,
  },
  {
    id: 3,
    path: "*",
    component: <NotFound />,
  },
  {
    id: 4,
    path: "/cart",
    component: <Cart />,
  },
  {
    id: 4,
    path: "/contact",
    component: <Contact />,
  },
];

export default routingElements;
