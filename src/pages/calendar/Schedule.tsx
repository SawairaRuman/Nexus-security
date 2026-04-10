import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";

export const Schedule = () => {
  // 1. Meetings ko save karne ke liye State banayein
  const [events, setEvents] = useState([
    { title: 'Investor Pitch', date: '2026-04-15', color: '#4c51bf' }
  ]);

  // 2. Click karne par naya schedule add karne ka function
  const handleDateClick = (info: { dateStr: string }) => {
    const title = prompt('Meeting ka Title likhein (e.g. Project Review):');
    
    if (title) {
      const newEvent = {
        title: title,
        date: info.dateStr,
        color: '#f59e0b' // Nayi meeting ke liye yellow color
      };
      // Purani meetings mein nayi meeting add karna
      setEvents([...events, newEvent]);
      alert('Schedule Set: ' + title + ' on ' + info.dateStr);
    }
  };

  return (
    <div style={{ padding: '20px', backgroundColor: 'white', borderRadius: '12px' }}>
      <h2 style={{ marginBottom: '20px', color: '#1a202c', fontWeight: 'bold' }}>
        Nexus Meeting Scheduler
      </h2>
      <p style={{ color: '#666', marginBottom: '10px' }}>💡 Click and schedule your upcoming meetings.</p>
      
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        selectable={true}
        dateClick={handleDateClick}
        events={events} 
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek'
        }}
        height="70vh"
      />
    </div>
  );
};
