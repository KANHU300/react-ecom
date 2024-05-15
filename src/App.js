
import './App.css';
import { Route, Routes } from "react-router-dom";

// import Cart from "./Pages/Cart/Cart";
import Home from './Pages/Home/Home';
import Layout from './Pages/Layout/Layout'
import ProductView from './Pages/ProductView.js/ProductView';
import CategoryProduct from './Pages/CategoryProduct/CategoryProduct';
import Cart from './Pages/Cart/Cart';
import WishList from './Pages/WishList/WishList';
import SearchPage from './Pages/SearchPage/SearchPage';


function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          {/* <Route path="/cart" element={<Cart/>}/> */}
          <Route path="product/:id" element={<ProductView/>}/>
          
          <Route path = "/category/:category" element = {<CategoryProduct />} />
          <Route path = "/cart"  element={<Cart/>}/>
          <Route path = "/wishlist"  element={<WishList/>}/>
          <Route path = "/search/:searchTerm"  element={<SearchPage/>}/>

          
          

        </Route>

      </Routes>
      
    </div>
  );
}

export default App;
