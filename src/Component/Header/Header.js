// import { useEffect, useState } from "react";
// import { NavLink, useNavigate, } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import Login from "../../Component/Login/Login";
// import Sidebar from "../Sidebar/Sidebar";
// import Axios from "../../Utils/AxiosConfig";
// import {
//   getAllCarts,
//   getCartItemsCount,
//   getCartTotal,
// } from "../../store/cartSlice";
// import {
//   fetchAsyncSearchProducts,
//   getSearchProducts,
//   getSearchProductsStatus,
// } from "../../store/searchSlice";
// import { useDispatch, useSelector } from "react-redux";

// function Header() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [showLoginModal, setShowLoginModal] = useState(false);
//   const [loginError, setLoginError] = useState("");
//   const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);

//   const itemsCount = useSelector(getCartItemsCount);
//   const carts = useSelector(getAllCarts);
//   const [searchTerm, setSearchTerm] = useState("");
//   const searchProducts = useSelector(getSearchProducts);
//   const searchStatus = useSelector(getSearchProductsStatus);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

  

//   useEffect(() => {
//     dispatch(getCartTotal());
//   }, [carts]);

//   useEffect(() => {
//     // Check for authentication token in localStorage on component mount (page load)
//     const token = localStorage.getItem("token");
//     if (token) {
//       setIsAuthenticated(true);
//     }
//   }, []); // Empty dependency array ensures this effect runs only once on component mount

//   const handleLogin = async (username, password) => {
//     try {
//       const response = await Axios.post("https://dummyjson.com/auth/login", {
//         username,
//         password,
//       });

//       // Assuming the response contains a token upon successful login
//       const { token } = response.data;

//       // Save token in localStorage
//       localStorage.setItem("token", token);

//       // Update isAuthenticated state
//       alert("login successful");
//       setIsAuthenticated(true);

//       // Close login modal
//       setShowLoginModal(false);
//       setLoginError("");
//     } catch (error) {
//       console.error("Login failed:", error.response?.data);

//       // Handle login error (e.g., display error message)
//       setLoginError("Login failed. Please check your credentials.");
//     }
//   };

//   const handleLogout = () => {
//     // Remove token from localStorage on logout
//     localStorage.removeItem("token");
//     setIsAuthenticated(false);
//   };
//   // sidebar///
//   const [showSidebar, setShowSidebar] = useState(false);

//   const handleCloseSidebar = () => setShowSidebar(false);
//   const handleShowSidebar = () => setShowSidebar(true);


//   const handleSearchTermChange = (e) => {
//     const term = e.target.value;
//     setSearchTerm(term);

//     if (term.length >= 3) {
//       dispatch(fetchAsyncSearchProducts(term));
//     } else {
//       dispatch(fetchAsyncSearchProducts(""));
//     }
//   };
//   const handleKeyDown = (e) => {
//     if (e.key === "ArrowDown") {
//       setActiveSuggestionIndex((prevIndex) =>
//         Math.min(prevIndex + 1, searchProducts.length - 1)
//       );
//     } else if (e.key === "ArrowUp") {
//       setActiveSuggestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//     } else if (e.key === "Enter") {
//       if (activeSuggestionIndex >= 0) {
//         navigate(`/search/${searchProducts[activeSuggestionIndex].id}`);
//         setSearchTerm("");
//         setActiveSuggestionIndex(-1);
//       }
//     }
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     if (searchTerm.length >= 3 && searchProducts.length > 0) {
//       navigate(`/search/${searchProducts[0].id}`);
//       setSearchTerm("");
//       setActiveSuggestionIndex(-1);
//     }
//   };

//   const handleSuggestionClick = (index) => {
//     navigate(`/search/${searchProducts[index].id}`);
//     setSearchTerm("");
//     setActiveSuggestionIndex(-1);
//   };
//   return (
//     <>
//       <div className="header">
//         <nav className="navbar   navbar-light nvbar-edit ">
//           <div className="container">
//             <div className="  nav-menu navlist-top">
//               <button
//                 className="navbar-toggler"
//                 type="button"
//                 onClick={handleShowSidebar}
//               >
//                 <FontAwesomeIcon icon={faBars} />
//               </button>

//               <NavLink className="navbar-brand logo-edit  " to="/">
//                 <img
//                   className="logo-edit"
//                   src="/images/Justright- logo.svg"
//                   alt=".."
//                 />
//               </NavLink>
//               <div className="navbar-nav mr-auto navUl-edit d-none d-md-block">
//                 <form className="search-boxTop" role="search" onSubmit={handleSearchSubmit}>
//                   <input
//                     className="form-control search-inpBox"
//                     type="search"
//                     placeholder="What are you shopping for?"
//                     aria-label="Search"
//                     value={searchTerm}
//                     onChange={handleSearchTermChange}
//                     onKeyDown={handleKeyDown}
//                   />
//                   <button type="submit" className="search-icon">
//                     <img src="/images/search.svg" alt="Search" />
//                   </button>
//                 </form>

//                 {searchProducts.length > 0 && searchTerm.length >= 3 && (
//                   <div className="suggestions-container">
//                     <ul className="suggestions-list">
//                       {searchProducts.map((item, index) => (
//                         <li
//                           key={item.id}
//                           className={index === activeSuggestionIndex ? "active-suggestion" : ""}
//                           onMouseEnter={() => setActiveSuggestionIndex(index)}
//                           onClick={() => handleSuggestionClick(index)}
//                         >
//                           <NavLink to="#" className="suggestion-link">
//                             {item.title}
//                           </NavLink>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>

//               {/* <div
//                 className="navbar-nav mr-auto navUl-edit d-none d-md-block
              
//               "
//               >
//                 <form className="search-boxTop" role="search" onSubmit={handleSearchSubmit} >
//                   <input
//                     className="form-control search-inpBox"
//                     type="search"
//                     placeholder="What are you shopping for?"
//                     aria-label="Search"
//                     value={searchTerm}
//                     onChange={handleSearchTermChange}
//                   />
//                   <NavLink to="">
//                     <img
//                       src="/images/search.svg"
//                       className="search-icon"
//                       alt="Search"
//                     />
//                   </NavLink>
//                 </form>

//                 {searchProducts.length > 0 && searchTerm.length >= 3 && (
//                   <div className="suggestions-container">
//                     <ul className="suggestions-list">
//                       {searchProducts.map((item) => (
//                         <li key={item.id}>
//                           <NavLink
//                             to={`/search/${searchTerm}`}
//                             className="suggestion-link"


//                             onClick={handleSuggestionClick}
//                           >
//                             {item.title}
//                           </NavLink>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div> */}

//               <ul className="navbar-nav  navmenu-items">
//                 <li className="nav-item d-md-none">
//                   <NavLink className="nav-link menubar-items">
//                     <img src="/images/search.svg" className="icooons" alt="" />
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink className="nav-link menubar-items">
//                     <span className="Item-texts">Support</span>
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink className="nav-link menubar-items" to="/wishlist">
//                     <img src="/images/heart.svg" className="icooons" alt="" />
//                     <span className="Item-texts">Wishlist</span>
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink to="/cart" className="nav-link menubar-items">
//                     <img
//                       src="/images/bag-2-svgrepo-com.svg"
//                       className="icooons"
//                       alt=""
//                     />
//                     <span className="Item-texts">Cart</span>
//                     <span className="item-count">{itemsCount}</span>
//                     {/* <span className="Item-texts">Cart</span> */}
//                     {/* <CartModal carts={carts} /> */}
//                   </NavLink>
//                 </li>
//                 {isAuthenticated ? (
//                   <li className="nav-item">
//                     <div className="dropdown">
//                       <button
//                         className="btn btn-secondary dropdown-toggle login-menu"
//                         type="button"
//                         data-bs-toggle="dropdown"
//                         aria-expanded="false"
//                       >
//                         <img
//                           src="/images/profile-svgrepo-com.svg"
//                           className="icooons"
//                           alt=""
//                         />
//                         <span className="Item-texts d-none d-md-block">
//                           Profile
//                         </span>
//                       </button>
//                       <ul className="dropdown-menu dropdown-menu-end login-Ddown">
//                         <li>
//                           <a className="dropdown-item profile-logout" href="#">
//                             <img
//                               src="/images/menubar/profile-svgrepo-com.svg"
//                               className="icooons"
//                               alt=""
//                             />
//                             Profile
//                           </a>
//                         </li>

//                         <li>
//                           <a
//                             className="dropdown-item profile-logout border-botom"
//                             alt="..."
//                             onClick={handleLogout}
//                           >
//                             <span className="logout-icon">
//                               <i className="fas fa-sign-out-alt"></i>
//                             </span>
//                             Sign Out
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </li>
//                 ) : (
//                   <li className="nav-item">
//                     <a
//                       className="nav-link menubar-items"
//                       // onClick={handleShowModal}
//                       onClick={() => setShowLoginModal(true)}
//                     >
//                       <img
//                         src="/images/profile-svgrepo-com.svg"
//                         className="icooons"
//                         alt=""
//                       />
//                       <span className="Item-texts">Login</span>
//                     </a>
//                   </li>
//                 )}
//               </ul>
//               {/* Render LoginBox conditionally */}
//               {/* {isLoginOpen && <LoginBox onClose={closeLogin} />} */}
//             </div>
//             {/* <div className="d-flex list-unstyled gap-3 m-auto mt-3 bottom-nav-lists">
//               {
//                 // taking only first 8 categories
//                 categories.slice(0, 8).map((category, idx) => (
//                   <li className="nav-item no-wrap" key={idx}>
//                     <Link
//                       to={`category/${category}`}
//                       className="nav-link text-capitalize nav-category-list"
//                     >
//                       {category.replace("-", " ")}
//                     </Link>
//                   </li>
//                 ))
//               }
//             </div> */}
//           </div>
//           {/* <Login
//             show={showModal}
//             handleClose={handleCloseModal}
//             // handleSubmit={handleLogin}
//           /> */}
//         </nav>
//         <Login
//           show={showLoginModal}
//           handleClose={() => setShowLoginModal(false)}
//           handleLogin={handleLogin}
//           errorMessage={loginError} // Pass the login error message to the Login component
//         />
//         <Sidebar show={showSidebar} handleClose={handleCloseSidebar} />
//       </div>
//     </>
//   );
// }

// export default Header;
import { useEffect, useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Login from "../../Component/Login/Login";
import Sidebar from "../Sidebar/Sidebar";
import Axios from "../../Utils/AxiosConfig";
import {
  getAllCarts,
  getCartItemsCount,
  getCartTotal,
} from "../../store/cartSlice";
import {
  fetchAsyncSearchProducts,
  getSearchProducts,
  getSearchProductsStatus,
} from "../../store/searchSlice";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginError, setLoginError] = useState("");
  const itemsCount = useSelector(getCartItemsCount);
  const carts = useSelector(getAllCarts);
  const [searchTerm, setSearchTerm] = useState("");
  const searchProducts = useSelector(getSearchProducts);
  const searchStatus = useSelector(getSearchProductsStatus);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  


  useEffect(() => {
    dispatch(getCartTotal());
  }, [carts]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = async (username, password) => {
    try {
      const response = await Axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });

      const { token } = response.data;
      localStorage.setItem("token", token);
      alert("login successful");
      setIsAuthenticated(true);
      setShowLoginModal(false);
      setLoginError("");
    } catch (error) {
      console.error("Login failed:", error.response?.data);
      setLoginError("Login failed. Please check your credentials.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  const [showSidebar, setShowSidebar] = useState(false);
  const handleCloseSidebar = () => setShowSidebar(false);
  const handleShowSidebar = () => setShowSidebar(true);

// searchbar logic////
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);

  const handleSearchTermChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.length >= 3) {
      dispatch(fetchAsyncSearchProducts(term));
    } else {
      dispatch(fetchAsyncSearchProducts(""));
    }
  };

  const handleKeyDown = (e) => {
    console.log(e.key)
    if (activeSuggestionIndex < searchProducts.length){
      if (e.key === "ArrowUp"  && activeSuggestionIndex > 0) {
        setActiveSuggestionIndex(prev => prev - 1);
      } else if (e.key === "ArrowDown" && activeSuggestionIndex < searchProducts.length - 1) {
        setActiveSuggestionIndex(prev => prev + 1);
      } else if (e.key === "Enter" && activeSuggestionIndex >= 0) {
        if (activeSuggestionIndex >= 0) {
          navigate(`/search/${searchProducts[activeSuggestionIndex].id}`);
          setSearchTerm("");
          setActiveSuggestionIndex(-1);
        }
      }

    }
    else{
      setActiveSuggestionIndex(-1)
    }
  
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.length >= 3 && searchProducts.length > 0) {
      navigate(`/search/${searchProducts[0].id}`);
      setSearchTerm("");
      setActiveSuggestionIndex(-1);
    }
  };

  

  return (
    <>
      <div className="header">
        <nav className="navbar navbar-light nvbar-edit">
          <div className="container">
            <div className="nav-menu navlist-top">
              <button className="navbar-toggler" type="button" onClick={handleShowSidebar}>
                <FontAwesomeIcon icon={faBars} />
              </button>

              <NavLink className="navbar-brand logo-edit" to="/">
                <img className="logo-edit" src="/images/Justright- logo.svg" alt=".." />
              </NavLink>

              <div className="navbar-nav mr-auto navUl-edit d-none d-md-block">
                <form className="search-boxTop" role="search" onSubmit={handleSearchSubmit}>
                  <input
                    className="form-control search-inpBox"
                    type="search"
                    placeholder="What are you shopping for?"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                    onKeyDown={handleKeyDown}
                    
                  />
                  <button type="submit" className="search-icon">
                    <img src="/images/search.svg" alt="Search" />
                  </button>
                </form>

                {searchProducts.length > 0 && searchTerm.length >= 3 && (
                  <div className="suggestions-container">
                    <ul className="suggestions-list">
                      {searchProducts.slice(0,8).map((item, index) => (
                        <li
                          key={item.id}
                          className={index === activeSuggestionIndex ? "active-suggestion" : ""}
                         
                        >
                          <NavLink to="#" className="suggestion-link">
                            {item.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <ul className="navbar-nav navmenu-items">
                <li className="nav-item d-md-none">
                  <NavLink className="nav-link menubar-items">
                    <img src="/images/search.svg" className="icooons" alt="" />
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link menubar-items">
                    <span className="Item-texts">Support</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link menubar-items" to="/wishlist">
                    <img src="/images/heart.svg" className="icooons" alt="" />
                    <span className="Item-texts">Wishlist</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/cart" className="nav-link menubar-items">
                    <img src="/images/bag-2-svgrepo-com.svg" className="icooons" alt="" />
                    <span className="Item-texts">Cart</span>
                    <span className="item-count">{itemsCount}</span>
                  </NavLink>
                </li>
                {isAuthenticated ? (
                  <li className="nav-item">
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle login-menu"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img src="/images/profile-svgrepo-com.svg" className="icooons" alt="" />
                        <span className="Item-texts d-none d-md-block">Profile</span>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end login-Ddown">
                        <li>
                          <a className="dropdown-item profile-logout" href="#">
                            <img src="/images/menubar/profile-svgrepo-com.svg" className="icooons" alt="" />
                            Profile
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item profile-logout border-botom" onClick={handleLogout}>
                            <span className="logout-icon">
                              <i className="fas fa-sign-out-alt"></i>
                            </span>
                            Sign Out
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li className="nav-item">
                    <a className="nav-link menubar-items" onClick={() => setShowLoginModal(true)}>
                      <img src="/images/profile-svgrepo-com.svg" className="icooons" alt="" />
                      <span className="Item-texts">Login</span>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
        <Login
          show={showLoginModal}
          handleClose={() => setShowLoginModal(false)}
          handleLogin={handleLogin}
          errorMessage={loginError}
        />
        <Sidebar show={showSidebar} handleClose={handleCloseSidebar} />
      </div>
    </>
  );
}

export default Header;

