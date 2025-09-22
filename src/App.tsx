import { useState, useContext } from 'react';
import { ThemeContext } from './context/themeContext';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className="min-h-screen bg-gray-900 bg-top bg-no-repeat"
      style={{
        backgroundImage: theme === "light" ? "url('/bg-desktop-light.jpg')" : "url('/bg-desktop-dark.jpg')"
      }}
    >

      <div className="min-h-screen flex flex-col items-center pt-16 px-6">

        {/* Header */}
        <div className="w-full max-w-md flex justify-between items-center mb-8">
          <h1 className="text-white text-4xl font-bold tracking-[0.5em]">TODO</h1>
          <div className="w-6 h-6 cursor-pointer" onClick={toggleTheme}>
            <img src={theme === "dark" ? "/icon-sun.svg" : "/icon-moon.svg"} alt="Toggle theme" className="w-full h-full" />
          </div>
        </div>

        {/* Input field */}
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
          {/* Todo items */}
          <div className="divide-y divide-gray-700">

            {/* Completed todo */}
            <div className="p-4 flex items-center gap-4 group hover:bg-gray-750">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <img src="/icon-check.svg" alt="Check" className="w-3 h-3" />
              </div>
              <span className="flex-1 text-gray-500 line-through">Item 1</span>
            </div>

            {/* Active todo */}
            <div className="p-4 flex items-center gap-4 group hover:bg-gray-750">
              <div className="w-5 h-5 rounded-full border-2 border-gray-500"></div>
              <span className="flex-1 text-gray-300">Item 2</span>
            </div>
          </div>

          <div className="p-4 flex items-center justify-between text-sm text-gray-500 border-t border-gray-700">
            <span>2 items left</span>
            <div className="flex gap-4">
              <button className="text-blue-400 hover:text-white">All</button>
              <button className="hover:text-white">Active</button>
              <button className="hover:text-white">Completed</button>
            </div>
            <button className="hover:text-white">Clear Completed</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
