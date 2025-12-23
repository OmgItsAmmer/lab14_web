import React, { useState } from 'react';

/**
 * SECTION 1: State with Objects
 * This component demonstrates how to manage and update object state in React
 */
function ProfileEditor() {
  // Using useState with an object to hold profile data
  const [profile, setProfile] = useState({
    name: 'Ammer Saeed',
    age: 22
  });

  // Update name - using spread operator to preserve other properties
  const handleNameChange = (e) => {
    setProfile({
      ...profile,           // Copy all existing properties
      name: e.target.value  // Update only the name
    });
  };

  // Update age - using spread operator to preserve other properties
  const handleAgeChange = (e) => {
    setProfile({
      ...profile,          // Copy all existing properties
      age: e.target.value  // Update only the age
    });
  };

  return (
    <div className="section">
      <h2 className="section-title">Section 1: Profile Editor (Object State)</h2>
      
      {/* Display current profile data */}
      <div className="profile-display">
        <h3>Current Profile</h3>
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Age:</strong> {profile.age}</p>
      </div>

      {/* Input fields to update profile */}
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={profile.name}
          onChange={handleNameChange}
          placeholder="Enter your name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input
          id="age"
          type="number"
          value={profile.age}
          onChange={handleAgeChange}
          placeholder="Enter your age"
        />
      </div>

      <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(255, 182, 217, 0.1)', borderRadius: '8px' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          💡 <strong>Key Concept:</strong> We use the spread operator (<code>...profile</code>) 
          to copy all existing properties before updating a specific field. 
          This prevents losing other properties when updating state.
        </p>
      </div>
    </div>
  );
}

export default ProfileEditor;

