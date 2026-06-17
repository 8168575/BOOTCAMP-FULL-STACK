# React Day 2 Assignment - useState Examples & Form Handler 🚀

A comprehensive React project demonstrating 5 different useState hook patterns and a complete form handling component with validation and state management.

**Live Demo:** http://localhost:5173/

---

## 📚 Project Overview
This project is designed to teach React beginners the `useState` hook through practical, interactive examples. It includes 5 different use cases of `useState` and a professional-grade form handler component.

### Key Learning Outcomes
- ✅ Basic state management with useState
- ✅ Handling different state types (primitives, arrays, objects)
- ✅ Controlled form inputs
- ✅ Form validation and error handling
- ✅ Conditional rendering based on state
- ✅ Event handling in React

---

## 🎯 5 useState Examples

### 1) Counter Component 📊
**File:** `src/useStateExamples/Counter.jsx`

A simple counter demonstrating basic numeric state management.

**Features**
- Increment (+1)
- Decrement (-1)
- Reset to 0
- Real-time count display

**Concepts Taught**
- Simple useState with number type
- State update functions
- Button event handlers

---

### 2) Toggle Component 🔄
**File:** `src/useStateExamples/Toggle.jsx`

Demonstrates boolean state and conditional rendering.

**Features**
- Toggle message visibility
- Multiple boolean states
- Controlled checkbox inputs (where applicable)

**Concepts Taught**
- Boolean state management
- Conditional rendering with `&&`

---

### 3) TextInput Component ✍️
**File:** `src/useStateExamples/TextInput.jsx`

Controlled form inputs with real-time text processing.

**Features**
- Real-time text input
- Character counter
- Clear button
- Textarea control

**Concepts Taught**
- Controlled inputs
- Event object handling
- Derived state (character count)

---

### 4) TodoList Component 📝
**File:** `src/useStateExamples/TodoList.jsx`

Managing array state with add, delete, and toggle operations.

**Features**
- Add new todos
- Delete todos
- Toggle completion status
- Empty state message

**Concepts Taught**
- Array state management
- Spread operator for immutability
- Array methods (`map`, `filter`)
- List rendering with `.map()`

---

### 5) ThemeSwitcher Component 🎨
**File:** `src/useStateExamples/ThemeSwitcher.jsx`

Object state management for complex state structures.

**Features**
- Light/Dark mode toggle
- Accent color selection (Blue, Green, Red, Purple)
- Font size options (Small, Medium, Large)
- Real-time theme updates

**Concepts Taught**
- Object state management
- Object spread syntax
- Multiple related state properties
- Dynamic styling based on state

---

## 📋 Form Handler Component
**File:** `src/useStateExamples/FormHandler.jsx`

A professional-grade form demonstrating comprehensive state management, validation, and error handling.

### Input Fields (10+)
| Field | Type | Validation |
|---|---|---|
| Full Name | Text | Required |
| Email | Email | Required, format validation |
| Password | Password | Required, min 6 chars |
| Confirm Password | Password | Required, must match |
| Age | Number | Required, 18-120 range |
| Country | Select | 6 country options |
| Gender | Radio | Male, Female, Other |
| Bio | Textarea | Optional |
| Terms | Checkbox | Required |
| Newsletter | Checkbox | Optional |

### Features
- ✅ Complete state management (single state object)
- ✅ Validation system (field-level validation + clear error messages)
- ✅ User feedback (error indicators + success on submit)
- ✅ Submit + reset functionality
- ✅ Keyboard support (enter to submit)
- ✅ Auto-clear success message after 2 seconds

---

## 📁 Project Structure
```txt
react-day-2-assignment/
├── src/
│   ├── useStateExamples/
│   │   ├── Counter.jsx
│   │   ├── Toggle.jsx
│   │   ├── TextInput.jsx
│   │   ├── TodoList.jsx
│   │   ├── ThemeSwitcher.jsx
│   │   ├── FormHandler.jsx
│   │   └── index.js
│   ├── app.jsx
│   ├── main.jsx
│   └── style.css (if present)
├── index.html
├── package.json
└── README.md
```

---

## 🚀 Getting Started
### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production
```bash
npm run preview
```

---

## 🎨 UI Navigation
### Tabs
- **Overview**
- **useState Examples**
- **Form Handler**

---

## 🔧 Troubleshooting
- **Issue:** Cannot find module 'react'
  - Run: `npm install react react-dom`
- **Issue:** Port already in use
  - Run: `npm run dev -- --port 3000`

---

## 📝 License
Open source and available under the MIT License.

