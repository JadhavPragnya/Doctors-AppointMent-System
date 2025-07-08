# 🩺 Doctor Appointment System (DAS)

A full-stack, role-based Doctor Appointment System built with React.js, Node.js, Express, and MongoDB. This system enables patients, doctors, and admins to manage appointments efficiently through dedicated interfaces.

---

## 🔥 Features

### 👤 Patient
- Book appointments with doctors
- View upcoming and past appointments
- Login & secure authentication

### 👨‍⚕️ Doctor
- Manage appointment slots
- View patient history
- Role-based dashboard with secure access

### 🧑‍💼 Admin
- Add/manage doctors and users
- Control appointments and system-wide settings
- Clean admin panel with sidebar navigation

---

## 💻 Tech Stack

| Tech | Description |
|------|-------------|
| **Frontend** | React.js, Context API, JSX, Tailwind / CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **Others** | JWT, Multer, Cloudinary, dotenv |

---

## 🗂️ Project Structure

### 📁 Frontend (`/frontend`)
- `components/` – Reusable UI like Navbar, Banner, Footer
- `context/` – AppContext for state management
- `assets/` – Icons, images
- `App.jsx` / `main.jsx` – App entry point and routing

### 📁 Backend (`/backend`)
- `controllers/` – Business logic (admin, doctor, user)
- `models/` – MongoDB models (user, doctor, appointment)
- `routes/` – Route definitions for APIs
- `middlewares/` – JWT auth, role-based access
- `config/` – Database and cloudinary setup

### 📁 Admin Panel (`/admin`)
- Separate frontend for admin dashboard
- Context for admin/doctor state
- Pages like Login, Sidebar, Admin pages

---

## 🔐 Authentication

- JWT-based login for patients, doctors, and admins
- Role-based route protection
- Auth middlewares to manage secure APIs

---

## ⚙️ Setup & Run Locally

### 📦 Clone the Repo
```bash
git clone https://github.com/JadhavPragnya/Doctor-AppointMent-System.git
