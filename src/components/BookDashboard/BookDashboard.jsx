import React, { useState } from 'react';
import { useRole } from '../../contexts/RoleContext';
import BookCard from './BookCard';
import AddBookForm from './AddBookForm';
import EditBookModal from './EditBookModal';

/**
 * FINAL PROJECT: Book Dashboard
 * Combines all concepts: object state, array state, and context
 */
function BookDashboard() {
  const { isAdmin } = useRole();

  // State for books array
  const [books, setBooks] = useState([
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 }
  ]);

  // State for showing add form
  const [showAddForm, setShowAddForm] = useState(false);

  // State for editing
  const [editingBook, setEditingBook] = useState(null);

  // State for search filter
  const [searchTerm, setSearchTerm] = useState('');

  // Add a new book
  const handleAddBook = (newBook) => {
    const bookWithId = {
      ...newBook,
      id: Date.now() // Generate unique ID
    };
    setBooks([...books, bookWithId]);
    setShowAddForm(false);
  };

  // Delete a book
  const handleDeleteBook = (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      setBooks(books.filter(book => book.id !== id));
    }
  };

  // Start editing a book
  const handleEditBook = (book) => {
    setEditingBook(book);
  };

  // Save edited book
  const handleSaveEdit = (updatedBook) => {
    setBooks(books.map(book => 
      book.id === updatedBook.id ? updatedBook : book
    ));
    setEditingBook(null);
  };

  // Filter books based on search term
  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="section">
      <h2 className="section-title">📚 Book Dashboard - Final Project</h2>

      {/* Search Bar */}
      <div className="form-group">
        <label htmlFor="search">Search Books:</label>
        <input
          id="search"
          type="text"
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by title or author..."
        />
      </div>

      {/* Admin Controls */}
      {isAdmin && (
        <div style={{ marginBottom: '20px' }}>
          <button 
            onClick={() => setShowAddForm(!showAddForm)}
            className="success"
          >
            {showAddForm ? '❌ Cancel' : '➕ Add New Book'}
          </button>
        </div>
      )}

      {/* Add Book Form */}
      {showAddForm && isAdmin && (
        <AddBookForm 
          onAddBook={handleAddBook}
          onCancel={() => setShowAddForm(false)}
        />
      )}

      {/* Books Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px',
        marginTop: '20px'
      }}>
        {filteredBooks.length === 0 ? (
          <div className="empty-state">
            <p>No books found. {isAdmin && 'Add one above!'}</p>
          </div>
        ) : (
          filteredBooks.map(book => (
            <BookCard
              key={book.id}
              book={book}
              onEdit={handleEditBook}
              onDelete={handleDeleteBook}
            />
          ))
        )}
      </div>

      {/* Edit Modal */}
      {editingBook && (
        <EditBookModal
          book={editingBook}
          onSave={handleSaveEdit}
          onCancel={() => setEditingBook(null)}
        />
      )}

      {/* Stats Footer */}
      <div style={{ 
        marginTop: '30px', 
        padding: '15px', 
        background: 'rgba(255, 182, 217, 0.1)', 
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <p style={{ color: 'var(--text-secondary)' }}>
          <strong>Total Books:</strong> {books.length} | 
          <strong> Showing:</strong> {filteredBooks.length}
        </p>
      </div>
    </div>
  );
}

export default BookDashboard;

