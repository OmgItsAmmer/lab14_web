import React from 'react';
import { useRole } from '../../contexts/RoleContext';

/**
 * SECTION 3: Role Switcher Component
 * Shows current role and allows toggling between user and admin
 */
function RoleSwitcher() {
  const { role, toggleRole, isAdmin } = useRole();

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      background: 'rgba(255, 182, 217, 0.1)',
      padding: '20px',
      borderRadius: '10px',
      marginBottom: '20px',
      border: '2px solid var(--primary-color)'
    }}>
      <div>
        <h3 style={{ color: 'var(--primary-light)', marginBottom: '5px' }}>Current Role</h3>
        <span className={`role-badge ${role}`}>
          {role === 'admin' ? '👑 Admin' : '👤 User'}
        </span>
      </div>
      
      <button onClick={toggleRole} style={{ padding: '12px 24px' }}>
        Switch to {isAdmin ? 'User' : 'Admin'}
      </button>
    </div>
  );
}

export default RoleSwitcher;

