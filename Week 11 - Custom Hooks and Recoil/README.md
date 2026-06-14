# Custom hooks

Custom hooks in React are a powerful feature that allows you to encapsulate and reuse stateful logic across different components. They are essentially JavaScript functions that can use React hooks internally. By creating custom hooks, you can abstract away complex logic, making your components cleaner and more manageable.

### Why Use Custom Hooks?

1. **Reusability**: If you find yourself using the same logic in multiple components, a custom hook can help you avoid code duplication.
2. **Separation of Concerns**: They allow you to separate business logic from UI logic, making your components more focused and easier to understand.

## Common custom hooks

- useFetch (https://swr.vercel.app/)
    
```jsx
import { useState, useEffect } from 'react';

export const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
```

- usePrevValue
    
    ```jsx
    
    ```
        
- useFetch with re-fetching
    
```jsx
import { useState, useEffect } from 'react';

export const useFetch = (url: string, interval: number | null = null) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Initial fetch

    if (interval !== null) {
      const fetchInterval = setInterval(() => {
        fetchData();
      }, interval);

      return () => clearInterval(fetchInterval); // Clear interval on cleanup
    }
  }, [url, interval]);

  return { data, loading, error };
};

```
    
- usePrev
    
```jsx
import { useRef, useState, useEffect } from 'react'
import './App.css'

export const usePrev = (value) => 
  const ref = useRef();

  // Update the ref with the current value after each render
  useEffect() => 
    ref.current = value;
  , [value];

  // Return the previous value (current value of ref before it is updated)
  return ref.current;
;

function App() 
  const [count, setCount] = useState(0);
  const prevCount = usePrev(count); // Track the previous count value

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter with usePrev Hook</h1>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>Decrement</button>
    </div>
  );


export default App

```
![usePrev Hook](./Images/image.png)
    
- useIsOnline
    
```jsx
import { useEffect, useState } from 'react';

const useIsOnline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const updateOnlineStatus = () => setIsOnline(navigator.onLine);

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    // Clean up the event listeners on component unmount
    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  return isOnline;
};

export default useIsOnline;

```

- useDebounce (https://gist.github.com/hkirat/439a0be477e3c31b08c1f7e0f4582674)
    
 ```jsx
 import { useState, useEffect } from 'react';
 
 const useDebounce = (value, delay) => {
     const [debouncedValue, setDebouncedValue] = useState(value);
 
     useEffect(() => {
         const handler = setTimeout(() => {
             setDebouncedValue(value);
         }, delay);
 
         return () => {
             clearTimeout(handler);
         };
     }, [value, delay]);
 
     return debouncedValue;
 };
 
 export default useDebounce;
 
 ```
    
- If we want to debounce function (from ak)
        
 ```jsx
 const debounce = (func, delay) => {
   let timeout;
   return (...args) => {
     clearTimeout(timeout);  // Clears the previous timer
     timeout = setTimeout(() => func(...args), delay);  // Starts a new timer
   };
 };
 ```
        

## Assignment

Read about swr and react-query

- Is `usePrev` hook that we have made indeed correct? Try out this example https://giacomocerquone.com/blog/life-death-useprevious-hook/
    
```jsx
import { useRef, useState, useEffect } from 'react'
import './App.css'

export const usePrev = (value) => {
  const ref = useRef();

  // Update the ref with the current value after each render
  useEffect(() => {
    ref.current = value;
  }, [value]);

  // Return the previous value (current value of ref before it is updated)
  return ref.current;
};

function App() {
  const [count, setCount] = useState(0);
  const prevCount = usePrev(count); // Track the previous count value
  const [x, setX] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setX(x => x + 1);
    }, 1000)

  }, []);
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter with usePrev Hook</h1>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCount}</p>
      {x}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>Decrement</button>
    </div>
  );
}

export default App

```

Explore https://usehooks.com/