import React, { useState, useEffect } from 'react';
import './Carousel.css';

function Carousel() {
  const [index, setIndex] = useState(0);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 6000);

    if (firstLoad) {
      // Adicione um pequeno atraso na primeira execução para permitir a animação
      setTimeout(() => {
        setFirstLoad(false);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [index, firstLoad]);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % 2);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + 2) % 2);
  };

  return (
    <div className='Carousel'>
      <div id="carouselExample" className={`carousel slide ${firstLoad ? 'first-load' : ''}`} data-bs-ride="carousel" data-interval="false">
        <div className="carousel-inner">
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img src="/img/banner-2.png" className="d-block w-100" alt="..." style={{maxHeight: '668px'}} />
          </div>
          <div className={`carousel-item ${index === 1 ? 'active' : ''}`}>
            <img src="/img/banner-1.png" className="d-block w-100" alt="..." style={{maxHeight: '668px'}} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" onClick={handlePrev}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" onClick={handleNext}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
