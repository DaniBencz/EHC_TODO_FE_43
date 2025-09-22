import { useState } from 'react';

function App() {
  return (
    <div
      className="min-h-screen bg-gray-900 bg-top bg-no-repeat"
      style={{
        backgroundImage: "url('/bg-desktop-dark.jpg')"
      }}
    >

      <div className="min-h-screen flex flex-col items-center pt-16 px-6">

        <div className="w-full max-w-md mb-6">
          <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-4">
            <div className="w-5 h-5 rounded-full border-2 border-gray-500"></div>
            <input
              type="text"
              placeholder="Create a new todo..."
              className="flex-1 bg-transparent text-gray-300 placeholder-gray-500 outline-none text-lg"
            />
          </div>
        </div>

        <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg overflow-hidden">

          <div className="divide-y divide-gray-700">

            <div className="p-4 flex items-center gap-4 group hover:bg-gray-750">
              <div className="w-5 h-5 rounded-full border-2 border-gray-500"></div>
              <span className="flex-1 text-gray-300">item 1</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
