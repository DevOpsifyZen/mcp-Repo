import { useState } from 'react'
import LoginForm from './components/LoginForm'
import UserPage from './pages/UserPage'
import './styles/App.css'

/**
 * App Component
 * 
 * Main application component that manages authentication state and renders
 * either the LoginForm or UserPage based on authentication status.
 * 
 * State:
 * - isLoggedIn: boolean tracking user authentication status
 * - userData: object containing logged-in user information
 */
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState(null)

  /**
   * Handles login action
   * Sets authenticated state and stores user data
   */
  const handleLogin = (user) => {
    setUserData(user)
    setIsLoggedIn(true)
  }

  /**
   * Handles logout action
   * Clears user data and resets authentication state
   */
  const handleLogout = () => {
    setUserData(null)
    setIsLoggedIn(false)
  }

  return (
    <div className="app-container">
      {isLoggedIn ? (
        <UserPage user={userData} onLogout={handleLogout} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  )
}

export default App
