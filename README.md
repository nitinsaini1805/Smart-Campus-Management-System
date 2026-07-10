# 🎓 Smart Campus Management System

A modern **Smart Campus Management System** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)** with **Socket.io** for real-time communication. The platform streamlines campus operations by providing dedicated portals for **Students, Faculty, and Administrators**. It offers features such as attendance management, assignments, library services, messaging, fee management, leave management, event scheduling, and campus announcements through a secure and user-friendly interface.

---

## 🚀 Features

### 👨‍🎓 Student Module
- Secure Login & Registration
- Interactive Dashboard
- Attendance Tracking
- Course Management
- Assignment Submission
- Leave Management
- Fee Payment & Transaction History
- Library Access
- Notice Board
- Event Calendar
- Real-Time Messaging

### 👨‍🏫 Faculty Module
- Faculty Dashboard
- Student Directory
- Attendance Management
- Course Management
- Assignment Monitoring
- Student Communication

### 👨‍💼 Admin Module
- Admin Dashboard
- Student & Faculty Management
- Notice Board Management
- Event Calendar
- Library Management
- Campus Analytics
- User Management

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express.js
- Socket.io

### Database
- MongoDB
- Mongoose

### Authentication
- JWT Authentication
- Role-Based Access Control (RBAC)

---

## 📁 Project Structure

```
SmartCampus/
│
├── client/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── socket/
│   ├── config/
│   ├── server.js
│   └── package.json
│
├── README.md
└── package.json
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/yourusername/SmartCampus.git
cd SmartCampus
```

### Install Dependencies

#### Backend

```bash
cd server
npm install
```

#### Frontend

```bash
cd client
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLIENT_URL=http://localhost:3000
```

---

## ▶️ Run the Project

### Start Backend

```bash
cd server
npm run dev
```

### Start Frontend

```bash
cd client
npm start
```

The application will run at:

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`

---

## ✨ Key Modules

### Authentication
- Student Login
- Faculty Login
- Admin Login
- User Registration

### Student Portal
- Dashboard
- Attendance
- Assignments
- Messages
- Leave Management
- Account & Fees
- Library
- Events
- Notice Board

### Faculty Portal
- Dashboard
- Student Directory
- Attendance Management
- Course Management
- Student Interaction

### Admin Portal
- Dashboard
- Notice Board
- Event Calendar
- Library Management
- User Management
- Campus Analytics

---

## 🔒 Security Features

- JWT Authentication
- Password Encryption
- Role-Based Authorization
- Protected API Routes
- Secure Database Access

---

## 🌟 Future Enhancements

- Mobile Application
- QR Code Attendance
- Face Recognition Attendance
- AI Chatbot
- Online Examination System
- Push Notifications
- Payment Gateway Integration
- Advanced Analytics Dashboard

---

## 👥 Team Tech Titans

- **Nitin Kumar Saini**
- **Priyanka**
- **Saloni Kumari**
- **Aarti Saini**

---

## 📜 License

This project was developed for academic and educational purposes.

---

## ⭐ Support

If you found this project useful, please **Star ⭐ the repository** and share your feedback.

