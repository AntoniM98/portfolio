import { useState, useEffect, useRef } from 'react';
import './ProjectResult.css';

export default function ProjectResult({ currentProject }) {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalSrc, setModalSrc] = useState(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    modalVisibility ? dialogRef.current?.showModal() : dialogRef.current?.close();
  }, [modalVisibility]);

  function toggleModal(src = null) {
    setModalVisibility(!modalVisibility);
    setModalSrc(src);
  }

  return (
    <section className="result-section">
      <div className="result-text">
        <h2>Resultaat</h2>
        {currentProject.result.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        {currentProject.button && (
          <a href={currentProject.button.link} className="play-button" target="_blank">
            {currentProject.button.text}
          </a>
        )}
      </div>

      <div className="result-images-grid">
        {currentProject.images.map((image, index) => (
          <div className="image" key={index}>
            <img src={image} onClick={() => toggleModal(image)} />
            <div className="image-description">{currentProject.imageDescriptions[index]}</div>
          </div>
        ))}
      </div>

      <dialog className="modal" ref={dialogRef}>
        <span className="close-modal-button" onClick={toggleModal}>
          &times;
        </span>
        <img className="modal-image" src={modalSrc} />
      </dialog>
    </section>
  );
}