import "./App.css";
import SignIn from "./Component/SignIn/SignIn";
import SignUp from "./Component/SignUp/SignUp";

import Client from "./Routes/Client";
import Home from "./Component/Home/Home";
import Product from "./Component/Product/Product";
import DetailsProduct from "./Component/Product/DetailsProduct";
import Collection1 from "./Component/Collection/Spring2022";
import Contact from "./Component/Contact/Contact";
import About from "./Component/About/About";
import Cart from "./Component/Cart/Cart";
import BillUser from "./Component/Cart/BillUser";
import DetailBillUser from "./Component/Cart/DetailBillUser"
import SearchProduct from "./Component/Search/Search";

import Dashboard from "./Component/Admin/Dashboard"
import AdminProduct from "./Component/Admin/AdminProduct";
import AddProduct from "./Component/Admin/AddProduct";
import ListUser from "./Component/Admin/ListUser";
import EditProduct from "./Component/Admin/EditProduct";
import Bill from "./Component/Admin/Bill";
import DetailsBill from "./Component/Admin/DetailsBill";
import BillAccept from "./Component/Admin/BillAccept";
import BillWait from "./Component/Admin/BillWait";
import BillCancel from "./Component/Admin/BillCancel";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { useStore, actions } from "./Store";
import axios from "axios";

function App() {
  const [state, dispatch] = useStore();
  useEffect(() => {
    axios
      .get("/api/sanpham")
      .then((result) => {
        dispatch(actions.setAllProducts(result.data.allProduct));
        for (
          let i = (state.numberPageProduct - 1) * 9;
          i < state.numberPageProduct * 9;
          i++
        ) {
          dispatch(actions.setOnePageProduct(result.data.allProduct[i]));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Client />}>
            <Route path="/" element={<Home />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Product/:productID" element={<DetailsProduct />} />
            <Route path="/Cart" element={<Cart />}></Route>
            <Route path="/BillUser" element={<BillUser />} />
            <Route path="/Spring2022" element={<Collection1 />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />}></Route>
            <Route path="/Search/:searchTitle" element={<SearchProduct />} />
            <Route path="/DetailBillUser" element={<DetailBillUser />}/>
          </Route>
          {/* Admin */}
          <Route  path="/Dashboard" element={<Dashboard />}>
            <Route path="AdminProduct" element={<AdminProduct />} />
            <Route path="AddProduct" element={<AddProduct />} />
            <Route path="ListUser" element={<ListUser />} />
            <Route path="EditProduct" element={<EditProduct />} />
            <Route path="Bill" element={<Bill />} />
            <Route path="DetailsBill" element={<DetailsBill />} />
            <Route path="BillAccept" element={<BillAccept />} />
            <Route path="BillWait" element={<BillWait />} />
            <Route path="BillCancel" element={<BillCancel />}/>
          </Route>
          {/* Search */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
