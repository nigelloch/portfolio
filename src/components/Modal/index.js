import React from 'react';


const Modal = ({ onClose, currentPhoto }) => {
    const {name, category, description, link, ghlink, index} = currentPhoto;
  
    return (
      <div className="modalBackdrop">
        {console.log(currentPhoto)}
        <div className="modalContainer">
          <h3 className="modalTitle">{name}</h3>
          <img className='proj-image'
          src={require(`../../../public/assets/project-images/${index}.jpg`).default}
           alt="current category" />
          <p className='desc'>{description}</p>
          <div className='linksBtn'>
            <a style={{cursor: 'pointer'}} href={link}target="_blank">Deployed Site</a>
            <a style={{cursor: 'pointer'}} href={ghlink}target="_blank">GitHub Repo</a>
            <button  onClick={onClose} type="button">close</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Modal;