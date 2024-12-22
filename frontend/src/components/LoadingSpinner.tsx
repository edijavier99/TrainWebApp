import { ImSpinner } from "react-icons/im";
import  { useEffect } from 'react';

const LoadingSpinner= () => {
  useEffect(() => {
    // Cambiar la opacidad después de 2 segundos
    const timer = setTimeout(() => {
    }, 500);
    // Limpieza del timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex  justify-center mt-4">
      <div className="loader">
        <ImSpinner   className="spinner text-[#0D6EFD] text-xl animate-spin"/>
      </div>
    </div>
  );
};

export default LoadingSpinner