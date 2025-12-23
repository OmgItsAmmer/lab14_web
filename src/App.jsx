import React from 'react';
import { RoleProvider } from './contexts/RoleContext';
import RoleSwitcher from './components/Section3/RoleSwitcher';
import ProfileEditor from './components/Section1/ProfileEditor';
import TodoList from './components/Section2/TodoList';
import BookListBasic from './components/Section3/BookListBasic';
import BookDashboard from './components/BookDashboard/BookDashboard';

/**
 * Main App Component
 * Wraps entire app with RoleProvider for global state
 */
function App() {
  return (
    <RoleProvider>
      <div className="container">
        {/* Header */}
        <div className="header">
          <h1>📚 Book Dashboard App</h1>
          <div className="student-info">
            <p className="student-name">Name: Ammer Saeed</p>
            <p className="student-age">Age: 22</p>
          </div>
      
        </div>

        {/* Role Switcher - Available throughout app via Context */}
        <RoleSwitcher />

        {/* Section 1: Object State */}
        <ProfileEditor />

        {/* Section 2: Array State */}
        <TodoList />

        {/* Section 3: Context & Role-based Rendering */}
        <BookListBasic />

        {/* Final Project: Complete Book Dashboard */}
        <BookDashboard />

       
      </div>
    </RoleProvider>
  );
}

export default App;

