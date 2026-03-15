import { useState } from 'react'
import './App.css'
import StatusBadge from './components/StatusBadge'

function App() {
  const [currentStatus, setCurrentStatus] = useState(0)

  return (
    <div className="container">
      <h1>User Status System</h1>

      <StatusBadge status={currentStatus} />

      <div className="controls">
        <p>Change state</p>
        <button onClick={() => setCurrentStatus('online')}>Online</button>
        <button onClick={() => setCurrentStatus('offline')}>Offline</button>
        <button onClick={() => setCurrentStatus('busy')}>Busy</button>
      </div>
    </div>
  )
}

export default App
