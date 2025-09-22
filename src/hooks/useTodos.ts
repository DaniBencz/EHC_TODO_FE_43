import { useState } from 'react';
import type { ITodoItem, TStatus } from '../types';

export const useTodos = () => {
  const [items, setItems] = useState<ITodoItem[]>([]);

  const addItem = (text: string) => {
    try {
      if (!text.trim()) {
        return { success: false, error: "Item cannot be empty" };
      }

      const todoExists = items.some(todo => todo.title === text);
      if (todoExists) {
        return { success: false, error: "Item already exists" };
      }

      const newTodo: ITodoItem = {
        id: Date.now(),
        title: text,
        status: 'active'
      };

      setItems(prevItems => [...prevItems, newTodo]);
      return { success: true, error: null };
    } catch (error) {
      return { success: false, error: error instanceof Error ? error.message : "Error adding item" };
    }
  };

  const checkItem = (id: number) => {
    setItems(prevItems => prevItems.map(item =>
      item.id === id ? { ...item, status: 'done' as TStatus } : item
    ));
  };

  const uncheckItem = (id: number) => {
    setItems(prevItems => prevItems.map(item =>
      item.id === id ? { ...item, status: 'active' as TStatus } : item
    ));
  };

  const deleteItem = (id: number) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const clearCompletedItems = () => {
    setItems(prevItems => prevItems.filter(item => item.status !== 'done'));
  };

  const getFilteredItems = (filter: TStatus | 'all') => {
    return items.filter(item => filter === 'all' || item.status === filter);
  };

  const getActiveCount = () => {
    return items.filter(item => item.status === 'active').length;
  };

  return {
    items,
    addItem,
    checkItem,
    uncheckItem,
    deleteItem,
    clearCompletedItems,
    getFilteredItems,
    getActiveCount,
  };
};
