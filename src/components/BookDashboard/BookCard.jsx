import React from 'react';
import { useRole } from '../../contexts/RoleContext';

/**
 * BookCard Component
 * Displays individual book information with role-based actions
 */
function BookCard({ book, onEdit, onDelete }) {
  const { isAdmin } = useRole();

  return (
    <div className="card">
      <h3 style={{ 
        color: 'var(--primary-color)', 
        marginBottom: '10px',
        fontSize: '1.3rem'
      }}>
        {book.title}
      </h3>
      
      <p style={{ 
        color: 'var(--text-secondary)', 
        marginBottom: '5px',
        fontSize: '1rem'
      }}>
        <strong>Author:</strong> {book.author}
      </p>
      
      {book.year && (
        <p style={{ 
          color: 'var(--text-secondary)', 
          marginBottom: '15px',
          fontSize: '0.9rem'
        }}>
          <strong>Year:</strong> {book.year}
        </p>
      )}

      {/* Show action buttons only for admin */}
      {isAdmin && (
        <div className="button-group" style={{ marginTop: '15px' }}>
          <button 
            onClick={() => onEdit(book)}
            style={{ flex: 1 }}
          >
            ✏️ Edit
          </button>
          <button 
            onClick={() => onDelete(book.id)}
            className="danger"
            style={{ flex: 1 }}
          >
            🗑️ Delete
          </button>
        </div>
      )}

      {/* User view message */}
      {!isAdmin && (
        <div style={{ 
          marginTop: '15px', 
          padding: '10px', 
          background: 'rgba(255, 182, 217, 0.1)',
          borderRadius: '5px',
          fontSize: '0.85rem',
          color: 'var(--text-secondary)',
          textAlign: 'center'
        }}>
          👁️ Read-only view
        </div>
      )}
    </div>
  );
}

export default BookCard;

