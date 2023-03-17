import React from 'react'
import { Router } from 'react-router-dom'
// import './App.css'
import Login from './pages/Login'
import RouterApp from './routes/router'
import GlobalStyle from './styles/gobal'
import { AuthProvider } from './contexts/auth'

function App() {

  return (
    <AuthProvider>
      <RouterApp/>
      <GlobalStyle/>
    </AuthProvider>
  )
}

export default App;
