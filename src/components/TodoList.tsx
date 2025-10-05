import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
import { useThemeStyles } from '../hooks/useThemeStyles';
import type { TStatus, ITodoItem, TCheckItem } from '../types';
import TodoItem from './TodoItem';
import FilterButtons from './FilterButtons';

interface TodoListProps {
  items: ITodoItem[];
  activeCount: number;
  showItems: TStatus | 'all';
  onFilterChange: (filter: TStatus | 'all') => void;
  checkItem: TCheckItem;
  uncheckItem: TCheckItem;
  deleteItem: TCheckItem;
  clearCompletedItems: () => void;
}

const EmptyTodoList = ({ textMutedStyle }: { textMutedStyle: string; }) => (
  <div className={`p-8 text-center ${textMutedStyle}`}>
    <p className="text-lg mb-2">✨ No todos yet!</p>
    <p className="text-sm">Add a new todo above to get started.</p>
  </div>
);

export default function TodoList({
  items,
  activeCount,
  showItems,
  onFilterChange,
  checkItem,
  uncheckItem,
  deleteItem,
  clearCompletedItems
}: TodoListProps) {
  const { theme } = useContext(ThemeContext);
  const styles = useThemeStyles(theme);

  return (
    <>
      {/* Todo List */}
      <div className={`w-full max-w-md ${styles.card} rounded-lg shadow-lg overflow-hidden`}>
        <div className={`${styles.divide} divide-y`}>
          {items.length === 0 ? (
            <EmptyTodoList textMutedStyle={styles.textMuted} />
          ) : (
            items.map(item => (
              <TodoItem
                key={item.id}
                item={item}
                checkItem={checkItem}
                uncheckItem={uncheckItem}
                deleteItem={deleteItem}
              />
            ))
          )}
        </div>

        {/* Footer */}
        <div className={`p-4 flex items-center justify-between text-sm ${styles.textMuted} ${styles.border} border-t`}>
          <span>{activeCount} items left</span>

          <FilterButtons
            showItems={showItems}
            onFilterChange={onFilterChange}
            className="hidden md:flex"
          />

          <button
            className={`${styles.hover} cursor-pointer border-0 p-0`}
            onClick={clearCompletedItems}
            aria-label="Clear all completed todos"
          >
            Clear Completed
          </button>
        </div>
      </div>

      {/* Mobile Filter Buttons */}
      <div className={`p-4 flex items-center justify-center text-sm ${styles.textMuted} ${styles.border} md:hidden`}>
        <FilterButtons
          showItems={showItems}
          onFilterChange={onFilterChange}
        />
      </div>
    </>
  );
}
