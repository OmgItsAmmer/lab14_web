import React, { useState } from 'react';

/**
 * SECTION 2: Arrays of Objects
 * This component demonstrates how to manage a list of items (todos) in state
 */
function TodoList() {
  // State to hold array of todo objects
  const [todos, setTodos] = useState([
    { id: 1, title: 'Learn React State', completed: false },
    { id: 2, title: 'Build Todo App', completed: false },
    { id: 3, title: 'Master useContext', completed: true }
  ]);

  // State for new todo input
  const [newTodo, setNewTodo] = useState('');

  // State for editing
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  // Add a new todo with unique ID
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;

    const newTodoItem = {
      id: Date.now(), // Simple unique ID using timestamp
      title: newTodo,
      completed: false
    };

    setTodos([...todos, newTodoItem]); // Add to end of array
    setNewTodo(''); // Clear input
  };

  // Delete a todo using filter() to remove by id
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Toggle completed status
  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id 
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
  };

  // Start editing
  const handleStartEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.title);
  };

  // Save edit
  const handleSaveEdit = () => {
    setTodos(todos.map(todo => 
      todo.id === editingId 
        ? { ...todo, title: editText }
        : todo
    ));
    setEditingId(null);
    setEditText('');
  };

  // Cancel edit
  const handleCancelEdit = () => {
    setEditingId(null);
    setEditText('');
  };

  return (
    <div className="section">
      <h2 className="section-title">Section 2: Todo List (Array of Objects)</h2>

      {/* Form to add new todo */}
      <form onSubmit={handleAddTodo} style={{ marginBottom: '20px' }}>
        <div className="form-group">
          <label htmlFor="newTodo">Add New Todo:</label>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input
              id="newTodo"
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Enter a new todo..."
            />
            <button type="submit" className="success">Add</button>
          </div>
        </div>
      </form>

      {/* Display list of todos */}
      <div>
        {todos.length === 0 ? (
          <div className="empty-state">
            <p>No todos yet. Add one above!</p>
          </div>
        ) : (
          todos.map(todo => (
            <div key={todo.id} className="todo-item">
              {editingId === todo.id ? (
                // Edit mode
                <div style={{ flex: 1, display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    style={{ flex: 1 }}
                  />
                  <button onClick={handleSaveEdit} className="success">Save</button>
                  <button onClick={handleCancelEdit} className="secondary">Cancel</button>
                </div>
              ) : (
                // Display mode
                <>
                  <div className="item-content">
                    <span style={{ 
                      textDecoration: todo.completed ? 'line-through' : 'none',
                      opacity: todo.completed ? 0.6 : 1 
                    }}>
                      {todo.title}
                    </span>
                  </div>
                  <div className="item-actions">
                    <button 
                      onClick={() => handleToggleComplete(todo.id)}
                      className={todo.completed ? 'secondary' : 'success'}
                    >
                      {todo.completed ? 'Undo' : 'Complete'}
                    </button>
                    <button onClick={() => handleStartEdit(todo)}>Edit</button>
                    <button onClick={() => handleDeleteTodo(todo.id)} className="danger">
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>


    </div>
  );
}

export default TodoList;

