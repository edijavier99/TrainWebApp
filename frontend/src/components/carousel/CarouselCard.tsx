// import { BookingButton } from "./bookingButton";

export const CarouselItem = ({  title, sloganDescription, slogan, active, customClass, video, videoTitle }) => {
  return (
    <div className={`carousel-item h-100 ${active ? 'active' : ''} ${customClass}`} data-bs-interval="5000" >
   
      <video
        style={{zIndex: 99999}}
        width="100%"   // Ajusta el ancho según sea necesario
        height="100%"  // Mantiene la relación de aspecto  
        autoPlay  
        loop
        muted   // Muestra controles de reproducción (play, pause, etc.)
        title={title}
      >
        <source src={videoTitle} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="carousel-caption ">
        <div
          className="d-flex flex-column  "
          id="slogan"
          >
            <h1 className="slogan-header mb-5">{slogan}</h1>
            <p className="slogan-description">{sloganDescription}</p>
        </div>
        <div className="mx-auto bookingBtnContainer">
          {/* <BookingButton /> */}
        </div>
      </div>
    </div>
  );
};