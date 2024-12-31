import React, { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState('Event Name');
  const [results, setResults] = useState([
    {
      name: "Basketball 3v3",
      location: "Wilcox Park",
      members: "6/6",
      date: "2/25/2018 4pm",
      creator: "Tim Chen",
      isFull: true,
    },
    {
      name: "Basketball 5v5",
      location: "Uvile Park",
      members: "5/10",
      date: "3/12/2018 6pm",
      creator: "Steve Kerr",
      isFull: false,
    },
    {
      name: "Basketball Pick",
      location: "IMA Fields",
      members: "7/15",
      date: "4/3/2018 3pm",
      creator: "Minh Nguyen",
      isFull: false,
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const handleSearch = () => {
    console.log('Searching for:', searchTerm, 'Filter by:', filterBy);
    // Simulez une recherche et un filtrage.
  };

  const handleJoin = (eventName) => {
    console.log(`Joining event: ${eventName}`);
    // Ajoutez ici une logique pour rejoindre un événement (API call).
  };

  const paginatedResults = results.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(results.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header Section */}
      <header className="flex items-center justify-between bg-blue-600 text-white p-4 rounded">
        <h1 className="text-2xl font-bold">Search Events</h1>
        <div className="flex items-center gap-4">
          <button className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded">Home</button>
          <button className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded">New</button>
          <button className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded">Account</button>
        </div>
      </header>

      {/* Search Bar */}
      <section className="mt-6">
        <div className="flex gap-4 mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Search for an event..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
          >
            <option>Event Name</option>
            <option>Location</option>
          </select>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSearch}
          >
            Submit
          </button>
        </div>
      </section>

      {/* Results Table */}
      <section>
        <table className="w-full bg-white rounded shadow mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 text-left">Event Name</th>
              <th className="py-2 px-4 text-left">Location Name</th>
              <th className="py-2 px-4 text-left">Members</th>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Creator</th>
              <th className="py-2 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedResults.map((event, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4">{event.name}</td>
                <td className="py-2 px-4">{event.location}</td>
                <td className="py-2 px-4">{event.members}</td>
                <td className="py-2 px-4">{event.date}</td>
                <td className="py-2 px-4">{event.creator}</td>
                <td className="py-2 px-4">
                  {event.isFull ? (
                    <span className="text-red-500">Full</span>
                  ) : (
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => handleJoin(event.name)}
                    >
                      Join
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Pagination */}
      <section className="flex justify-center gap-2">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`px-3 py-1 rounded ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </section>
    </div>
  );
};

export default Search;
