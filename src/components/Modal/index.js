import React from 'react';


const Modal = ({ onClose, currentPhoto }) => {
    const {name, category, description, link, index} = currentPhoto;
  
    return (
      <div className="modalBackdrop">
        {console.log(currentPhoto)}
        <div className="modalContainer">
          <h3 className="modalTitle">{name}</h3>
          <img className='proj-image'
          src={require(`../../assets/large/projects/${index}.jpg`).default}
           alt="current category" />
          <p className='desc'>{description}</p>
          <p>{link}</p>
          <button onClick={onClose} type="button">close</button>
        </div>
      </div>
    );
  }
  
  export default Modal;