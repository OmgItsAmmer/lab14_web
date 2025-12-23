import React, { useState } from 'react';
import { useRole } from '../../contexts/RoleContext';

/**
 * SECTION 3: Basic Book List with Role-based Rendering
 * Demonstrates conditional rendering based on user role from context
 */
function BookListBasic() {
  const { role, isAdmin } = useRole();

  const [books, setBooks] = useState([
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: '1984', author: 'George Orwell' },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee' }
  ]);

  const handleDelete = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <div className="section">
      <h2 className="section-title">Section 3: Role-Based Book List</h2>
      
      <div style={{ 
        background: 'rgba(255, 182, 217, 0.1)', 
        padding: '15px', 
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <p style={{ color: 'var(--text-secondary)' }}>
          <strong>Current View:</strong> {isAdmin ? 'Admin Mode (can edit/delete)' : 'User Mode (read-only)'}
        </p>
      </div>

      <div>
        {books.map(book => (
          <div key={book.id} className="book-item">
            <div className="item-content">
              <h3 style={{ color: 'var(--primary-light)', marginBottom: '5px' }}>
                {book.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                by {book.author}
              </p>
            </div>

            {/* Conditional rendering - only show buttons for admin */}
            {isAdmin && (
              <div className="item-actions">
                <button>Edit</button>
                <button onClick={() => handleDelete(book.id)} className="danger">
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(255, 182, 217, 0.1)', borderRadius: '8px' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          💡 <strong>Key Concept:</strong> Using <code>useContext</code> allows us to access 
          the role state anywhere in the component tree without prop drilling. 
          The <code>isAdmin</code> value determines what UI elements are shown.
        </p>
      </div>
    </div>
  );
}

export default BookListBasic;

