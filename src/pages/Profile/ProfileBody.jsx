import React from "react"

const ProfileBody = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <img
          className="w-32 h-32 rounded-full border-4 border-teal-500"
          src="https://via.placeholder.com/150"
          alt="Profile"
        />
        <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800">Jharna Khatun</h2>
          <p className="text-teal-600 font-semibold mt-2">MERN Stack Web Developer</p>
          <p className="text-gray-600 mt-4">
            Based in Dhaka, Bangladesh. Passionate about building scalable web
            solutions with a focus on user-friendly experiences.
          </p>
          <div className="mt-4 flex justify-center md:justify-start space-x-4">
            <button className="bg-teal-500 text-white px-4 py-2 rounded-lg shadow hover:bg-teal-600">
              Portfolio
            </button>
            <button className="border-2 border-teal-500 text-teal-500 px-4 py-2 rounded-lg hover:bg-teal-500 hover:text-white">
              Contact
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-700">Skills</h3>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
          <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg">
            JavaScript
          </span>
          <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg">
            React.js
          </span>
          <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg">
            Node.js
          </span>
          <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg">
            MongoDB
          </span>
          <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg">
            Tailwind CSS
          </span>
          <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg">
            Express.js
          </span>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-700">Recent Projects</h3>
        <ul className="mt-4 space-y-4">
          <li className="bg-gray-50 p-4 rounded-lg shadow">
            <h4 className="text-lg font-semibold">Bus Ticket Booking Web App</h4>
            <p className="text-gray-600">
              A JavaScript-based web application for reserving bus tickets
              efficiently.
            </p>
          </li>
          <li className="bg-gray-50 p-4 rounded-lg shadow">
            <h4 className="text-lg font-semibold">Quiz App</h4>
            <p className="text-gray-600">
              Interactive quiz app with dynamic question rendering and score
              tracking.
            </p>
          </li>
          <li className="bg-gray-50 p-4 rounded-lg shadow">
            <h4 className="text-lg font-semibold">
              Dynamic Area Calculation App
            </h4>
            <p className="text-gray-600">
              A reusable, interactive tool for calculating geometric areas.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
};

export default ProfileBody;
