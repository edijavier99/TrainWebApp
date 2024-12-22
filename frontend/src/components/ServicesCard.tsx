export const ServicesCard = (props) => {
  return (
    <article >
      <a href={props.link} className="block">
        {/* Imagen del servicio */}
        <img 
          alt="service-card-image" 
          className="w-full h-48 object-cover" 
          src={props.image} 
        />
        
        {/* Contenido del servicio */}
        <div className="p-5 text-center bg-gray-200 rounded-lg min-h-[200px]">
          <h2 className="text-xl font-bold text-gray-800 mb-3">{props.title}</h2>
          <p className="text-gray-600 text-sm mb-4">{props.description}</p>
          <div className="text-indigo-500 text-2xl mt-3">
            <i className={`fa-solid ${props.icon}`}></i>
          </div>
        </div>
      </a>
    </article>
  );
};
