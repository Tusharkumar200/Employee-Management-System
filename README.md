<div align="center">

# 🏢 Employee Management System (EMS)

**A Modern, Full-Stack Employee Management Solution Built with MERN Stack**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-20.12.0-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-13AA52?logo=mongodb&logoColor=white)](https://www.mongodb.com)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-000000?logo=express&logoColor=white)](https://expressjs.com)
[![Status: Active](https://img.shields.io/badge/Status-Active-success)](https://github.com/Tusharkumar200/Employee-Management-System)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](#-contributing)

</div>

---

## 📋 Table of Contents

- [🎯 Overview](#-overview)
- [🌐 Live Demo](#-live-demo)
- [✨ Features](#-features)
- [🏗️ System Architecture](#️-system-architecture)
- [💾 Database Design](#-database-design)
- [📁 Project Structure](#-project-structure)
- [🛠️ Tech Stack](#️-tech-stack)
- [🔐 Security & Authentication](#-security--authentication)
- [📊 REST API Documentation](#-rest-api-documentation)
- [⚙️ Environment Variables](#️-environment-variables)
- [📦 Installation Guide](#-installation-guide)
- [🚀 Deployment Guide](#-deployment-guide)
- [🎨 Application Screenshots](#-application-screenshots)
- [🎬 Demo Video](#-demo-video)
- [🔄 Future Enhancements](#-future-enhancements)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👨‍💻 Developer](#️-developer)

---

## 🎯 Overview

<div align="center">

**Employee Management System (EMS)** is a comprehensive, full-stack web application designed to streamline employee management operations. Built with cutting-edge technologies and best practices, EMS enables organizations to efficiently manage employee records, departments, attendance, leaves, and salaries.

The system provides **role-based access control** with dedicated dashboards for administrators and employees, ensuring secure and scalable operations with modern web development practices.

</div>

---

## 🌐 Live Demo

<div align="center">

| 🔗 Resource | 📍 Link |
|---|---|
| 🌍 **Live Website** | [Deploy Link](#) |
| 🐙 **GitHub Repository** | [View Repo](https://github.com/Tusharkumar200/Employee-Management-System) |
| 📖 **API Documentation** | [API Docs](#-rest-api-documentation) |

</div>

---

## ✨ Features

### 🔓 Admin Features

<details open>
<summary><strong>Click to Expand/Collapse</strong></summary>

- ✅ **Secure Login** - JWT-based authentication
- 📊 **Dashboard Analytics** - Real-time statistics and insights
- 👥 **Employee Management** - Complete CRUD operations
- 🏢 **Department Management** - Organize employees by departments
- 📅 **Attendance Tracking** - Mark and monitor attendance
- 🗓️ **Leave Management** - Approve/reject employee leave requests
- 💰 **Salary Management** - Manage payroll and salary information
- 👨‍⚖️ **User Role Management** - Assign and manage user roles
- 🔍 **Search & Filtering** - Advanced search and filter capabilities
- 📈 **Reports & Statistics** - Generate comprehensive reports

</details>

### 👤 Employee Features

<details open>
<summary><strong>Click to Expand/Collapse</strong></summary>

- ✅ **Secure Login** - Personal authentication
- 📱 **Personal Dashboard** - View key information at a glance
- 👤 **Profile Management** - Update personal information
- 📅 **Attendance Records** - View attendance history
- 📝 **Leave Requests** - Submit and track leave applications
- 💼 **Salary Information** - Access salary details
- 🔔 **Notification System** - Real-time alerts and updates

</details>

### 🔒 Security Features

<details open>
<summary><strong>Click to Expand/Collapse</strong></summary>

- 🔐 **JWT Authentication** - Secure token-based authentication
- 🔑 **Password Encryption** - bcrypt hashing for password security
- 🛡️ **Protected APIs** - Middleware authorization on all endpoints
- 👥 **Role-Based Access Control (RBAC)** - Granular permission management
- 🚫 **Protected Routes** - Frontend route protection
- ⚡ **Environment Security** - Secure environment variables

</details>

### 📊 Dashboard Analytics

<details open>
<summary><strong>Click to Expand/Collapse</strong></summary>

- 📈 **Real-Time Statistics** - Live employee metrics
- 📊 **Visual Charts & Graphs** - Data visualization
- 👥 **Department Overview** - Employee distribution
- 📅 **Attendance Insights** - Attendance patterns
- 💰 **Payroll Analytics** - Salary distribution
- 🗓️ **Leave Statistics** - Leave usage trends

</details>

---

## 🏗️ System Architecture

### 🔄 Application Flow

```mermaid
graph TD
    A["👤 User/Browser"] -->|HTTP Request| B["⚛️ React Frontend<br/>Vite + Tailwind CSS"]
    B -->|API Call| C["🔌 Express Backend<br/>Node.js"]
    C -->|Auth Check| D["🔐 JWT Middleware<br/>RBAC Authorization"]
    D -->|Query/Update| E["🗄️ MongoDB Atlas<br/>Mongoose ODM"]
    E -->|Response| C
    C -->|JSON Response| B
    B -->|Render UI| A
```

### 🔑 Authentication Flow

```mermaid
graph TD
    A["🔓 Login Page"] -->|Credentials| B["🔐 /api/auth/login"]
    B -->|Verify Hash| C["🔑 bcrypt Validation"]
    C -->|✓ Match| D["🎟️ Generate JWT Token"]
    D -->|Token| A
    A -->|Store Token| E["💾 LocalStorage"]
    E -->|Include in Headers| F["🔒 Protected Routes"]
    F -->|Verify Token| G["🛡️ JWT Middleware"]
    G -->|✓ Valid| H["📊 Dashboard Access"]
    G -->|✗ Invalid| I["❌ Redirect to Login"]
```

### 📡 API Request Flow

```mermaid
graph LR
    A["📱 Client"] -->|Request + JWT| B["🚪 Route Handler"]
    B -->|Check Auth| C["🔐 Auth Middleware"]
    C -->|Check Role| D["👥 RBAC Middleware"]
    D -->|Process| E["⚙️ Controller"]
    E -->|Query| F["🗄️ MongoDB"]
    F -->|Data| E
    E -->|Response| A
```

---

## 💾 Database Design

### 👤 User Model

| Field | Type | Description |
|-------|------|-------------|
| `_id` | ObjectId | Unique identifier |
| `name` | String | Full name |
| `email` | String | Email address (unique) |
| `password` | String | Hashed password |
| `role` | String | User role (admin/employee) |
| `createdAt` | Date | Creation timestamp |
| `updatedAt` | Date | Last update timestamp |

### 👨‍💼 Employee Model

| Field | Type | Description |
|-------|------|-------------|
| `employeeId` | String | Unique employee ID |
| `name` | String | Employee name |
| `email` | String | Employee email |
| `phone` | String | Contact number |
| `department` | ObjectId | Reference to Department |
| `designation` | String | Job title |
| `salary` | Number | Annual salary |
| `joinDate` | Date | Joining date |
| `status` | String | Active/Inactive |
| `createdAt` | Date | Creation timestamp |

### 🏢 Department Model

| Field | Type | Description |
|-------|------|-------------|
| `_id` | ObjectId | Unique identifier |
| `departmentName` | String | Department name |
| `description` | String | Department description |
| `managerId` | ObjectId | Reference to Manager |
| `employeeCount` | Number | Number of employees |
| `createdAt` | Date | Creation timestamp |

### 📅 Attendance Model

| Field | Type | Description |
|-------|------|-------------|
| `_id` | ObjectId | Unique identifier |
| `employeeId` | ObjectId | Reference to Employee |
| `date` | Date | Attendance date |
| `status` | String | Present/Absent/Leave |
| `checkIn` | Time | Check-in time |
| `checkOut` | Time | Check-out time |
| `createdAt` | Date | Creation timestamp |

### 🗓️ Leave Model

| Field | Type | Description |
|-------|------|-------------|
| `_id` | ObjectId | Unique identifier |
| `employeeId` | ObjectId | Reference to Employee |
| `leaveType` | String | Sick/Casual/Earned |
| `startDate` | Date | Leave start date |
| `endDate` | Date | Leave end date |
| `reason` | String | Leave reason |
| `status` | String | Pending/Approved/Rejected |
| `approvedBy` | ObjectId | Approver reference |
| `createdAt` | Date | Creation timestamp |

### 💰 Salary Model

| Field | Type | Description |
|-------|------|-------------|
| `_id` | ObjectId | Unique identifier |
| `employeeId` | ObjectId | Reference to Employee |
| `baseSalary` | Number | Base salary |
| `bonus` | Number | Bonus amount |
| `deductions` | Number | Total deductions |
| `netSalary` | Number | Net salary |
| `paymentDate` | Date | Payment date |
| `month` | String | Salary month |
| `createdAt` | Date | Creation timestamp |

---

## 📁 Project Structure

```
Employee-Management-System/
│
├── 📁 client/                          # Frontend Application
│   ├── src/
│   │   ├── 📁 components/             # Reusable React components
│   │   │   ├── Header.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   ├── Dashboard/
│   │   │   ├── Employee/
│   │   │   ├── Department/
│   │   │   ├── Attendance/
│   │   │   ├── Leave/
│   │   │   └── Salary/
│   │   ├── 📁 pages/                  # Page components
│   │   │   ├── LoginPage.jsx
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── EmployeeDashboard.jsx
│   │   │   ├── EmployeeList.jsx
│   │   │   ├── AttendancePage.jsx
│   │   │   ├── LeavePage.jsx
│   │   │   └── SalaryPage.jsx
│   │   ├── 📁 hooks/                  # Custom React hooks
│   │   │   ├── useAuth.js
│   │   │   ├── useEmployee.js
│   │   │   └── useFetch.js
│   │   ├── 📁 services/               # API services
│   │   │   ├── authService.js
│   │   │   ├── employeeService.js
│   │   │   ├── departmentService.js
│   │   │   ├── attendanceService.js
│   │   │   ├── leaveService.js
│   │   │   └── salaryService.js
│   │   ├── 📁 styles/                 # Global styles
│   │   │   └── globals.css
│   │   ├── 📁 assets/                 # Images, icons, etc.
│   │   │   ├── images/
│   │   │   └── icons/
│   │   ├── 📁 context/                # React Context
│   │   │   └── AuthContext.jsx
│   │   ├── 📁 utils/                  # Utility functions
│   │   │   ├── localStorage.js
│   │   │   └── validators.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
│
├── 📁 server/                          # Backend Application
│   ├── 📁 controllers/                # Route handlers
│   │   ├── authController.js
│   │   ├── employeeController.js
│   │   ├── departmentController.js
│   │   ├── attendanceController.js
│   │   ├── leaveController.js
│   │   └── salaryController.js
│   ├── 📁 routes/                     # API routes
│   │   ├── authRoutes.js
│   │   ├── employeeRoutes.js
│   │   ├── departmentRoutes.js
│   │   ├── attendanceRoutes.js
│   │   ├── leaveRoutes.js
│   │   └── salaryRoutes.js
│   ├── 📁 models/                     # Mongoose schemas
│   │   ├── User.js
│   │   ├── Employee.js
│   │   ├── Department.js
│   │   ├── Attendance.js
│   │   ├── Leave.js
│   │   └── Salary.js
│   ├── 📁 middleware/                 # Express middleware
│   │   ├── authMiddleware.js
│   │   ├── errorHandler.js
│   │   ├── rbac.js
│   │   └── logger.js
│   ├── 📁 config/                     # Configuration files
│   │   ├── database.js
│   │   ├── env.js
│   │   └── constants.js
│   ├── 📁 utils/                      # Utility functions
│   │   ├── jwt.js
│   │   ├── password.js
│   │   ├── email.js
│   │   └── response.js
│   ├── 📁 validators/                 # Input validation
│   │   └── schemas.js
│   ├── 📁 logs/                       # Application logs
│   │   └── error.log
│   ├── server.js                      # Entry point
│   ├── .env.example
│   └── package.json
│
├── .gitignore
├── README.md
└── LICENSE
```

---

## 🛠️ Tech Stack

### 🎨 Frontend Stack

| Technology | Version | Purpose |
|---|---|---|
| **React.js** | 18.x | UI Library |
| **Vite** | 5.x | Build tool & development server |
| **Tailwind CSS** | 3.x | Utility-first CSS framework |
| **Axios** | 1.x | HTTP client for API requests |
| **React Router DOM** | 6.x | Client-side routing |
| **React Query** | Latest | State management & API calls |
| **React Toastify** | Latest | Toast notifications |

### 🔧 Backend Stack

| Technology | Version | Purpose |
|---|---|---|
| **Node.js** | 18.x | JavaScript runtime |
| **Express.js** | 4.x | Web framework |
| **Mongoose** | 7.x | MongoDB ODM |
| **JWT** | 9.x | Authentication tokens |
| **bcryptjs** | 2.x | Password hashing |
| **dotenv** | Latest | Environment variables |
| **Cors** | Latest | Cross-origin requests |

### 💾 Database & Services

| Technology | Purpose |
|---|---|
| **MongoDB Atlas** | Cloud database |
| **MongoDB Compass** | Database GUI |
| **Vercel** | Deployment (Frontend & Backend) |

### 🔐 Security & Authentication

| Tool | Purpose |
|---|---|
| **JWT (JSON Web Tokens)** | Secure authentication |
| **bcryptjs** | Password encryption |
| **CORS** | Cross-origin security |
| **Environment Variables** | Sensitive data protection |

---

## 🔐 Security & Authentication

### 🔑 JWT Authentication

- **Token Generation**: JWT tokens are generated upon successful login with a configurable expiration time
- **Token Verification**: All protected routes verify the JWT token in the Authorization header
- **Payload Security**: Sensitive data is never stored in the JWT payload
- **Token Refresh**: Refresh token mechanism for session management

### 🔒 Password Security

```javascript
// Password hashing with bcryptjs
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password, salt);

// Verification
const isPasswordValid = await bcrypt.compare(password, hashedPassword);
```

### 👥 Role-Based Access Control (RBAC)

```javascript
// Middleware example
const checkRole = (requiredRoles) => {
  return (req, res, next) => {
    if (!requiredRoles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Access Denied' });
    }
    next();
  };
};
```

### 🛡️ Protected Routes

- Frontend routes are wrapped with `ProtectedRoute` component
- Backend routes include authentication and authorization middleware
- Environment variables store sensitive credentials

### 🔐 API Security Best Practices

- Rate limiting on authentication endpoints
- HTTPS enforcement in production
- Secure cookie flags
- Input validation and sanitization
- CORS configuration for trusted domains

---

## 📊 REST API Documentation

### 🔓 Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---|
| `POST` | `/api/auth/register` | Register a new user | ❌ No |
| `POST` | `/api/auth/login` | Login user | ❌ No |
| `POST` | `/api/auth/logout` | Logout user | ✅ Yes |
| `GET` | `/api/auth/profile` | Get user profile | ✅ Yes |
| `PUT` | `/api/auth/update-profile` | Update profile | ✅ Yes |

### 👥 Employee Endpoints

| Method | Endpoint | Description | Auth Required | Role Required |
|--------|----------|-------------|---|---|
| `GET` | `/api/employees` | Get all employees | ✅ Yes | Admin |
| `GET` | `/api/employees/:id` | Get employee by ID | ✅ Yes | Admin/Employee |
| `POST` | `/api/employees` | Create employee | ✅ Yes | Admin |
| `PUT` | `/api/employees/:id` | Update employee | ✅ Yes | Admin |
| `DELETE` | `/api/employees/:id` | Delete employee | ✅ Yes | Admin |
| `GET` | `/api/employees/search` | Search employees | ✅ Yes | Admin |

### 🏢 Department Endpoints

| Method | Endpoint | Description | Auth Required | Role Required |
|--------|----------|-------------|---|---|
| `GET` | `/api/departments` | Get all departments | ✅ Yes | Admin |
| `GET` | `/api/departments/:id` | Get department by ID | ✅ Yes | Admin |
| `POST` | `/api/departments` | Create department | ✅ Yes | Admin |
| `PUT` | `/api/departments/:id` | Update department | ✅ Yes | Admin |
| `DELETE` | `/api/departments/:id` | Delete department | ✅ Yes | Admin |

### 📅 Attendance Endpoints

| Method | Endpoint | Description | Auth Required | Role Required |
|--------|----------|-------------|---|---|
| `GET` | `/api/attendance` | Get attendance records | ✅ Yes | Admin |
| `GET` | `/api/attendance/:id` | Get attendance by ID | ✅ Yes | Admin/Employee |
| `POST` | `/api/attendance/checkin` | Mark check-in | ✅ Yes | Employee |
| `POST` | `/api/attendance/checkout` | Mark check-out | ✅ Yes | Employee |
| `PUT` | `/api/attendance/:id` | Update attendance | ✅ Yes | Admin |
| `GET` | `/api/attendance/employee/:employeeId` | Get employee attendance | ✅ Yes | Admin |

### 🗓️ Leave Endpoints

| Method | Endpoint | Description | Auth Required | Role Required |
|--------|----------|-------------|---|---|
| `GET` | `/api/leaves` | Get all leave requests | ✅ Yes | Admin |
| `GET` | `/api/leaves/:id` | Get leave by ID | ✅ Yes | Admin/Employee |
| `POST` | `/api/leaves` | Request leave | ✅ Yes | Employee |
| `PUT` | `/api/leaves/:id` | Update leave request | ✅ Yes | Admin |
| `PATCH` | `/api/leaves/:id/approve` | Approve leave | ✅ Yes | Admin |
| `PATCH` | `/api/leaves/:id/reject` | Reject leave | ✅ Yes | Admin |

### 💰 Salary Endpoints

| Method | Endpoint | Description | Auth Required | Role Required |
|--------|----------|-------------|---|---|
| `GET` | `/api/salaries` | Get all salaries | ✅ Yes | Admin |
| `GET` | `/api/salaries/:id` | Get salary by ID | ✅ Yes | Admin/Employee |
| `POST` | `/api/salaries` | Create salary record | ✅ Yes | Admin |
| `PUT` | `/api/salaries/:id` | Update salary | ✅ Yes | Admin |
| `DELETE` | `/api/salaries/:id` | Delete salary | ✅ Yes | Admin |
| `GET` | `/api/salaries/employee/:employeeId` | Get employee salary | ✅ Yes | Admin/Employee |

---

## ⚙️ Environment Variables

### 🖥️ Frontend Environment Variables

Create a `.env` file in the `client/` directory:

```env
# API Configuration
VITE_API_URL=http://localhost:5000

# Feature Flags
VITE_ENABLE_NOTIFICATIONS=true
VITE_ENABLE_ANALYTICS=false

# Application Settings
VITE_APP_NAME=Employee Management System
VITE_APP_VERSION=1.0.0
```

### 🔧 Backend Environment Variables

Create a `.env` file in the `server/` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/emsdb?retryWrites=true&w=majority

# Authentication
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=7d
REFRESH_TOKEN_SECRET=your_refresh_token_secret

# Email Configuration (Optional)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password

# CORS Configuration
CORS_ORIGIN=http://localhost:5173

# Logging
LOG_LEVEL=debug
LOG_FILE=logs/error.log

# API Rate Limiting
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX_REQUESTS=100

# File Upload
MAX_FILE_SIZE=5242880
UPLOAD_DIR=uploads

# Admin Credentials (For Initial Setup)
ADMIN_EMAIL=admin@emsystem.com
ADMIN_PASSWORD=admin123
```

### 📝 Variable Descriptions

| Variable | Description | Example |
|---|---|---|
| `VITE_API_URL` | Backend API base URL | `http://localhost:5000` |
| `PORT` | Server port | `5000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://...` |
| `JWT_SECRET` | Secret key for JWT signing | `your-secret-key` |
| `NODE_ENV` | Environment type | `development`, `production` |
| `CORS_ORIGIN` | Allowed CORS origin | `http://localhost:5173` |

---

## 📦 Installation Guide

### ✅ Prerequisites

- **Node.js** (v18.0.0 or higher) - [Download](https://nodejs.org)
- **npm** or **yarn** - Comes with Node.js
- **MongoDB Atlas Account** - [Sign up](https://www.mongodb.com/cloud/atlas)
- **Git** - [Download](https://git-scm.com)

### 📥 Clone Repository

```bash
# Clone the repository
git clone https://github.com/Tusharkumar200/Employee-Management-System.git

# Navigate to project directory
cd Employee-Management-System
```

### 🎨 Frontend Installation

```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Update VITE_API_URL in .env
# VITE_API_URL=http://localhost:5000

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### 🔧 Backend Installation

```bash
# Navigate to server directory
cd ../server

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Update environment variables:
# - MONGODB_URI
# - JWT_SECRET
# - PORT (if needed)

# Start development server with nodemon
npm run dev

# Start production server
npm start

# Run with specific node version
node --version
npm run dev
```

### 🗄️ Database Setup

1. **Create MongoDB Atlas Account**
   - Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Sign up and create a new account
   - Create a new cluster

2. **Get Connection String**
   - In MongoDB Atlas, click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<username>`, `<password>`, and database name

3. **Add Connection String to .env**
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/emsdb?retryWrites=true&w=majority
   ```

4. **Verify Connection**
   ```bash
   npm run dev
   # Check server logs for successful MongoDB connection
   ```

### ✨ Verify Installation

**Frontend Running**: Open `http://localhost:5173`

**Backend Running**: Check `http://localhost:5000/api/health`

---

## 🚀 Deployment Guide

### 🌐 Deploy Frontend on Vercel

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Visit [Vercel](https://vercel.com)
   - Click "New Project"
   - Select GitHub repository
   - Choose project root as `client/`

3. **Set Environment Variables**
   - In Vercel Dashboard → Settings → Environment Variables
   - Add `VITE_API_URL` pointing to your backend URL

4. **Deploy**
   - Click "Deploy"
   - Your frontend is now live!

### 🔧 Deploy Backend on Vercel

1. **Prepare Backend for Deployment**
   ```bash
   # Ensure server.js listens on process.env.PORT
   const PORT = process.env.PORT || 5000;
   ```

2. **Create `vercel.json` in server directory**
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "server.js",
         "use": "@vercel/node"
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "server.js"
       }
     ]
   }
   ```

3. **Deploy Backend**
   - Push changes to GitHub
   - In Vercel: New Project → Select same repo
   - Choose `server/` as root
   - Add environment variables (MONGODB_URI, JWT_SECRET, etc.)

4. **Update Frontend API URL**
   - Update `VITE_API_URL` to your Vercel backend URL
   - Redeploy frontend

### 💾 MongoDB Atlas Setup

1. **Create Cluster**
   - Login to MongoDB Atlas
   - Create a new project
   - Build a new cluster (free tier available)

2. **Configure Network Access**
   - Go to "Network Access"
   - Add IP address (allow all for development, restrict in production)

3. **Create Database User**
   - Go to "Database Access"
   - Add new database user
   - Generate connection string

4. **Security Best Practices**
   - Use strong passwords
   - Restrict IP access in production
   - Enable encryption
   - Use VPC endpoints

### 📊 Production Checklist

- [ ] Set `NODE_ENV=production`
- [ ] Use strong `JWT_SECRET` and `REFRESH_TOKEN_SECRET`
- [ ] Enable HTTPS
- [ ] Configure CORS for frontend domain only
- [ ] Set up database backups
- [ ] Enable MongoDB Atlas IP whitelisting
- [ ] Configure logging and monitoring
- [ ] Test all API endpoints
- [ ] Verify email notifications (if applicable)
- [ ] Set up error tracking (Sentry, etc.)

---

## 🎨 Application Screenshots

<div align="center">

### 🔐 Login Page

```html
<img src="./assets/screenshots/login-page.png" alt="Login Page" width="100%"/>
```

*Secure authentication interface for both admins and employees*

### 📊 Admin Dashboard

```html
<img src="./assets/screenshots/admin-dashboard.png" alt="Admin Dashboard" width="100%"/>
```

*Comprehensive dashboard with analytics, charts, and quick access to all features*

### 👤 Employee Dashboard

```html
<img src="./assets/screenshots/employee-dashboard.png" alt="Employee Dashboard" width="100%"/>
```

*Personal dashboard showing key information and upcoming tasks*

### 👥 Employee List

```html
<img src="./assets/screenshots/employee-list.png" alt="Employee List" width="100%"/>
```

*Searchable and filterable list of all employees with quick actions*

### 📅 Attendance Management

```html
<img src="./assets/screenshots/attendance-page.png" alt="Attendance Page" width="100%"/>
```

*Track and manage employee attendance with calendar view*

### 💰 Salary Management

```html
<img src="./assets/screenshots/salary-page.png" alt="Salary Page" width="100%"/>
```

*Manage payroll and salary information for all employees*

### 🏢 Department Management

```html
<img src="./assets/screenshots/department-page.png" alt="Department Page" width="100%"/>
```

*Organize and manage company departments*

### 🗓️ Leave Management

```html
<img src="./assets/screenshots/leave-page.png" alt="Leave Management" width="100%"/>
```

*Process leave requests with approval workflow*

</div>

---

## 🎬 Demo Video

<div align="center">

### 📹 Full Application Demo

```html
<video width="100%" controls style="border-radius: 10px; margin: 20px 0;">
  <source src="./assets/videos/demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

*Watch a complete walkthrough of all features (Duration: ~10 minutes)*

### 🎥 YouTube Demo

<a href="https://youtube.com" target="_blank">
  <img src="https://img.shields.io/badge/YouTube-Demo%20Video-red?style=for-the-badge&logo=youtube" alt="YouTube Demo"/>
</a>

### 📱 Quick Feature Overview

**Admin Features Demo** - See authentication, dashboard, employee management, and reporting

**Employee Features Demo** - Explore personal dashboard, leave requests, and attendance tracking

</div>

---

## 🔄 Future Enhancements

<div align="center">

| 🎯 Feature | 📝 Description | ⏳ Priority |
|---|---|---|
| 🤖 **AI-Based Attendance** | Machine learning to predict attendance patterns | 🔴 High |
| 💳 **Payroll Automation** | Automated salary calculation and processing | 🔴 High |
| 📧 **Email Notifications** | Real-time email alerts for all events | 🟡 Medium |
| 📄 **PDF Reports** | Export reports in PDF format | 🟡 Medium |
| 🏢 **Multi-Organization** | Support multiple organizations in one system | 🟡 Medium |
| 💬 **Real-Time Chat** | Internal messaging system between employees | 🟢 Low |
| 📊 **Advanced Analytics** | AI-powered employee analytics | 🟢 Low |
| 🔔 **Mobile App** | React Native mobile application | 🟢 Low |
| 📍 **GPS Tracking** | Location-based attendance | 🟢 Low |
| 🎓 **Employee Training** | Track training and certifications | 🟢 Low |

</div>

### 🛣️ Roadmap

```
Q1 2025: AI Attendance + Payroll Automation
Q2 2025: Email Integration + PDF Reports
Q3 2025: Multi-Organization Support
Q4 2025: Mobile App + Real-Time Features
```

---

## 🤝 Contributing

We love contributions! This project is open source and welcomes collaboration.

### 📋 How to Contribute

1. **Fork the Repository**
   ```bash
   # Visit the GitHub repository and click "Fork"
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make Your Changes**
   ```bash
   # Edit files and make improvements
   ```

4. **Commit Your Changes**
   ```bash
   git commit -m "Add amazing feature"
   # Use descriptive commit messages
   # Format: "Type: Description"
   # Example: "feat: Add email notifications"
   ```

5. **Push to Your Fork**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch
   - Describe your changes
   - Submit the PR

### ✅ Contribution Guidelines

- **Code Style**: Follow existing code patterns
- **Testing**: Ensure all tests pass before submitting
- **Documentation**: Update README if adding new features
- **Commits**: Use meaningful commit messages
- **Issues**: Check existing issues before creating new ones

### 🐛 Reporting Bugs

1. Check if bug already exists
2. Create detailed bug report with:
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Screenshots/logs (if applicable)
   - Your environment details

### 💡 Suggesting Features

- Describe the feature clearly
- Explain use case and benefits
- Provide examples if possible
- Check if feature already exists

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

<div align="center">

```
MIT License

Copyright (c) 2024-2025 Tushar Kumar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

</div>

---

## 👨‍💻 Developer

<div align="center">

### 👋 Meet the Developer

**Tushar Kumar**

*Full Stack Developer | MERN Stack Specialist | Open Source Enthusiast*

---

| 🔗 Platform | 📍 Link |
|---|---|
| 🐙 **GitHub** | [github.com/Tusharkumar200](https://github.com/Tusharkumar200) |
| 💼 **LinkedIn** | [Add Your LinkedIn](#) |
| 🌐 **Portfolio** | [Add Your Portfolio](#) |
| 📧 **Email** | [Add Your Email](#) |

---

### 🎓 Experience

- **MERN Stack Development** - Full stack web applications
- **Database Design** - MongoDB and relational databases
- **RESTful API Design** - Scalable backend architecture
- **Frontend Development** - React, Next.js, and modern UI frameworks
- **DevOps & Deployment** - Vercel, AWS, and cloud platforms

### 🏆 Featured Projects

- **Employee Management System** - Complete HR management solution
- [Other projects](https://github.com/Tusharkumar200?tab=repositories)

### 📞 Get in Touch

Feel free to reach out for:
- 💼 Job opportunities
- 🤝 Collaboration
- 💬 Questions or suggestions
- 🐛 Bug reports

---

<div align="center">

**⭐ If you found this project helpful, please consider giving it a star!**

**🙏 Thank you for using Employee Management System**

</div>

</div>

---

<div align="center">

### 📈 Project Statistics

![GitHub Stars](https://img.shields.io/badge/Stars-0-yellow?style=flat-square)
![GitHub Forks](https://img.shields.io/badge/Forks-0-blue?style=flat-square)
![GitHub Issues](https://img.shields.io/badge/Issues-0-green?style=flat-square)
![GitHub Pull Requests](https://img.shields.io/badge/Pull%20Requests-0-purple?style=flat-square)

### 🙌 Support & Resources

- 📖 [Documentation](#)
- 🐛 [Report Bug](https://github.com/Tusharkumar200/Employee-Management-System/issues)
- 💡 [Request Feature](https://github.com/Tusharkumar200/Employee-Management-System/issues)
- 📧 [Contact Us](#️-developer)

---

**Made with ❤️ by Tushar Kumar**

**Last Updated: 2025** | **Version: 1.0.0**

</div>