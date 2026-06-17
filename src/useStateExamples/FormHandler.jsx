import { useState } from 'react'

export default function FormHandler() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [touched, setTouched] = useState(false)

  const emailValid = /.+@.+\..+/.test(email)
  const nameValid = name.trim().length >= 2

  const canSubmit = nameValid && emailValid

  function onSubmit(e) {
    e.preventDefault()
    setTouched(true)
    if (!canSubmit) return
    // placeholder submit behavior
    alert(`Submitted: ${name} (${email})`)
    setName('')
    setEmail('')
    setTouched(false)
  }

  return (
    <div className="card">
      <h2>Form with validation</h2>

      <form onSubmit={onSubmit}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setTouched(true)}
          />
          {touched && !nameValid ? <p className="error">Name must be at least 2 characters.</p> : null}
        </div>

        <div className="field">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched(true)}
          />
          {touched && !emailValid ? <p className="error">Enter a valid email.</p> : null}
        </div>

        <button type="submit" disabled={!canSubmit}>
          Submit
        </button>
      </form>
    </div>
  )
}

