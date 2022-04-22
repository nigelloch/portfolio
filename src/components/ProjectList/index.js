import React, { useState } from 'react';
import Modal from '../Modal';

const ProjectList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Budget Tracker',
      category: 'projects',
      description:
        'The Budget Tracker app is built to allow a user to track income and spending. It is a "PWA" application which allows the app to be used while there is no access to the internet.',
      link: 'https://budget-tracker-nl.herokuapp.com/',
      ghlink: 'https://github.com/nigelloch/budget-tracker'
      },
    {
      name: 'Hawker',
      category: 'projects',
      description:
        'A marketplace for buying and selling items',
        link: 'https://texas-hawker.herokuapp.com/',
        ghlink: 'https://github.com/nigelloch/Hawker'
    },
    {
      name: 'Note Taker',
      category: 'projects',
      description:
        'Note Taker is a an app built to allow users to create, save and maintain their notes.',
        link: 'https://note-taker-nl.herokuapp.com/',
        ghlink: 'https://github.com/nigelloch/note-taker'
    },
    {
      name: 'Social Network API',
      category: 'projects',
      description:
        'I built an API that can be used for a Social Network. Check it out!',
        link: 'https://drive.google.com/file/d/10PTO5PpxfFvO5ra7Z7OEJP02OxRYOMol/view',
        ghlink: 'https://github.com/nigelloch/social-network-api'
    },
    {
      name: 'Venue Buddy',
      category: 'projects',
      description:
        'Venue Buddy is an application which enables users to search for live shows within their area.',
      link: 'https://nigelloch.github.io/Venue-Buddy/',
      ghlink: 'https://github.com/nigelloch/Venue-Buddy'
    },
    {
      name: 'Online Book Store',
      category: 'projects',
      description:
        'I built an online book store which allows users to browse books and save them for later. This application uses the Google Books API.',
        link: 'https://book-store-nl.herokuapp.com/',
        ghlink: 'https://github.com/nigelloch/book-store'
    }
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);
  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };
  
  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      
      <div className="flex-row center">
        {currentPhotos.map((image, i) => (
          <div>
            <p className="project-name col-sm">{image.name}</p>
          <img
            src={require(`../../../public/assets/project-images/${i}.jpg`).default}

            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            id={i}
          />
          
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default ProjectList;
