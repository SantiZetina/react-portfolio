import React, { useState } from "react";
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function PortfolioContainer(){
    const [currentPage, setCurrentPage] = useState('About')

    const renderPage = () => {
        switch (currentPage) {
          case 'Contact':
            return <Contact />;
          case 'Resume':
            return <Resume />;
          case 'Portfolio':
            return <Portfolio />;
          default:
            return <Home />;
        }
      };

      const handlePageChange = (page) => setCurrentPage(page);

      return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

            {renderPage()}
        </div>
      )
}