import '../styles/UserPage.css'

/**
 * UserPage Component
 * 
 * Displays user profile information after successful login.
 * Provides welcome message and logout functionality.
 * 
 * Props:
 * - user: object containing user information
 * - onLogout: callback function triggered when user logs out
 */

export default function UserPage({ user, onLogout }) {
  return (
    <div className="user-container">
      <div className="user-card">
        <div className="user-header">
          <div className="user-avatar">
            {user.firstName.charAt(0).toUpperCase()}
          </div>
          <div className="user-info-header">
            <h1>Welcome, {user.firstName}!</h1>
            <p className="subtitle">Your profile dashboard</p>
          </div>
        </div>

        <div className="user-details">
          <div className="detail-section">
            <h2>Account Information</h2>
            <div className="detail-item">
              <label>Email Address:</label>
              <p>{user.email}</p>
            </div>
            <div className="detail-item">
              <label>First Name:</label>
              <p>{user.firstName}</p>
            </div>
            <div className="detail-item">
              <label>Account Status:</label>
              <p className="status-active">✓ Active</p>
            </div>
          </div>

          <div className="detail-section">
            <h2>Session Information</h2>
            <div className="detail-item">
              <label>Login Time:</label>
              <p>{user.loginTime}</p>
            </div>
            <div className="detail-item">
              <label>Browser:</label>
              <p>{navigator.userAgent.split('/')[0]}</p>
            </div>
          </div>
        </div>

        <div className="user-actions">
          <button className="btn btn-secondary">
            Edit Profile
          </button>
          <button className="btn btn-secondary">
            Change Password
          </button>
          <button 
            className="btn btn-logout"
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}
