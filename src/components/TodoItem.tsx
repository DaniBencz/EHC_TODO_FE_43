import { useContext, memo } from 'react';
import { ThemeContext } from '../context/themeContext';
import type { ITodoItemProps, TCheckItem } from "../types";

const ItemCheck = ({ uncheckItem, id }: { uncheckItem: TCheckItem, id: number; }) => (
  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
    onClick={() => uncheckItem(id)}>
    <img src="/icon-check.svg" alt="Check" className="w-3 h-3" />
  </div>
);

const TodoItem = ({ item, checkItem, uncheckItem, deleteItem }: ITodoItemProps) => {
  const { theme } = useContext(ThemeContext);

  const styles = {
    hover: theme === "dark" ? "hover:bg-gray-750" : "hover:bg-gray-50",
    border: theme === "dark" ? "border-gray-500 hover:border-blue-400" : "border-gray-300 hover:border-blue-500",
    activeText: theme === "dark" ? "text-gray-300" : "text-gray-700",
    completedText: theme === "dark" ? "text-gray-500 line-through" : "text-gray-400 line-through",
    deleteHover: theme === "dark" ? "hover:brightness-150" : "hover:opacity-75"
  };

  return (
    <div className={`p-4 flex gap-4 group ${styles.hover} relative`} key={item.id}>
      <div className="cursor-pointer">
        {item.status === 'done' ? <ItemCheck uncheckItem={uncheckItem} id={item.id} /> :
          <div className={`w-5 h-5 rounded-full border-2 ${styles.border} transition-colors cursor-pointer`}
            onClick={() => checkItem(item.id)}></div>}
      </div>
      <div className={`flex-1 min-w-0 break-words pr-8 ${item.status === 'done' ? styles.completedText : styles.activeText}`}>
        {item.title}
      </div>
      <img
        src="/icon-cross.svg"
        alt="Delete"
        className={`w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer pointer-events-auto ${styles.deleteHover}`}
        onClick={() => deleteItem(item.id)}
      />
    </div>
  );
};

export default memo(TodoItem);
