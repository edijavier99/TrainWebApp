import { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";

interface Props {
    imageUrl: string;
    title: string;
    description: string;
    points: string[];
}

const ParallexCard = ({ imageUrl, title, description, points }: Props) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    // Detectamos si estamos en un dispositivo móvil
    useEffect(() => {
        const checkMobile = () => {
            if (window.innerWidth <= 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };
        
        checkMobile(); // Llamamos una vez al inicio
        window.addEventListener("resize", checkMobile); // Escuchamos cambios en el tamaño de la ventana

        return () => {
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    return (
        <article className="flex flex-col lg:flex-row items-center lg:space-x-8 py-6 lg:py-16">
            {/* Left Column */}
            <div className="lg:w-1/2 py-6 lg:py-0 space-y-6">
                <h4 className="text-2xl font-semibold">{title}</h4>
                <p className="text-md text-gray-500 leading-relaxed">{description}</p>
                <hr className="border-t-1 border-gray-900 my-4" />
                <h3 className="font-semibold text-lg text-[#FF7F50]">Key Benefits</h3>
                {points && (
                    <ul className="list-disc list-inside text-gray-500 space-y-2">
                        {points.map((point, index) => (
                            <li key={index} className="flex space-x-3 items-center">
                                <GoDotFill className="text-[#FF7F50]" /> <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Right Column (Image) */}
            <div
                className={`parallax w-full lg:w-1/2 h-[400px] rounded-lg shadow-lg transition-all duration-300 ${isMobile ? 'bg-cover' : 'bg-fixed'}`}
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    borderRadius: "0.5rem", // Añadí un borde redondeado para dar un aspecto suave
                    transform: isMobile ? `translateY(${window.scrollY * 0.2}px)` : "none", // Aplica el desplazamiento solo en móvil
                }}
            ></div>
        </article>
    );
};

export default ParallexCard;
