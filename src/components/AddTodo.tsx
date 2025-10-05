import { useState, useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
import { useThemeStyles } from '../hooks/useThemeStyles';

interface AddTodoProps {
  onAdd: (text: string) => { success: boolean; error: string | null; };
}

export default function AddTodo({ onAdd }: AddTodoProps) {
  const { theme } = useContext(ThemeContext);
  const [newItem, setNewItem] = useState("");
  const styles = useThemeStyles(theme);

  const handleAddItem = () => {
    const result = onAdd(newItem);
    if (result.success) {
      setNewItem("");
    } else if (result.error) {
      alert(result.error);
    }
  };

  return (
    <div className="w-full max-w-md mb-6">
      <div className={`${styles.card} rounded-lg p-4 flex items-center gap-4 shadow-lg`}>
        <button
          className={`w-5 h-5 rounded-full border-2 ${styles.inputBorder} flex items-center justify-center cursor-pointer transition-colors p-0`}
          onClick={handleAddItem}
          aria-label="Add new todo"
          title="Add new todo (or press Enter)"
          type="button"
        >
          <span className={`${styles.addButton} text-sm font-bold leading-none`}>+</span>
        </button>
        <input
          type="text"
          id='new-item'
          placeholder="Create a new todo..."
          className={`${styles.text} ${styles.placeholder} flex-1 bg-transparent outline-none text-lg`}
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') handleAddItem(); }}
          aria-label="New todo input"
        />
      </div>
    </div>
  );
}
