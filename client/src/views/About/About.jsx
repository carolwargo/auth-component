import React from 'react';
import {
  MDBBtn, MDBRow,MDBCol, MDBContainer
 
} from 'mdb-react-ui-kit';
import Graffiti2 from '../../assets/images/Graffiti2.png';;
// Correct import statement ../../components/DesignCarousel/Carousel
export default function About() {
 

  return (
    <header>


      <div
        id='intro-example'
        className='p-5 text-center bg-image'
           style={{
          backgroundImage: `url(${Graffiti2})`,
          backgroundSize: 'cover', // Set the background size to cover the entire viewport
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed', // Optional: Keep the background fixed while scrolling
        }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Graphic Design</h1>
              <h5 className='mb-4'>Best &amp; free guide of responsive web design</h5>
              <MDBBtn
                className='m-2'
                tag='button'
                outline
                size='lg'
                rel='nofollow'
                target='_blank'
                href='https://www.youtube.com/watch?v=c9B4TPnak1A'
              >
                Start tutorial
              </MDBBtn>
              <MDBBtn
                className='m-2'
                tag='button'
                outline
                size='lg'
                target='_blank'
                href='./Contact'
              >
                Start Now
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>



      {/*carousel start////////////////////////*/}

      <MDBContainer classNameName='p-4'>
      <MDBRow>
      <MDBCol>
  <div id="carouselExampleInterval2" className="carousel slide" data-mdb-ride="carousel" style={{
    borderRadius: '10px', // Set the border radius
    overflow: 'hidden', // Hide overflow to match border radius
  }}>
    <div className="carousel-inner">
      <div className="carousel-item active" data-mdb-interval="10000">
        <div className="card">
          <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" className="card-img-top" alt="Wild Landscape"/>
          <div className="card-body">
            <h5 className="card-title">Card Title 1</h5>
            <p className="card-text">Some text for the card.</p>
          </div>
        </div>
      </div>
      <div className="carousel-item" data-mdb-interval="2000">
        <div className="card">
          <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" className="card-img-top" alt="Camera"/>
          <div className="card-body">
            <h5 className="card-title">Card Title 2</h5>
            <p className="card-text">Some text for the card.</p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="card">
          <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" className="card-img-top" alt="Exotic Fruits"/>
          <div className="card-body">
            <h5 className="card-title">Card Title 3</h5>
            <p className="card-text">Some text for the card.</p>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" data-mdb-target="#carouselExampleInterval2" type="button" data-mdb-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" data-mdb-target="#carouselExampleInterval2" type="button" data-mdb-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</MDBCol>
         <MDBCol>
  <div id="carouselExampleInterval2" className="carousel slide" data-mdb-ride="carousel" style={{
    borderRadius: '10px', // Set the border radius
    overflow: 'hidden', // Hide overflow to match border radius
  }}>
    <div className="carousel-inner">
      <div className="carousel-item active" data-mdb-interval="10000">
        <div className="card">
          <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" className="card-img-top" alt="Wild Landscape"/>
          <div className="card-body">
            <h5 className="card-title">Card Title 1</h5>
            <p className="card-text">Some text for the card.</p>
          </div>
        </div>
      </div>
      <div className="carousel-item" data-mdb-interval="2000">
        <div className="card">
          <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" className="card-img-top" alt="Camera"/>
          <div className="card-body">
            <h5 className="card-title">Card Title 2</h5>
            <p className="card-text">Some text for the card.</p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="card">
          <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" className="card-img-top" alt="Exotic Fruits"/>
          <div className="card-body">
            <h5 className="card-title">Card Title 3</h5>
            <p className="card-text">Some text for the card.</p>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" data-mdb-target="#carouselExampleInterval2" type="button" data-mdb-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" data-mdb-target="#carouselExampleInterval2" type="button" data-mdb-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</MDBCol>

<MDBCol>
  <div id="carouselExampleInterval2" className="carousel slide" data-mdb-ride="carousel" style={{
    borderRadius: '10px', // Set the border radius
    overflow: 'hidden', // Hide overflow to match border radius
  }}>
    <div className="carousel-inner">
      <div className="carousel-item active" data-mdb-interval="10000">
        <div className="card">
          <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" className="card-img-top" alt="Wild Landscape"/>
          <div className="card-body">
            <h5 className="card-title">Card Title 1</h5>
            <p className="card-text">Some text for the card.</p>
          </div>
        </div>
      </div>
      <div className="carousel-item" data-mdb-interval="2000">
        <div className="card">
          <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" className="card-img-top" alt="Camera"/>
          <div className="card-body">
            <h5 className="card-title">Card Title 2</h5>
            <p className="card-text">Some text for the card.</p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="card">
          <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" className="card-img-top" alt="Exotic Fruits"/>
          <div className="card-body">
            <h5 className="card-title">Card Title 3</h5>
            <p className="card-text">Some text for the card.</p>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" data-mdb-target="#carouselExampleInterval2" type="button" data-mdb-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" data-mdb-target="#carouselExampleInterval2" type="button" data-mdb-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</MDBCol><MDBCol>
  <div id="carouselExampleInterval2" className="carousel slide" data-mdb-ride="carousel" style={{
    borderRadius: '10px', // Set the border radius
    overflow: 'hidden', // Hide overflow to match border radius
  }}>
    <div className="carousel-inner">
      <div className="carousel-item active" data-mdb-interval="10000">
        <div className="card">
          <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" className="card-img-top" alt="Wild Landscape"/>
          <div className="card-body">
            <h5 className="card-title">Card Title 1</h5>
            <p className="card-text">Some text for the card.</p>
          </div>
        </div>
      </div>
      <div className="carousel-item" data-mdb-interval="2000">
        <div className="card">
          <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" className="card-img-top" alt="Camera"/>
          <div className="card-body">
            <h5 className="card-title">Card Title 2</h5>
            <p className="card-text">Some text for the card.</p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="card">
          <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" className="card-img-top" alt="Exotic Fruits"/>
          <div className="card-body">
            <h5 className="card-title">Card Title 3</h5>
            <p className="card-text">Some text for the card.</p>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" data-mdb-target="#carouselExampleInterval2" type="button" data-mdb-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" data-mdb-target="#carouselExampleInterval2" type="button" data-mdb-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</MDBCol>

            </MDBRow>
        </MDBContainer>
    </header>
  );
}
/*
const carouselData = [
    {
      id: 1,
      images: [
        'https://mdbcdn.b-cdn.net/img/new/slides/041.webp',
        'https://mdbcdn.b-cdn.net/img/new/slides/042.webp',
        'https://mdbcdn.b-cdn.net/img/new/slides/043.webp',
      ],
    },
    // Add more carousel data if needed
  ];
  
  export default function App() {
    return (
      <MDBContainer className='p-4'>
        <MDBRow>
          {carouselData.map((carousel) => (
            <MDBCol key={carousel.id}>
              <div
                id={`carouselExampleInterval${carousel.id}`}
                className='carousel slide'
                data-mdb-ride='carousel'
                style={{
                  borderRadius: '10px', // Set the border radius
                  overflow: 'hidden', // Hide overflow to match border radius
                }}
              >
                <div className='carousel-inner'>
                  {carousel.images.map((img, imgIndex) => (
                    <div
                      key={imgIndex}
                      className={`carousel-item${imgIndex === 0 ? ' active' : ''}`}
                      data-mdb-interval='10000'
                    >
                      <img src={img} className='d-block w-100' alt={`Image ${imgIndex + 1}`} />
                    </div>
                  ))}
                </div>
                <button
                  className='carousel-control-prev'
                  data-mdb-target={`#carouselExampleInterval${carousel.id}`}
                  type='button'
                  data-mdb-slide='prev'
                >
                  <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                  <span className='visually-hidden'>Previous</span>
                </button>
                <button
                  className='carousel-control-next'
                  data-mdb-target={`#carouselExampleInterval${carousel.id}`}
                  type='button'
                  data-mdb-slide='next'
                >
                  <span className='carousel-control-next-icon' aria-hidden='true'></span>
                  <span className='visually-hidden'>Next</span>
                </button>
              </div>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    );
  }
  */