import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register, Landing, Error, ProtectedRoutes } from "./pages/index.js";
import {
  Buy,
  Sell,
  Cart,
  WishList,
  SharedLayout,
  Contact,
} from "./pages/dashboard/index.js";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <SharedLayout />
              </ProtectedRoutes>
            }
          >
            <Route index element={<Buy />} />
            <Route path="sell" element={<Sell />} />
            <Route path="cart" element={<Cart />} />
            <Route path="wishList" element={<WishList />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
