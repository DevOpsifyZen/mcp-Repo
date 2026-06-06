# React User Login Form

A modern, production-ready React application featuring a comprehensive user authentication system with form validation, user profile page, and custom UI theme.

## 🎯 Overview

This project demonstrates best practices in React development including:
- Component composition and state management
- Form validation with real-time error feedback
- Responsive design with CSS variables
- Clean, documented code architecture
- User authentication flow

## 🛠 Technology Stack

- **React** 18.2.0 - UI library
- **Vite** 4.4.0 - Build tool and dev server
- **CSS3** - Custom theming with CSS variables
- **Playwright** - End-to-end testing
- **Vanilla JavaScript** - No additional UI dependencies

## 📋 Project Structure

```
.
├── src/
│   ├── components/
│   │   └── LoginForm.jsx          # Authentication form with validation
│   ├── pages/
│   │   └── UserPage.jsx           # User profile dashboard
│   ├── styles/
│   │   ├── index.css              # Global styles and CSS variables
│   │   ├── App.css                # App container styles
│   │   ├── LoginForm.css          # Form component styles
│   │   └── UserPage.css           # User page styles
│   ├── App.jsx                    # Main application component
│   └── main.jsx                   # React entry point
├── public/
│   └── index.html                 # HTML entry point
├── tests/                         # E2E test suites
├── package.json                   # Project dependencies
├── vite.config.js                 # Vite configuration
└── README.md                      # This file
```

## ⚙️ Installation

1. Clone the repository:
```bash
git clone https://github.com/DevOpsifyZen/mcp-Repo.git
cd mcp-Repo
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000`

## 📖 Usage

### Login
1. Enter a valid email address
2. Enter a password with at least 6 characters
3. Click "Sign In"

**Test Credentials:**
- Email: `test@example.com`
- Password: `password123`

### User Dashboard
After successful login, you'll see:
- Welcome message with user initial
- Account information
- Session details
- Logout button

## ✅ Form Validation

### Email Validation
- **Pattern**: Valid email format required
- **Rule**: `^[^\s@]+@[^\s@]+\.[^\s@]+$`
- **Feedback**: Real-time validation with error messages

### Password Validation
- **Minimum Length**: 6 characters
- **Feedback**: Error clears when user starts typing

## 🎨 Theming

The application uses CSS variables for easy customization. Main theme colors:

| Purpose | Color | Hex |
|---------|-------|-----|
| Primary | Indigo | #6366F1 |
| Secondary | Emerald | #10B981 |
| Danger | Red | #EF4444 |
| Background | Light Gray | #F3F4F6 |

Edit `src/styles/index.css` to customize the theme.

## 🧪 Testing

Run end-to-end tests:
```bash
npm run test  # If configured
```

Test files are located in the `tests/` directory.

## 🚀 Build & Deployment

### Development Build
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

This generates optimized files in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

## 📝 Features

✅ Email and password validation
✅ Password visibility toggle
✅ Real-time error clearing
✅ Responsive design (mobile-first)
✅ Smooth animations
✅ User profile display
✅ Session information
✅ Professional UI with CSS variables
✅ Clean, documented code

## 📚 Documentation

For more detailed information, see additional documentation files included in the repository.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 📞 Support

For issues and questions, please create an issue in the repository.

---

**Last Updated:** June 6, 2026
**Version:** 1.0.0
