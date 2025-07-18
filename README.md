# 🎓 Digital Course Purchase App

A simple and elegant web application that allows users to browse, view, and purchase online courses. Built using **React.js**, this frontend-only app simulates course checkout functionality, including a mock payment processing screen.

---

## 🚀 Features

- 🏠 Home page with course highlights and hero section
- 📚 Courses page listing multiple React-based learning tracks
- 💳 Checkout page with dynamic course details and processing state
- ✅ Success page confirming purchase
- ⚡ Fully responsive design using Tailwind CSS
- 🧠 State management using React Hooks and React Router

---

## 🛠️ Tech Stack

- **Frontend:** React.js + Tailwind CSS
- **Routing:** React Router DOM
- **State:** React Hooks (`useNavigate`, `useLocation`)
- **Mock Payment:** Simulated processing using `setTimeout`

---

## 📁 Folder Structure

src/
├── components/
│ ├── Navbar.jsx
│ └── Footer.jsx
├── pages/
│ ├── Home.jsx
│ ├── Courses.jsx
│ ├── Checkout.jsx
│ └── Success.jsx
├── App.jsx
├── api.js (optional for backend later)
└── main.jsx


---

## 🔧 How to Run Locally

```bash
# Clone the repository
git clone https://github.com/yourusername/course-app.git

# Navigate into the project directory
cd course-app

# Install dependencies
npm install

# Start the app
npm run dev

---

##📦 Future Enhancements
💸 Integrate real Stripe or Razorpay payment gateway

🔐 User authentication and protected routes

📦 Backend with Express + MongoDB

🧾 Order history and access log
