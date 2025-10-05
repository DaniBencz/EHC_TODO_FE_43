import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
import type { TStatus } from '../types';

interface FilterButtonsProps {
  showItems: TStatus | 'all';
  onFilterChange: (filter: TStatus | 'all') => void;
  className?: string;
}

function FilterButtons({ showItems, onFilterChange, className = "" }: FilterButtonsProps) {
  const { theme } = useContext(ThemeContext);

  const styles = {
    textMuted: "text-gray-500",
    hover: theme === "dark" ? "hover:text-white" : "hover:text-gray-800"
  };

  const getFilterStyle = (filter: TStatus | 'all') => {
    const isActive = showItems === filter;
    const baseStyle = isActive ? "text-blue-500" : styles.textMuted;
    const hoverStyle = isActive ? "" : styles.hover;
    return `${baseStyle} ${hoverStyle} cursor-pointer`;
  };

  return (
    <div className={`flex gap-4 ${className}`} role="group" aria-label="Filter todos">
      <button 
        className={getFilterStyle('all')} 
        onClick={() => onFilterChange('all')}
        aria-label="Show all todos"
        aria-pressed={showItems === 'all'}
      >
        All
      </button>
      <button 
        className={getFilterStyle('active')} 
        onClick={() => onFilterChange('active')}
        aria-label="Show active todos"
        aria-pressed={showItems === 'active'}
      >
        Active
      </button>
      <button 
        className={getFilterStyle('done')}
        onClick={() => onFilterChange('done')}
        aria-label="Show completed todos"
        aria-pressed={showItems === 'done'}
      >
        Completed
      </button>
    </div>
  );
}

export default FilterButtons;