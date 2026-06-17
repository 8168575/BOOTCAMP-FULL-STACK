import { useMemo, useState } from 'react'
import {
  Counter,
  Toggle,
  TextInput,
  TodoList,
  ThemeSwitcher,
  FormHandler,
} from './useStateExamples'

const TABS = [
  { key: 'counter', label: 'Counter', Component: Counter },
  { key: 'toggle', label: 'Toggle', Component: Toggle },
  { key: 'text', label: 'TextInput', Component: TextInput },
  { key: 'todo', label: 'TodoList', Component: TodoList },
  { key: 'theme', label: 'ThemeSwitcher', Component: ThemeSwitcher },
  { key: 'form', label: 'FormHandler', Component: FormHandler },
]

// Deprecated UI replaced by src/app.jsx

export default function App() {
  const [active, setActive] = useState(TABS[0].key)

  const ActiveComponent = useMemo(() => {
    return TABS.find((t) => t.key === active)?.Component ?? Counter
  }, [active])

  return (
    <div className="page">
      <header className="header">
        <h1>React useState Examples</h1>
        <p>Pick an example tab to see state in action.</p>
      </header>

      <nav className="tabs">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            className={t.key === active ? 'tab active' : 'tab'}
            onClick={() => setActive(t.key)}
          >
            {t.label}
          </button>
        ))}
      </nav>

      <main className="content">
        <ActiveComponent />
      </main>
    </div>
  )
}

