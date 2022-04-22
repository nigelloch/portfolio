import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import ProjectList from './components/ProjectList';

function App() {
 
  const [pages] =  useState([<About/>,<Gallery/>,<Resume/>,<ContactForm/>])
  const [currentPage, setCurrentPage] = useState(pages[0])


  return (
    <div>
      <Nav

        pages = {pages}
        setCurrentPage = {setCurrentPage}
        currentPage = {currentPage}
      ></Nav>
      <main>
          {currentPage}
      </main>
    </div>
  );
}

export default App;
