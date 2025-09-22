import { useState, useContext } from 'react';
import { ThemeContext } from './context/themeContext';
import type { ITodoItem, TStatus } from "./types";
import TodoItem from './components/TodoItem';

const DELETE_ME: ITodoItem[] = [
  { id: 1, title: "Complete online JavaScript course", status: "done" },
  { id: 2, title: "Jog around the park 3x", status: "active" },
  { id: 3, title: "10 minutes meditation", status: "active" },
]

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState<ITodoItem[]>(DELETE_ME);
  const [showItems, setShowItems] = useState<TStatus | 'all'>('all');

  const addItem = () => {
    if (newItem.trim()) {
      setItems(prevItems => [
        ...prevItems,
        { id: Date.now(), title: newItem, status: 'active' }
      ]);
      setNewItem("");
    }
  };

  const checkItem = (id: number) => {
    setItems(items.map(item => item.id === id ? { ...item, status: 'done' } : item));
  };

  const uncheckItem = (id: number) => {
    setItems(items.map(item => item.id === id ? { ...item, status: 'active' } : item));
  };

  const clearCompleted = () => {
    setItems(items.filter(item => item.status !== 'done'));
  };

  return (
    <div
      className="min-h-screen bg-gray-900 bg-top bg-no-repeat"
      style={{
        backgroundImage: theme === "light" ? "url('/bg-desktop-light.jpg')" : "url('/bg-desktop-dark.jpg')"
      }}
    >

      <div className="min-h-screen flex flex-col items-center pt-16 px-6">

        <div className="w-full max-w-md flex justify-between items-center mb-8">
          <h1 className="text-white text-4xl font-bold tracking-[0.5em]">TODO</h1>
          <div className="w-6 h-6 cursor-pointer" onClick={toggleTheme}>
            <img src={theme === "dark" ? "/icon-sun.svg" : "/icon-moon.svg"} alt="Toggle theme" className="w-full h-full" />
          </div>
        </div>

        <div className="w-full max-w-md mb-6">
          <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-4">
            <div className="w-5 h-5 rounded-full border-2 border-gray-500"
              onClick={addItem}></div>
            <input
              type="text"
              id='new-item'
              placeholder="Create a new todo..."
              className="flex-1 bg-transparent text-gray-300 placeholder-gray-500 outline-none text-lg"
              value={newItem}
              onChange={e => setNewItem(e.target.value)}
            />
          </div>
        </div>

        <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="divide-y divide-gray-700">
            {items.filter(item => showItems === 'all' || item.status === showItems).map(item =>
              <TodoItem key={item.id} item={item} checkItem={checkItem} uncheckItem={uncheckItem} />)}
          </div>

          <div className="p-4 flex items-center justify-between text-sm text-gray-500 border-t border-gray-700">
            <span>{items.length} items left</span>
            <div className="flex gap-4">
              <button className="text-blue-400 hover:text-white hover:cursor-pointer" onClick={() => setShowItems('all')}>All</button>
              <button className="hover:text-white hover:cursor-pointer" onClick={() => setShowItems('active')}>Active</button>
              <button className="hover:text-white hover:cursor-pointer" onClick={() => setShowItems('done')}>Completed</button>
            </div>
            <button className="hover:text-white hover:cursor-pointer" onClick={clearCompleted}>Clear Completed</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
