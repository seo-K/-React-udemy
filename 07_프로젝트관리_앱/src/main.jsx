import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  // 엄격모드에서는 함수가 2번씩 실행된다.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
