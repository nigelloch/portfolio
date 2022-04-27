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
      <div>
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

          {/* <li id="nav-items"className={`mx-2 ${currentPage === pages[2] && 'navActive'}`}>
            <span onClick={() => setCurrentPage(pages[2])}>
            Contact
            </span>
          </li> */}

          <li id="nav-items"className={`mx-2 ${currentPage === pages[2] && 'navActive'}`}>
            <span onClick={() => setCurrentPage(pages[2])}>
              Resume
            </span>
          </li>

        </ul>

      </nav>
      </div>
      <ul className="icons">
          <a href="mailto:nigelloch@gmail.com?subject=Hello there!"target="_blank">
            <img className="mail-icon" src={require(`../../assets/icons/mail.png`).default}
             alt="mail icon"></img>
          </a>
          <a href="https://dribbble.com/NigelLoch"target="_blank">
            <img className="nav-icon" src={require(`../../assets/icons/dribbble.png`).default}
             alt="dribbble logo"></img>
          </a>
          <a href="https://www.linkedin.com/in/nigel-loch-ba212257/"target="_blank">
            <img className="nav-icon" src={require(`../../assets/icons/linkedin.png`).default}
             alt="linkedin logo"></img>
          </a>
          <a href="https://github.com/nigelloch"target="_blank">
            <img className="nav-icon" src={require(`../../assets/icons/github.png`).default}
             alt="github logo"></img>
          </a>
      </ul>
    </header>
  );
}

export default Nav;