import React from 'react';

const Dashboard = () => {
  const today = "February 12th";
  const eventsToday = [
    {
      name: "Basketball Pick Up",
      location: "Wilcox Park",
      attendees: "9/10",
      time: "4pm",
    },
  ];
  const futureEvents = [
    {
      name: "Basketball Pick Up",
      location: "Wilcox Park",
      attendees: "5/10",
      date: "3/17/2018 4pm",
    },
    {
      name: "Ultimate Frisbee",
      location: "Uvile Park",
      attendees: "4/12",
      date: "3/17/2018 6pm",
    },
    {
      name: "Soccer 4v4",
      location: "IMA Fields",
      attendees: "8/8",
      date: "4/1/2018 3pm",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header Section */}
      <header className="flex items-center justify-between bg-blue-600 text-white p-4 rounded">
        <h1 className="text-2xl font-bold">Welcome Minh!</h1>
        <div className="flex items-center gap-4">
          <button className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded">New</button>
          <button className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded">Search</button>
          <button className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded">Account</button>
          <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">2</div>
        </div>
      </header>

      {/* Today's Event */}
      <section className="mt-6">
        <h2 className="text-lg font-bold mb-4">
          Today is {today} and you have {eventsToday.length} event{eventsToday.length > 1 ? 's' : ''} today:
        </h2>
        <table className="w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 text-left">Event Name</th>
              <th className="py-2 px-4 text-left">Location Name</th>
              <th className="py-2 px-4 text-left">Attendees</th>
              <th className="py-2 px-4 text-left">Time</th>
            </tr>
          </thead>
          <tbody>
            {eventsToday.map((event, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4">{event.name}</td>
                <td className="py-2 px-4">{event.location}</td>
                <td className="py-2 px-4">{event.attendees}</td>
                <td className="py-2 px-4">{event.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Future Events */}
      <section className="mt-6">
        <h2 className="text-lg font-bold mb-4">Here are your joined future events:</h2>
        <table className="w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 text-left">Event Name</th>
              <th className="py-2 px-4 text-left">Location Name</th>
              <th className="py-2 px-4 text-left">Attendees</th>
              <th className="py-2 px-4 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {futureEvents.map((event, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4">{event.name}</td>
                <td className="py-2 px-4">{event.location}</td>
                <td className="py-2 px-4">{event.attendees}</td>
                <td className="py-2 px-4">{event.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Dashboard;
