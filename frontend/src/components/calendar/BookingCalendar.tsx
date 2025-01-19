import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { FaClock, FaCheckCircle } from "react-icons/fa";
import { ToastWithConfirm } from "../ToastWithConfirm";

const BookingCalendar = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleConfirmation = () => {
    console.log("Confirmation triggered");
  };

  const formattedDate = date.toLocaleDateString("en-UK", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const availableHours = [
    "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  return (
    <section className="p-6 border rounded-lg flex flex-col justify-center lg:justify-around">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-around">
        <div className="w-auto mb-8 lg:mb-0">
          <div className="p-4 lg:max-w-sm">
            <h2 className="text-xl font-bold text-[#ff7f50]">First Introduction</h2>
            <p className="mt-1 text-lg">
              Join us for an engaging session where we’ll review the team’s progress, celebrate achievements, and set clear goals for the upcoming month.
            </p>
            <span className="mt-1 text-lg flex space-x-3 items-center">
              <FaClock /> <span>1 hour</span>
            </span>
            <ul className="mt-4 space-y-2 text-lg">
              <li className="flex items-center space-x-2">
                <FaCheckCircle className="text-[#ff7f50]" />
                <span>Review key milestones</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaCheckCircle className="text-[#ff7f50]" />
                <span>Discuss challenges and solutions</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaCheckCircle className="text-[#ff7f50]" />
                <span>Set actionable goals</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="p-6 rounded-lg shadow-lg flex flex-col items-center sm:items-start justify-start sm:space-x-5 sm:flex-row w-full lg:w-2/3">
          <div className="w-auto mb-8 flex">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(day: Date | undefined) => {
                if (day) {
                  setDate(day);
                }
              }}
              className="rounded-md border shadow-md mx-auto inline-block"
            />
          </div>
          <AvailableHours
            availableHours={availableHours}
            selectedTime={selectedTime}
            onSelect={handleTimeSelect}
            date={date}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <ToastWithConfirm
          title="Continue"
          onConfirm={handleConfirmation}
          event="Confirm the date and time"
          description={`Booked for ${formattedDate} at ${selectedTime || "a time to be selected"}.`}
          isDisabled={!selectedTime} // Deshabilitar el botón hasta que se seleccione una hora
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
