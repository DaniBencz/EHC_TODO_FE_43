import { describe, it, expect } from 'vitest';
import { addTodo } from '../utils/todoUtils';
import type { ITodoItem } from '../types';

describe('todoUtils - addTodo', () => {
  it('should create a new todo item with correct properties', () => {
    const existingTodos: ITodoItem[] = [];
    const todoText = 'Buy groceries';
    const result = addTodo(todoText, existingTodos);

    expect(result).toHaveLength(1);
    expect(result[0].title).toBe(todoText);
    expect(result[0].status).toBe('active');
    expect(result[0].id).toBeDefined();
    expect(typeof result[0].id).toBe('number');
  });

  it('should add todo to existing list without mutating original array', () => {
    const existingTodos: ITodoItem[] = [
      { id: 1, title: 'Existing todo', status: 'active' }
    ];
    const todoText = 'New todo';

    const result = addTodo(todoText, existingTodos);

    expect(existingTodos).toHaveLength(1);
    expect(result).toHaveLength(2);
    expect(result[0]).toEqual(existingTodos[0]);
    expect(result[1].title).toBe(todoText);
  });

  it('should throw error when todo already exists', () => {
    const existingTodos: ITodoItem[] = [
      { id: 1, title: 'Buy groceries', status: 'active' }
    ];

    expect(() => addTodo('Buy groceries', existingTodos)).toThrow('Item already exists');
  });

  it('should return original array when text is empty or whitespace', () => {
    const existingTodos: ITodoItem[] = [
      { id: 1, title: 'Existing todo', status: 'active' }
    ];

    expect(addTodo('', existingTodos)).toEqual(existingTodos);
    expect(addTodo('   ', existingTodos)).toEqual(existingTodos);
    expect(addTodo('\t\n', existingTodos)).toEqual(existingTodos);
  });
});
