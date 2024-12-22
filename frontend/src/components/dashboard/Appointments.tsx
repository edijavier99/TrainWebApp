import React, { useEffect, useState } from "react";
import { useGetFetch } from "@/hooks/useGetFetch";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import LoadingSpinner from "../LoadingSpinner";


const API_TOKEN = 'eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNzE4OTY5Nzc0LCJqdGkiOiJhMjIzMzg5NC1jZDZiLTQyNzItODg2Yy0wMTRkYWZkM2NiZGIiLCJ1c2VyX3V1aWQiOiJjOTJhM2EwNi05YWE3LTRlYzktOTNmOC0zMWI5NjlmMmU1YTkifQ.J1elCetS8sZ_rkMwlNijVeFZwtuC_7ATvToUTOxx5cFNHIOZOjDrB0uFrmuAW6xnt9mdp1qi3g8I51J6AWZHZA';
const headers = {
  'Authorization': `Bearer ${API_TOKEN}`,
  'Content-Type': 'application/json',
};

const localizer = momentLocalizer(moment);

const Appointments = () => {
    const [events, setEvents] = useState([]);
    const { data, loading, error } = useGetFetch('https://api.calendly.com/scheduled_events?user=https://api.calendly.com/users/c92a3a06-9aa7-4ec9-93f8-31b969f2e5a9', {
        headers: headers,
    });

    useEffect(() => {
        if (data) {
            console.log(data.collection);
            const appointments = data.collection.map(appointment => ({
                title: appointment.name,
                start: new Date(appointment.start_time),
                end: new Date(appointment.end_time),
                allDay: false,
            }));
            setEvents(appointments);
        }
    }, [data]);

    if (loading) return <div className="flex items-center h-full justify-center"><LoadingSpinner/></div>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <section>
            <header className='ap-header row col-11 mx-auto my-3 p-4'>
                <h2 className="text-gray-500 text-xl">Appointments</h2>
            </header>
            <main className="row col-md-10 mx-auto my-5">
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                    views={['month', 'week', 'day', 'agenda']} // Incluye la vista de agenda
                    defaultView="month" // Vista por defecto al cargar el calendario
                />
            </main>
        </section>
    );
}

export default Appointments;