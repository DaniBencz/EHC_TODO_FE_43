import type { ITodoItem } from '../types';

export const addTodo = (text: string, existingTodos: ITodoItem[]): ITodoItem[] => {
  if (!text.trim()) {
    return existingTodos;
  }

  const todoExists = existingTodos.some(todo => todo.title === text);
  if (todoExists) {
    throw new Error('Item already exists');
  }

  const newTodo: ITodoItem = {
    id: Date.now(),
    title: text,
    status: 'active'
  };

  return [...existingTodos, newTodo];
};
