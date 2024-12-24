import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { FaClock,FaCheckCircle } from "react-icons/fa";



const BookingCalendar = () => {
  // Configuramos el día actual por defecto
  const [date, setDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Generar un arreglo de horas de 9 AM a 5 PM
  const availableHours = [
    "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  // Función para manejar la selección de hora
  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  return (
<section className="p-6  border rounded-lg flex flex-col lg:flex-row justify-center lg:justify-around">
  {/* Resumen del evento */}
  <div className="w-auto mb-8 lg:mb-0">
    <div className="p-4 lg:max-w-sm">
      <h2 className="text-xl font-bold text-[#ff7f50]">First Introduction</h2>
      <p className="mt-1 text-lg">
        <span className="font-semibold"></span> Join us for an engaging session where we’ll review the team’s progress, celebrate achievements, and set clear goals for the upcoming month. Let’s align our strategies and move forward together!
      </p>
      <span className="mt-1 text-lg flex space-x-3 items-center">
        <FaClock /> <span>1 hour</span>
      </span>
      <ul className="mt-4 space-y-2 text-lg">
        <li className="flex items-center space-x-2">
          <FaCheckCircle className="text-[#ff7f50]" />
          <span>Review the key milestones from the past month.</span>
        </li>
        <li className="flex items-center space-x-2">
          <FaCheckCircle className="text-[#ff7f50]" />
          <span>Discuss challenges and identify solutions together.</span>
        </li>
        <li className="flex items-center space-x-2">
          <FaCheckCircle className="text-[#ff7f50]" />
          <span>Set actionable goals for the upcoming month.</span>
        </li>
      </ul>
    </div>
  </div>

  {/* Calendario y selección de horas */}
  <div className="p-6 rounded-lg shadow-lg flex  flex-col items-center sm:items-start justify-start  sm:space-x-5 sm:flex-row w-full lg:w-2/3">
    <div className="w-auto mb-8 flex">
      <Calendar
        mode="single"
        selected={date}
        onSelect={(day: Date | undefined) => {
          if (day) {
            setDate(day);
          }
        }}
        className="rounded-md border shadow-md mx-auto inline-block" // Aquí usamos inline-block para ajustar al contenido
      />
    </div>
    <AvailableHours
      availableHours={availableHours}
      selectedTime={selectedTime}
      onSelect={handleTimeSelect}
      date={date}
    />
  </div>
</section>


  );
};

export default BookingCalendar;







import { Button } from "../ui/button";

interface AvailableHoursProps {
  availableHours: string[];
  selectedTime: string | null;
  onSelect: (time: string) => void;
  date: Date;
}

export const AvailableHours = ({ availableHours, selectedTime, onSelect, date }: AvailableHoursProps) => {
  return (
    <div className="w-full max-w-lg">
     <h3 className="text-md  font-semibold text-center mb-4">
        Select a time for {`${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getFullYear()).slice(-2)}`}
    </h3>

      {/* Botones de hora - Disposición de 2 columnas en pantallas grandes y 1 en móviles */}
      <div className="grid grid-cols-3 sm:grid-cols-2   xl:grid-cols-4 gap-4">
        {availableHours.map((hour) => (
          <Button
            key={hour}
            onClick={() => onSelect(hour)}
            className={`
              ${
                selectedTime === hour
                  ? "bg-[#FF7F50] text-white"
                  : "bg-black dark:bg-white hover:bg-[#FF7F50]"
              } 
              transition-all duration-300 border  rounded-md
            `}
          >
            {hour}
          </Button>
        ))}
      </div>
    </div>
  );
};
