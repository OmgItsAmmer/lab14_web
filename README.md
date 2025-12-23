# Book Dashboard App - Lab 14

## CS-344: Web Engineering
**Class:** BESE-14AB  
**Date:** 18.12.25  
**Instructor:** Ms. Naema Asif

---

## 📚 Project Overview

This project demonstrates comprehensive React state management concepts including:
- Managing objects and arrays in React state
- Updating nested state immutably
- Creating and using React Context API
- Building role-based views (Admin vs User)

---

## 🎨 Features

### Section 1: Profile Editor (Object State)
- Update user profile with name and age
- Learn spread operator for immutable updates
- Real-time state updates

### Section 2: Todo List (Array of Objects)
- Add, edit, delete, and complete todos
- Manage array state with unique IDs
- Filter and map operations

### Section 3: Role-Based Rendering (Context)
- Global role management (Admin/User)
- Context API implementation
- Conditional rendering based on role

### Final Project: Book Dashboard
- Complete CRUD operations for books
- Search and filter functionality
- Admin controls for managing books
- User view for browsing books
- Beautiful dark theme with pink accents

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open browser and navigate to `http://localhost:5173`

---

## 📁 Project Structure

```
book-dashboard-app/
├── src/
│   ├── components/
│   │   ├── Section1/
│   │   │   └── ProfileEditor.jsx
│   │   ├── Section2/
│   │   │   └── TodoList.jsx
│   │   ├── Section3/
│   │   │   ├── RoleSwitcher.jsx
│   │   │   └── BookListBasic.jsx
│   │   └── BookDashboard/
│   │       ├── BookDashboard.jsx
│   │       ├── BookCard.jsx
│   │       ├── AddBookForm.jsx
│   │       └── EditBookModal.jsx
│   ├── contexts/
│   │   └── RoleContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── README.md
```

---

## 🎯 Key Concepts

### 1. Object State Management
```javascript
const [profile, setProfile] = useState({ name: '', age: 0 });
// Update using spread operator
setProfile({ ...profile, name: 'New Name' });
```

### 2. Array State Management
```javascript
// Add item
setBooks([...books, newBook]);

// Delete item
setBooks(books.filter(book => book.id !== id));

// Update item
setBooks(books.map(book => 
  book.id === id ? { ...book, title: newTitle } : book
));
```

### 3. Context API
```javascript
// Create context
const RoleContext = createContext();

// Use context
const { role, toggleRole } = useRole();
```

---

## 🎨 Design Theme

- **Primary Color:** Dark Light Pink (#FF69B4)
- **Background:** Dark Navy (#1a1a2e)
- **Surface:** Dark Blue (#16213e)
- **Accent:** Light Pink (#FFB6D9)

---

## 🔑 User Roles

### Admin Role
- Add new books
- Edit book information
- Delete books
- Full CRUD access

### User Role
- Browse books
- Search books
- Read-only access

---

## 📝 Learning Outcomes

1. **State Management:** Understand how to manage complex state in React
2. **Immutable Updates:** Use spread operator for state updates
3. **Context API:** Share state across components without prop drilling
4. **Conditional Rendering:** Display different UI based on conditions
5. **CRUD Operations:** Create, Read, Update, Delete functionality

---

## 🛠️ Technologies Used

- React 18
- Vite (Build tool)
- CSS3 (Custom styling)
- JavaScript ES6+

---

## 👨‍💻 Development Notes

### Why Spread Operator?
The spread operator (`...`) creates a new copy of the object/array, ensuring React detects the state change and re-renders the component.

### Why Context?
Context solves the "prop drilling" problem by allowing state to be accessed anywhere in the component tree without passing props through every level.

### Component Design
Components are split by functionality, making the code maintainable and reusable.

---

## 📦 Deliverables

1. **Source Code:** Complete React application
2. **Description Document:** LaTeX documentation
3. **Zip Folder:** Named as `RegistrationNo_Section`

---

## 🎓 Credits

**Student:** Ammer Saeed  
**Registration No.:** 466445  
**Section:** BESE-14B

**Instructor:** Ms. Naema Asif  
**Department:** Department of Computing  
**Course:** CS-344 Web Engineering

"# lab14_web" 
