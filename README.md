# 🚀 FreelanceCo — Where Freelancers Meet Their Next Big Project

<div align="center">
  <p><i>Post it. Pitch it. Get paid. All in one place.</i></p>

  [![Vercel](https://img.shields.io/badge/Vercel-Live-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://freelance-co.vercel.app)
  [![License](https://img.shields.io/badge/License-MIT-2ea043?style=for-the-badge)](LICENSE)
  [![Made by Lithish](https://img.shields.io/badge/Made%20by-Lithish%20Kumar-6C47FF?style=for-the-badge)](https://github.com/Lithish779)

</div>

---

## 🧰 Languages and Tools

<p align="left">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
</p>
<p align="left">
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white" />
  <img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" />
  <img src="https://img.shields.io/badge/Razorpay-02042B?style=for-the-badge&logo=razorpay&logoColor=3395FF" />
  <img src="https://img.shields.io/badge/Google_Gemini-4285F4?style=for-the-badge&logo=googlegemini&logoColor=white" />
  <img src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white" />
</p>

---

## ✨ Features

### 🤝 The Full Freelance Lifecycle
- **Post & Discover** — clients post projects, freelancers browse and pitch
- **Proposals & Contracts** — negotiate scope, accept terms, lock in a contract
- **Escrow-Style Payments** — Razorpay-secured transactions, released on delivery

### 💬 Real-Time Everything
- **Live Chat** — Socket.io powered messaging with file sharing, typing indicators, and presence
- **Instant Notifications** — stay on top of proposals, messages, and payments as they happen

### 🤖 AI-Assisted Workflow
- **Smart Project Descriptions** — Gemini AI helps clients write clearer briefs
- **Skill Matching Suggestions** — AI-assisted matching between projects and freelancer profiles

### 🔐 Built to Be Trusted
- **JWT + OTP Auth** — email verification on top of token-based sessions
- **Redis-Cached Reads** — frequently hit endpoints cached to keep things fast
- **Cloudinary Media Pipeline** — secure, optimized file/image uploads

### 🌓 Polish
- Full dark mode
- Responsive across desktop and mobile
- Analytics dashboard for proposals, contracts, and earnings

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js v16+
- MongoDB Atlas account
- API keys: Cloudinary · Razorpay · Brevo · Google Gemini · Upstash Redis

### Backend
```bash
cd backend
npm install
cp .env.example .env   # fill in your credentials
npm run dev             # → http://localhost:8080
```

### Frontend
```bash
cd frontend
npm install
cp .env.example .env
npm run dev              # → http://localhost:5173
```

### Environment Variables

<details>
<summary><b>backend/.env</b></summary>

```env
PORT=8080
FRONTEND_URL=http://localhost:5173
MONGO_CONN=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
BREVO_API_KEY=
BREVO_SENDER_EMAIL=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
GEMINI_API_KEY=
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```
</details>

<details>
<summary><b>frontend/.env</b></summary>

```env
VITE_API_BASE_URL=http://localhost:8080
```
</details>

---

## 📁 Project Structure

```text
freelanceco/
├── backend/
│   ├── Controllers/       # Auth, projects, payments, chat, AI, admin
│   ├── Middlewares/       # Auth, error handling, rate limiting, uploads
│   ├── Models/             # MongoDB schemas
│   ├── Routes/             # API route definitions
│   ├── config/             # Cloudinary, Redis config
│   ├── services/           # Email (Brevo) and payment (Razorpay) logic
│   └── index.js
├── frontend/
│   └── src/
│       ├── components/     # Reusable UI
│       ├── context/        # Auth & theme state
│       ├── pages/          # Route-level views
│       └── services/       # API layer
└── README.md
```

---

## 📚 API Reference

Full docs: [`backend/API_DOCUMENTATION.md`](https://github.com/Lithish779/FreelanceCo/blob/main/backend/API_DOCUMENTATION.md)

| Endpoint | Method | Description | Auth |
|---|:---:|---|:---:|
| `/api/auth/signup` | POST | Register new user | ❌ |
| `/api/auth/login` | POST | Login | ❌ |
| `/api/auth/verify-otp` | POST | Verify OTP | ❌ |
| `/api/projects` | GET/POST | List / create projects | ✅ |
| `/api/applications` | POST | Apply to a project | ✅ |
| `/api/payments/create-order` | POST | Create payment order | ✅ |
| `/api/chat/conversations` | GET | List conversations | ✅ |

---

## 🚢 Deployment

- **Frontend** → Vercel
- **Backend** → Render / Vercel
- Point `VITE_API_BASE_URL` at your deployed backend, and set `FRONTEND_URL` on the backend for CORS.

---

<div align="center">

### 👤 Author

**Lithish Kumar**

[![GitHub](https://img.shields.io/badge/GitHub-Lithish779-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Lithish779)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/lithishkumar779)
[![Gmail](https://img.shields.io/badge/Email-Contact-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:lithishkumar779@gmail.com)

<br>

**[🌐 Live Demo](https://freelance-co.vercel.app)** • **[💻 GitHub Repo](https://github.com/Lithish779/FreelanceCo)**

<sub>Built as a personal portfolio project to demonstrate full-stack MERN development, real-time systems, and third-party API integration.</sub>

</div>
