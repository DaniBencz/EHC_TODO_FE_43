import { useState, useContext } from 'react';
import { ThemeContext } from './context/themeContext';
import type { ITodoItem, TStatus } from "./types";
import TodoItem from './components/TodoItem';
import Header from './components/Header';

const DELETE_ME: ITodoItem[] = [
  { id: 0, title: "Complete online JavaScript course", status: "done" },
  { id: 1, title: "Jog around the park 3x", status: "active" },
  { id: 2, title: "10 minutes meditation", status: "done" },
  { id: 3, title: "Read for 1 hour", status: "active" },
  { id: 4, title: "Pick up groceries", status: "active" },
  { id: 5, title: "Complete Todo App on Frontend Mentor", status: "active" }
];

function App() {
  const { theme } = useContext(ThemeContext);
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState<ITodoItem[]>(DELETE_ME);
  const [showItems, setShowItems] = useState<TStatus | 'all'>('all');

  const styles = {
    background: theme === "dark" ? "bg-gray-900" : "bg-gray-100",
    card: theme === "dark" ? "bg-gray-800" : "bg-white",
    text: theme === "dark" ? "text-gray-300" : "text-gray-700",
    textMuted: "text-gray-500",
    placeholder: theme === "dark" ? "placeholder-gray-500" : "placeholder-gray-400",
    border: theme === "dark" ? "border-gray-700" : "border-gray-200",
    divide: theme === "dark" ? "divide-gray-700" : "divide-gray-200",
    inputBorder: theme === "dark" ? "border-gray-500 hover:border-blue-400" : "border-gray-300 hover:border-blue-500",
    hover: theme === "dark" ? "hover:text-white" : "hover:text-gray-800",
    addButton: theme === "dark" ? "text-gray-400" : "text-gray-400"
  };

  const getFilterStyle = (filter: TStatus | 'all') => {
    const isActive = showItems === filter;
    const baseStyle = isActive ? "text-blue-500" : styles.textMuted;
    const hoverStyle = isActive ? "" : styles.hover;
    return `${baseStyle} ${hoverStyle} cursor-pointer`;
  };

  const addItem = () => {
    if (newItem.trim()) {
      const itemExists = items.some(item => item.title === newItem);
      if (itemExists) {
        alert("Item already exists");
        return;
      }

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

  const deleteItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const clearCompletedItems = () => {
    setItems(items.filter(item => item.status !== 'done'));
  };

  return (
    <div
      className={`min-h-screen ${styles.background} bg-top bg-no-repeat`}
      style={{
        backgroundImage: theme === "light" ? "url('/bg-desktop-light.jpg')" : "url('/bg-desktop-dark.jpg')"
      }}
    >
      <div className="min-h-screen flex flex-col items-center pt-16 px-6">

        <Header />

        {/* Add new item, TODO: move to component */}
        <div className="w-full max-w-md mb-6">
          <div className={`${styles.card} rounded-lg p-4 flex items-center gap-4 shadow-lg`}>
            <div
              className={`w-5 h-5 rounded-full border-2 ${styles.inputBorder} flex items-center justify-center cursor-pointer transition-colors`}
              onClick={addItem}
            >
              <span className={`${styles.addButton} text-sm font-bold leading-none`}>+</span>
            </div>
            <input
              type="text"
              id='new-item'
              placeholder="Create a new todo..."
              className={`${styles.text} ${styles.placeholder} flex-1 bg-transparent outline-none text-lg`}
              value={newItem}
              onChange={e => setNewItem(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') addItem(); }}
            />
          </div>
        </div>

        {/* Todo List */}
        <div className={`w-full max-w-md ${styles.card} rounded-lg shadow-lg overflow-hidden`}>
          <div className={`${styles.divide} divide-y`}>
            {items
              .filter(item => showItems === 'all' || item.status === showItems)
              .map(item => (
                <TodoItem
                  key={item.id}
                  item={item}
                  checkItem={checkItem}
                  uncheckItem={uncheckItem}
                  deleteItem={deleteItem}
                />
              ))
            }
          </div>

          {/* Footer, TODO: move to component */}
          <div className={`p-4 flex items-center justify-between text-sm ${styles.textMuted} ${styles.border} border-t`}>
            <span>{items.filter(item => item.status === 'active').length} items left</span>

            <div className="flex gap-4">
              <button className={getFilterStyle('all')} onClick={() => setShowItems('all')}>
                All
              </button>
              <button className={getFilterStyle('active')} onClick={() => setShowItems('active')}>
                Active
              </button>
              <button className={getFilterStyle('done')} onClick={() => setShowItems('done')}>
                Completed
              </button>
            </div>

            <button className={`${styles.hover} cursor-pointer`} onClick={clearCompletedItems}>
              Clear Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
