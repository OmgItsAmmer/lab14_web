import React, { useState } from 'react';

/**
 * EditBookModal Component
 * Modal dialog for editing book information
 */
function EditBookModal({ book, onSave, onCancel }) {
  // Initialize state with current book data
  const [editedBook, setEditedBook] = useState({
    ...book
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedBook({
      ...editedBook,
      [name]: value
    });
  };

  // Handle save
  const handleSave = (e) => {
    e.preventDefault();
    
    // Validation
    if (!editedBook.title.trim() || !editedBook.author.trim()) {
      alert('Title and author cannot be empty');
      return;
    }

    // Convert year to number if provided
    const bookToSave = {
      ...editedBook,
      year: editedBook.year ? parseInt(editedBook.year) : null
    };

    onSave(bookToSave);
  };

  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-header">✏️ Edit Book</h2>
        
        <form onSubmit={handleSave}>
          <div className="form-group">
            <label htmlFor="edit-title">Title *</label>
            <input
              id="edit-title"
              name="title"
              type="text"
              value={editedBook.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="edit-author">Author *</label>
            <input
              id="edit-author"
              name="author"
              type="text"
              value={editedBook.author}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="edit-year">Publication Year</label>
            <input
              id="edit-year"
              name="year"
              type="number"
              value={editedBook.year || ''}
              onChange={handleChange}
              min="1000"
              max="2100"
            />
          </div>

          <div className="button-group">
            <button type="submit" className="success">
              ✅ Save Changes
            </button>
            <button type="button" onClick={onCancel} className="secondary">
              ❌ Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditBookModal;

