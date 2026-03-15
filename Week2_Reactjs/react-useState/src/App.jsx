import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleIncrease = () => {
    setCount(count + 1);
  }

  const handleDecrease = () => {
    if(count > 0) {
      setCount(count-1);
    }
  }

  const handleReset = () => {
    setCount(0);
  }

  return (
    <div className="container">
      <h1>Counter App</h1>

      <div className={`counter-display ${count > 10 ? 'red-text' : ''}`}>
        {count}
      </div>

      <div className="button-group">
        <button className="btn-plus" onClick={handleIncrease}>+</button>
        <button className="btn-minus" onClick={handleDecrease}>-</button>
        <button className="btn-reset" onClick={handleReset}>reset</button>
      </div>

      <div className="student-info">
        <h3>Thông Tin Sinh Viên</h3>
        <p>Họ tên: Trần Quang Hưng</p>
        <p>MSSV: 23686381</p>
        <p>Lớp: DHKHMT19A</p>
      </div>
    </div>
  )
}

export default App
