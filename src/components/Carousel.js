import './Carousel.css'

function Carousel() {
  return (
    <div className='Carousel'>
       <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/img/banner-2.png" class="d-block w-100" alt="..." style={{maxHeight: '668px'}} />
    </div>
    <div class="carousel-item">
      <img src="/img/banner-1.png" class="d-block w-100" alt="..." style={{maxHeight: '668px'}} />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

</div>

    </div>
  )
}

export default Carousel