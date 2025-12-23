import React, { createContext, useContext, useState } from 'react';

/**
 * SECTION 3: Global State with useContext
 * This context provides user role state and functions to the entire app
 */

// Create the context
const RoleContext = createContext();

// Custom hook to use the role context
export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
};

// Provider component that wraps the app
export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState('user'); // 'user' or 'admin'

  // Function to toggle between user and admin
  const toggleRole = () => {
    setRole(prevRole => prevRole === 'user' ? 'admin' : 'user');
  };

  // Function to set a specific role
  const setUserRole = (newRole) => {
    if (newRole === 'user' || newRole === 'admin') {
      setRole(newRole);
    }
  };

  // Value object that will be provided to consumers
  const value = {
    role,
    toggleRole,
    setUserRole,
    isAdmin: role === 'admin',
    isUser: role === 'user'
  };

  return (
    <RoleContext.Provider value={value}>
      {children}
    </RoleContext.Provider>
  );
};

export default RoleContext;

