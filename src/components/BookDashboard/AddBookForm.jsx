import React, { useState } from 'react';

/**
 * AddBookForm Component
 * Form to add a new book with validation
 */
function AddBookForm({ onAddBook, onCancel }) {
  // State to hold new book data
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    year: ''
  });

  // Handle input changes using spread operator
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook({
      ...newBook,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!newBook.title.trim() || !newBook.author.trim()) {
      alert('Please fill in title and author');
      return;
    }

    // Convert year to number if provided
    const bookToAdd = {
      ...newBook,
      year: newBook.year ? parseInt(newBook.year) : null
    };

    onAddBook(bookToAdd);
    
    // Reset form
    setNewBook({ title: '', author: '', year: '' });
  };

  return (
    <div style={{ 
      background: 'rgba(255, 182, 217, 0.05)', 
      padding: '20px', 
      borderRadius: '10px',
      marginBottom: '20px',
      border: '2px solid var(--primary-color)'
    }}>
      <h3 style={{ color: 'var(--primary-light)', marginBottom: '15px' }}>
        Add New Book
      </h3>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title *</label>
          <input
            id="title"
            name="title"
            type="text"
            value={newBook.title}
            onChange={handleChange}
            placeholder="Enter book title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">Author *</label>
          <input
            id="author"
            name="author"
            type="text"
            value={newBook.author}
            onChange={handleChange}
            placeholder="Enter author name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="year">Publication Year</label>
          <input
            id="year"
            name="year"
            type="number"
            value={newBook.year}
            onChange={handleChange}
            placeholder="e.g., 2024"
            min="1000"
            max="2100"
          />
        </div>

        <div className="button-group">
          <button type="submit" className="success">
            ✅ Add Book
          </button>
          <button type="button" onClick={onCancel} className="secondary">
            ❌ Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBookForm;

