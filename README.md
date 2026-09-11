# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
---
## React Question Answers

### 1.What is the jsx, and why is it used in React?
JSX is a syntax that lets us write HTML-like code inside JavaScript. React uses JSX because it makes the UI easier to write and understand.

### 2.What is the difference between props and state?
Props are data passed from a parent component to a child component.
State is data managed inside a component that can change over time.

### 3.What does the useState hook do, and where did you use it in this project?
useState lets us create and manage changing data inside a React component. I used it to manage the players/data and update the UI when the data changes.

### 4.What does the `useEffect` hook do, and why did you need it to load the JSON data?
useEffect runs code after a component renders. I used it to load the JSON data when the component first appeared.

### 5.Why does every item in a `.map()` list need a unique `key` prop?
The key helps React identify each item in a list. It allows React to efficiently update only the items that have changed.

### 6.What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering means showing different UI depending on a condition.

For example, I used it to show a message when the stack is empty:

{selectedPlayers.length === 0 && (
  <p>No players selected yet.</p>
)}

### 7.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent sends data to a child using props.

A child can send something back to the parent by calling a function passed through props.

For example:

// Parent
<Child handleSelect={handleSelect} />

// Child
<button onClick={handleSelect}>
  Select
</button>

Here, the parent passes the handleSelect function to the child, and the child calls it when the button is clicked.