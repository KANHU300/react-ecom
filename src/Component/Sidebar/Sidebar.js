// import React from "react";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { getAllCategories } from "../../store/categorySlice";

// const Sidebar = ({ show, handleClose }) => {
//   const categories = useSelector(getAllCategories);

//   return (
//     <>
//       <Offcanvas show={show} onHide={handleClose} className="sidebar-top">
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>
//             <div className="cat-title fs-17 text-uppercase fw-6 ls-1h">
//               All Categories
//             </div>
//           </Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <div className="sidebar-cnt">
//             <ul className="cat-list">
//               {categories.map((category, id) => (
//                 <li key={id} className="">
//                   <Link to={`category`} className="cat-list-link text-capitalize">
//                     {category}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// };

// export default Sidebar;

// Sidebar.js

import React, { useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAsyncCategories } from "../../store/categorySlice";

const Sidebar = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.category.categories);

  useEffect(() => {
    dispatch(fetchAsyncCategories());
  }, [dispatch]);

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} className="sidebar-top">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className="cat-title fs-17 text-uppercase fw-6 ls-1h">
              All Categories
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="sidebar-cnt ">
            <ul className="cat-list list-unstyled">
              {categories.map((category, idx) => (
                <li key={idx} className="text-decoration-none" onClick={handleClose}>
                  <Link to={`category/${category}`} className="cat-list-link text-capitalize text-decoration-none">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;

