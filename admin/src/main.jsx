import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

fetch('/data/login').then(async (result)=>{
  let data = await result.json()
  if(!data.loggedIn){
    location.assign('/login.html')
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
