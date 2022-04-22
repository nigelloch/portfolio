import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";



function Nav(props) {
  const {

    pages,
    setCurrentPage,
    currentPage
  } = props;


  const handleClick = (item) => {
    console.log(item);
    return item;
  };

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> </span> Nigel Loch
        </a>
      </h2>
      <nav>
        <ul className="flex-row">

          <li id="nav-items"className={`mx-2 ${currentPage === pages[0] && 'navActive'}`}>
          <a data-testid="about" href="#about" onClick={() => setCurrentPage(pages[0])}>
              About me
            </a>
          </li>

          <li id="nav-items"className={`mx-2 ${currentPage === pages[1] && 'navActive'}`}>
            <span onClick={() => setCurrentPage(pages[1])}>
              Projects
            </span>
          </li>

          <li id="nav-items"className={`mx-2 ${currentPage === pages[2] && 'navActive'}`}>
            <span onClick={() => setCurrentPage(pages[2])}>
              Resume
            </span>
          </li>

          <li id="nav-items"className={`mx-2 ${currentPage === pages[3] && 'navActive'}`}>
            <span onClick={() => setCurrentPage(pages[3])}>
              Contact
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;