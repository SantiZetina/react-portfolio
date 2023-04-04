// import React from "react";
// import '../styles/NavTab.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

// function NavTabs({currentPage, handlePageChange}){
//     return (
//         <ul className="nav nav-tabs">
//             <li className="nav-item">
//                 <a 
//                 href="#home"
//                 onClick={() => handlePageChange('Home')}
//                 className={currentPage === 'Home' ? 'nav-link active': 'nav-link'}
//                 > 
//                 Home
//                 </a>
//             </li>
//             <li className="nav-item">
//                 <a
//                 href="#contact"
//                 onClick={() => handlePageChange('Contact')}
//                 className={currentPage === 'Contact' ? 'nav-link active': 'nav-link'}
//                 >
//                 Contact
//                 </a>
//             </li>
//             <li className="nav-item">
//                 <a
//                 href="#portfolio"
//                 onClick={() => handlePageChange('Portfolio')}
//                 className={currentPage === 'Portfolio' ? 'nav-link active': 'nav-link'}
//                 >
//                 Portfolio
//                 </a>
//             </li>
//             <li className="nav-item">
//                 <a
//                 href="#resume"
//                 onClick={() => handlePageChange('Resume')}
//                 className={currentPage === 'Resume' ? 'nav-link active': 'nav-link'}
//                 >
//                 Resume
//                 </a>
//             </li>
//         </ul>
//     );
// }

// export default NavTabs;

import React from "react";
import "../styles/NavTab.css";
import "bootstrap/dist/css/bootstrap.min.css";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="nav-container">
      <div className="resume-container">
        <a href="/files/my_resume.pdf" download="my_resume.pdf">
          Download Resume
        </a>
      </div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            type="button"
            onClick={() => handlePageChange("Home")}
            className={`nav-link btn ${
              currentPage === "Home" ? "active" : ""
            }`}
          >
            Home
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            onClick={() => handlePageChange("Contact")}
            className={`nav-link btn ${
              currentPage === "Contact" ? "active" : ""
            }`}
          >
            Contact
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            onClick={() => handlePageChange("Portfolio")}
            className={`nav-link btn ${
              currentPage === "Portfolio" ? "active" : ""
            }`}
          >
            Portfolio
          </button>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
