import "./App.css";
import Header from "./Component/Header/Navbar";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import Product from "./Component/Product/Product";
import SignIn from "./Component/SignIn/SignIn";
import SignUp from "./Component/SignUp/SignUp";
import Collection1 from "./Component/Collection/Spring2022";
import Contact from "./Component/Contact/Contact";
import About from "./Component/About/About";
import DetailsProduct from "./Component/Product/DetailsProduct";
import Cart from "./Component/Cart/Cart";
import AdminProduct from "./Component/Admin/AdminProduct";
import AddProduct from "./Component/Admin/AddProduct"
import ListUser from "./Component/Admin/ListUser";
import SearchProduct from "./Component/Search/Search";
import EditProduct from "./Component/Admin/EditProduct";
import Bill from "./Component/Admin/Bill"
import DetailsBill from "./Component/Admin/DetailsBill";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState} from "react";
import {useStore, actions} from "./Store";
import axios from "axios";

function App() {
  const [showHeader, setshowHeader] = useState(false);
  const [state, dispatch] = useStore();

  useEffect(() => {
    const handleScroll = () => {
      setshowHeader(window.scrollY >= 190);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

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
        <Header showHeader={showHeader} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route exact path="/SignIn" element={<SignIn />}/>
          
          <Route exact path="/Product" element={<Product />} />
          <Route exact path="/Product/:productID" element={<DetailsProduct />}/>
          <Route exact path="/Cart" element={<Cart />}></Route>
          
          <Route exact path="/Spring2022" element={<Collection1 />} />
          
          <Route exact path="/Contact" element={<Contact />} />
          
          <Route exact path="/About" element={<About />}></Route>
          {/* Admin */}
          <Route exact path='/AdminProduct' element={<AdminProduct/>}/>
          <Route exact path="/AddProduct" element={<AddProduct />}/>
          <Route exact path="/ListUser" element={<ListUser />}/>
          <Route exact path="/EditProduct" element={<EditProduct />}/>
          <Route exact path="/Bill" element={<Bill />}/>
          <Route exact path="/DetailsBill" element={<DetailsBill />}/>
          {/* Search */}
          <Route path="/Search/:searchTitle" element={<SearchProduct />}/>

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
