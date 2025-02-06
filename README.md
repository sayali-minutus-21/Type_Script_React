## React Notes

### Introduction to React
- React is a JavaScript library for building user interfaces.
- Developed by Facebook.
- Uses a component-based architecture.
- Utilizes a virtual DOM for efficient updates.

### Core Concepts
1. **Components**: Reusable pieces of UI, either functional or class-based.
   ```jsx
   function Greeting() {
       return <h1>Hello, World!</h1>;
   }
   ```
2. **JSX (JavaScript XML)**: A syntax extension that allows writing HTML-like code inside JavaScript.
   ```jsx
   const element = <h1>Hello, JSX!</h1>;
   ```
3. **Props**: Short for properties, used to pass data from parent to child components.
   ```jsx
   function Welcome(props) {
       return <h1>Hello, {props.name}!</h1>;
   }
   ```
4. **State**: Internal component data that can change over time.
   ```jsx
   import { useState } from 'react';
   function Counter() {
       const [count, setCount] = useState(0);
       return (
           <div>
               <p>Count: {count}</p>
               <button onClick={() => setCount(count + 1)}>Increment</button>
           </div>
       );
   }
   ```
5. **Hooks**: Functions that allow using state and other React features in functional components.

### Important Hooks
- `useState()`: Manages state in functional components.
- `useEffect()`: Handles side effects like data fetching.
   ```jsx
   import { useEffect, useState } from 'react';
   function FetchData() {
       const [data, setData] = useState(null);
       useEffect(() => {
           fetch('https://api.example.com/data')
               .then(response => response.json())
               .then(data => setData(data));
       }, []);
       return <div>{JSON.stringify(data)}</div>;
   }
   ```
- `useContext()`: Provides global state management.
- `useRef()`: Accesses DOM elements directly.
- `useReducer()`: Alternative to `useState()` for complex state logic.

### Component Lifecycle (Class Components)
- `componentDidMount()`: Runs after the component mounts.
- `componentDidUpdate()`: Runs after state or props update.
- `componentWillUnmount()`: Runs before the component unmounts.

### State Management
- **React Context API**: Built-in state management solution.
- **Redux**: A third-party library for global state management.
- **Zustand**: A lightweight state management library.

### Routing
- `react-router-dom` is used for client-side routing.
- `BrowserRouter`, `Route`, and `Link` are common components.
   ```jsx
   import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
   function App() {
       return (
           <Router>
               <nav>
                   <Link to='/'>Home</Link>
                   <Link to='/about'>About</Link>
               </nav>
               <Route path='/' exact component={() => <h1>Home</h1>} />
               <Route path='/about' component={() => <h1>About</h1>} />
           </Router>
       );
   }
   ```

### Fetching Data
- `fetch()`, `axios`, or React Query for API calls.
- Data fetching typically happens inside `useEffect()`.

### Styling in React
- CSS Modules
- Styled Components
- Tailwind CSS
- Inline Styles

### Optimization Techniques
- Memoization using `useMemo()` and `useCallback()`.
- Code-splitting with `React.lazy()` and `Suspense`.
- Avoiding unnecessary re-renders using `React.memo()`.

### Deployment
- Common hosting platforms: Vercel, Netlify, GitHub Pages.
- `npm run build` to generate production-ready files.

### Testing
- Jest and React Testing Library for unit and integration testing.
- Cypress for end-to-end testing.

### Common Best Practices
- Keep components small and reusable.
- Use meaningful names for variables and functions.
- Prefer functional components over class components.
- Avoid unnecessary state updates.
- Use keys when rendering lists to improve performance.

### Useful Resources
- Official React Docs: https://react.dev
- React GitHub Repository: https://github.com/facebook/react
- FreeCodeCamp React Guide: https://www.freecodecamp.org/news/tag/react/

