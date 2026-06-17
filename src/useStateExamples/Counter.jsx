import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <div className="row">
        <button type="button" onClick={() => setCount((c) => c - 1)}>
          -1
        </button>
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          +1
        </button>
        <button type="button" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  )
}

