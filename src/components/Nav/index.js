import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";



function Nav(props) {
  const {
    // categories = [],
    // setCurrentCategory,
    // currentCategory,
    // contactSelected,
    // setContactSelected
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
              Contact
            </span>
          </li>

          <li id="nav-items"className={`mx-2 ${currentPage === pages[2] && 'navActive'}`}>
            <span onClick={() => setCurrentPage(pages[2])}>
              Projects
            </span>
          </li>
          {/* {categories.map((category) => (
            <li
                className={`mx-1 ${
                  currentCategory.name === category.name && !contactSelected && `navActive`
                  }`}
                key={category.name}
              >
              <span onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))} */}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;