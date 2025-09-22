import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useTodos } from '../hooks/useTodos';

describe('useTodos hook', () => {
  it('should add a new todo item', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      const response = result.current.addItem('Buy groceries');
      expect(response.success).toBe(true);
      expect(response.error).toBe(null);
    });

    expect(result.current.items).toHaveLength(1);
    expect(result.current.items[0].title).toBe('Buy groceries');
    expect(result.current.items[0].status).toBe('active');
    expect(result.current.getActiveCount()).toBe(1);
  });

  it('should mark a todo as complete', () => {
    const { result } = renderHook(() => useTodos());

    // Add a todo first
    act(() => {
      result.current.addItem('Buy groceries');
    });

    const todoId = result.current.items[0].id;

    // Mark it as complete
    act(() => {
      result.current.checkItem(todoId);
    });

    expect(result.current.items[0].status).toBe('done');
    expect(result.current.getActiveCount()).toBe(0);
  });

  it('should uncheck a completed todo', () => {
    const { result } = renderHook(() => useTodos());

    // Add and complete a todo
    act(() => {
      result.current.addItem('Buy groceries');
    });

    const todoId = result.current.items[0].id;

    act(() => {
      result.current.checkItem(todoId);
    });

    // Uncheck it
    act(() => {
      result.current.uncheckItem(todoId);
    });

    expect(result.current.items[0].status).toBe('active');
    expect(result.current.getActiveCount()).toBe(1);
  });

  it('should delete a todo item', () => {
    const { result } = renderHook(() => useTodos());

    // Add a todo
    act(() => {
      result.current.addItem('Buy groceries');
    });

    const todoId = result.current.items[0].id;

    // Delete it
    act(() => {
      result.current.deleteItem(todoId);
    });

    expect(result.current.items).toHaveLength(0);
    expect(result.current.getActiveCount()).toBe(0);
  });
});
