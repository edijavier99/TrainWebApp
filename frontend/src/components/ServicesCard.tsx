import React from 'react';

interface ServiceCardProps {
  link: string;
  image: string;
  title: string;
  description: string;
  icon: string;
}

export const ServicesCard: React.FC<ServiceCardProps> = ({ link, image, title, description, icon }) => {
  return (
    <article>
      <a href={link} className="block">
        {/* Image of the service */}
        <img 
          alt="service-card-image" 
          className="w-full h-48 object-cover" 
          src={image} 
        />
        
        {/* Service content */}
        <div className="p-5 text-center bg-gray-200 rounded-lg min-h-[200px]">
          <h2 className="text-xl font-bold text-gray-800 mb-3">{title}</h2>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <div className="text-indigo-500 text-2xl mt-3">
            <i className={`fa-solid ${icon}`}></i>
          </div>
        </div>
      </a>
    </article>
  );
};
