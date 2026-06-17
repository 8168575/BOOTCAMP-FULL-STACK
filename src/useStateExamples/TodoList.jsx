import React, { useState } from 'react';

/**
 * Example 4: TodoList Component
 * Demonstrates managing array state with useState
 * Use case: Adding, removing, and toggling items in a list
 */
export function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '20px' }}>
      <h2>📝 TodoList Example</h2>

      <div style={{ marginBottom: '15px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new todo..."
          style={{ padding: '8px', marginRight: '8px', fontSize: '14px', borderRadius: '4px', border: '1px solid #ddd' }}
        />
        <button onClick={addTodo} style={{ padding: '8px 16px' }} type="button">
          Add
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.length === 0 ? (
          <li style={{ color: '#999' }}>No todos yet. Add one to get started!</li>
        ) : (
          todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                padding: '10px',
                marginBottom: '8px',
                backgroundColor: todo.completed ? '#e8f5e9' : '#fff3e0',
                borderRadius: '4px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div style={{ flex: 1 }}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  style={{ marginRight: '10px' }}
                />
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
              </div>
              <button
                onClick={() => removeTodo(todo.id)}
                style={{
                  padding: '4px 12px',
                  backgroundColor: '#ff6b6b',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
                type="button"
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}


