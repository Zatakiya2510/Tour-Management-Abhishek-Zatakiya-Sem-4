# 🧳 Tour Management System

A full-stack **Tour Management Web Application** developed using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**. This platform allows users to explore, book, and manage tours, while admins have full control over tours, bookings, and user interactions. The app includes **OTP-based email verification**, secure authentication, and an intuitive dashboard for both users and administrators.

---

## 🔥 Key Features

### 👥 Authentication & Security
- User Registration with **OTP-based Email Verification**
- Secure Login/Logout using **JWT**
- Protected Routes for Users and Admins

### 👤 User Functionalities
- Browse available tours with details
- Book tours and view booking history
- Submit and view reviews for booked tours

### 🛠️ Admin Functionalities
- Admin login with dashboard access
- Add, update, and delete tour cards
- View and manage all user bookings
- Manage user reviews and tour content

---

## 🧱 Tech Stack (MERN)

| Layer        | Technology                        |
|--------------|------------------------------------|
| **Frontend** | React.js, Axios, React Router DOM  |
| **Backend**  | Node.js, Express.js               |
| **Database** | MongoDB with Mongoose ORM         |
| **Auth**     | JWT (JSON Web Tokens)             |
| **Email**    | Nodemailer for OTP verification   |
| **Styling**  | CSS3, Bootstrap / Tailwind (if used) |

---

## 📁 Project Structure

tour-management/
├── backend/                        # Express.js backend
│   ├── controllers/                # Logic for tours, users, bookings, reviews, auth
│   ├── models/                     # Mongoose schemas (User, Tour, Booking, Review)
│   ├── routes/                     # API route handlers
│   ├── utils/                      # OTP generator, email sender, helpers
│   ├── middleware/                 # Auth middleware (JWT, admin check)
│   ├── config/                     # DB connection, Nodemailer config
│   └── server.js                   # App entry point
│
├── frontend/                       # React frontend
│   ├── public/                     # Static files and index.html
│   └── src/
│       ├── components/             # Reusable UI components (Navbar, TourCard, etc.)
│       ├── pages/                  # Route pages (Login, Register, Home, AdminPanel)
│       ├── context/                # Auth or global state (e.g. user session)
│       ├── services/               # Axios API calls
│       ├── utils/                  # Helper functions (e.g. formatDate, validation)
│       ├── App.js                  # Main app component with routing
│       └── index.js                # App entry point
│
├── .env                            # Environment variables for backend
├── package.json                    # Project metadata & scripts
├── README.md                       # Project documentation

---

## ⚙️ Getting Started

### ✅ Prerequisites

- Node.js & npm installed
- MongoDB database (Atlas)
- Valid email credentials (for OTP)

### 🔧 Installation

# Clone the repository
git clone https://github.com/Zatakiya2510/Tour-Management-Abhishek-Zatakiya-Sem-4.git
cd Tour-Management-Abhishek-Zatakiya-Sem-4

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

# Start the backend server
cd backend
npm run dev

# Start the frontend application
cd ../frontend
npm start

# Enviroment Variable
PORT=
MONGO_URI=
JWT_SECRET_KEY=
EMAIL_USER=
EMAIL_PASS=

# Signup / Login Authentication  
# Step : 1 Enter the email 
![image](https://github.com/user-attachments/assets/4be2c381-22e8-4b09-9d7a-f42c8a8a8dc0)
# Step : 2 Enter the otp 
![image](https://github.com/user-attachments/assets/33a49ed2-c861-4d0f-a0e4-38716056c1b9)
# Step : 3 Enter the Username And Password 
![image](https://github.com/user-attachments/assets/b32798de-4737-4aed-9e9d-c3ca1358f93f)
# Step : 4 Enter the email and password for login
![image](https://github.com/user-attachments/assets/fd6e3695-b899-4441-bd90-a2b6156f5ca4)

## Author
**Abhishek Zatakiya**
- [GitHub](https://github.com/Zatakiya2510)
- [LinkedIn](https://www.linkedin.com/in/zatakiya-abhishek-426087252/)

## Live Demo 
## Frontend
- [Vercel](https://tour-frontend-two.vercel.app/home)
## Backend
- [Render](https://tour-backend-i1a8.onrender.com)




