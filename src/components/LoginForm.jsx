import { useState } from 'react'
import '../styles/LoginForm.css'

/**
 * LoginForm Component
 * 
 * Provides user authentication interface with email and password inputs.
 * Includes comprehensive form validation and error handling.
 * 
 * Props:
 * - onLogin: callback function triggered on successful login
 * 
 * Features:
 * - Email format validation using regex
 * - Password strength validation (min 6 characters)
 * - Real-time error display
 * - Secure password field masking
 */

// Validation rules and patterns
const VALIDATION_RULES = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address'
  },
  password: {
    minLength: 6,
    message: 'Password must be at least 6 characters long'
  }
}

export default function LoginForm({ onLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  /**
   * Validates email format using regex pattern
   */
  const validateEmail = (email) => {
    return VALIDATION_RULES.email.pattern.test(email)
  }

  /**
   * Validates password strength
   */
  const validatePassword = (password) => {
    return password.length >= VALIDATION_RULES.password.minLength
  }

  /**
   * Performs comprehensive form validation
   */
  const validateForm = () => {
    const newErrors = {}

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = VALIDATION_RULES.email.message
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (!validatePassword(formData.password)) {
      newErrors.password = VALIDATION_RULES.password.message
    }

    return newErrors
  }

  /**
   * Handles form input changes
   */
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  /**
   * Handles form submission
   */
  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = validateForm()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)

    setTimeout(() => {
      const userData = {
        email: formData.email,
        firstName: formData.email.split('@')[0],
        loginTime: new Date().toLocaleString()
      }
      onLogin(userData)
      setIsSubmitting(false)
    }, 500)
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Sign in to your account</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`form-input ${errors.email ? 'input-error' : ''}`}
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            {errors.email && (
              <div className="error-message">❌ {errors.email}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                className={`form-input ${errors.password ? 'input-error' : ''}`}
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isSubmitting}
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
            {errors.password && (
              <div className="error-message">❌ {errors.password}</div>
            )}
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  )
}
