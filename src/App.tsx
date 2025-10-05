import { useState, useContext } from 'react';
import { ThemeContext } from './context/themeContext';
import type { TStatus } from "./types";
import { useTodos } from './hooks/useTodos';
import { useThemeStyles } from './hooks/useThemeStyles';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  const { theme } = useContext(ThemeContext);
  const [showItems, setShowItems] = useState<TStatus | 'all'>('all');
  const {
    addItem,
    checkItem,
    uncheckItem,
    deleteItem,
    clearCompletedItems,
    getFilteredItems,
    getActiveCount,
  } = useTodos();

  const styles = useThemeStyles(theme);

  return (
    <div
      className={`min-h-screen ${styles.background} bg-top bg-no-repeat`}
      style={{
        backgroundImage: theme === "light" ? "url('/bg-desktop-light.jpg')" : "url('/bg-desktop-dark.jpg')"
      }}
    >
      <div className="min-h-screen flex flex-col items-center pt-16 px-6">
        <Header />

        <AddTodo onAdd={addItem} />

        <TodoList
          items={getFilteredItems(showItems)}
          activeCount={getActiveCount()}
          showItems={showItems}
          onFilterChange={setShowItems}
          checkItem={checkItem}
          uncheckItem={uncheckItem}
          deleteItem={deleteItem}
          clearCompletedItems={clearCompletedItems}
        />
      </div>
    </div>
  );
}

export default App;
