'use client';
import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';


const events = [
  {
    title: "First Term Exams",
    start: new Date(2025, 2, 24, 9, 0), // 15 March 2025 09:00
    end: new Date(2025, 2, 28, 14, 0), // 15 March 2025 14:00
    desc: "First term exams for all grades",
    location: "School Campus"
  },
  {
    title: "Human Rights Day",
    start: new Date(2025, 2, 21, 8, 30),
    end: new Date(2025, 2, 21, 16, 0),
    desc: "Public holiday",
    location: "Public Holiday"
  },
  {
    title: "Parent-Teacher Conference",
    start: new Date(2025, 3, 10, 16, 0),
    end: new Date(2025, 3, 10, 19, 0),
    desc: "Individual meetings with teachers",
    location: "School Classrooms"
  }
]



const localizer = momentLocalizer(moment);

const EventModal = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-2xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-blue-900"
        >
          ✕
        </button>
        
        <h2 className="text-3xl font-bold text-gray-400 mb-4">{event.title}</h2>
        
        <div className="space-y-4">
          <div className="flex items-center text-gray-400">
            <span className="w-24 font-semibold">When:</span>
            <span>
              {moment(event.start).format('dddd, MMMM D [•] h:mm a')} - 
              {moment(event.end).format('h:mm a')}
            </span>
          </div>
          
          <div className="flex items-center text-gray-400">
            <span className="w-24 font-semibold">Where:</span>
            <span>{event.location}</span>
          </div>
          
          {event.desc && (
            <div className="flex text-gray-400">
              <span className="w-24 font-semibold">Details:</span>
              <p className="flex-1">{event.desc}</p>
            </div>
          )}
          
          <div className="mt-6">
            <button
              onClick={onClose}
              className="bg-gray-400 text-back px-6 py-2 rounded-lg hover:bg-blue-900"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const EventComponent = ({ event }) => {
  return (
    <div className="rbc-event-content">
      <strong>{event.title}</strong>
      <p className="text-sm">{moment(event.start).format('h:mm a')}</p>
    </div>
  );
};

export default function EventsCalendar() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="h-screen p-8 bg-school-light relative">
      <div className="bg-white rounded-xl shadow-lg p-6 text-black">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 700 }}
          eventPropGetter={() => ({
            style: {
              backgroundColor: '#00418c',
              borderColor: '#002b5c',
              color: 'white'
            }
          })}
          components={{
            event: EventComponent,
            toolbar: (props) => (
              <div className="rbc-toolbar mb-4">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => props.onNavigate('PREV')}
                    className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-blue-900"
                  >
                    Back
                  </button>
                  <span className="text-xl font-semibold text-school-primary">
                    {props.label}
                  </span>
                  <button
                    onClick={() => props.onNavigate('NEXT')}
                    className="bg-school-primary text-white px-4 py-2 rounded hover:bg-school-dark"
                  >
                    Next
                  </button>
                </div>
              </div>
            )
          }}
          onSelectEvent={handleSelectEvent}
        />
      </div>

      <EventModal 
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
}

