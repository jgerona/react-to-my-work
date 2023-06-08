import React, { useState } from "react";
import NavTabs from './NavTabs'
import Portfolio from "./pages/Portfolio";
import About  from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Portfolio");

  const renderPage = () => {
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "About") {
        return <About />;
    }
    if (currentPage === "Contact") {
        return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  //change to backgroundimage
  const styles = {
    background: 'teal',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
  };

  return (
    <div style={styles}>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
