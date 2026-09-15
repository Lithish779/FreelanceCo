# FreelanceCo — Freelancing Marketplace Platform

A full-stack freelancing marketplace built with the MERN stack, where clients post projects and freelancers submit proposals, negotiate contracts, and communicate in real time through the full project lifecycle.

**Live:** [freelance-co.vercel.app](https://freelance-co.vercel.app)
**Repo:** [github.com/Lithish779/FreelanceCo](https://github.com/Lithish779/FreelanceCo)

---

## Overview

FreelanceCo handles the full freelancer-client workflow: posting a project, receiving proposals, negotiating a contract, working through it with real-time chat, and getting paid securely — with an admin layer and AI-assisted content generation on top.

## Tech Stack

**Frontend:** React 19, Vite, TailwindCSS, Material-UI, Radix UI, React Router, Axios, Framer Motion
**Backend:** Node.js, Express.js, MongoDB (Mongoose), Redis (Upstash)
**Real-time:** Socket.io
**Auth:** JWT + OTP verification (Brevo)
**Payments:** Razorpay
**Media:** Cloudinary
**AI:** Google Gemini API
**Infra:** GitHub Actions (CI/CD), Vercel / Render

## Features

- Secure authentication with JWT and email OTP verification
- Real-time chat between clients and freelancers, with file sharing
- Project posting, proposal, and contract lifecycle management
- Razorpay-based payments with escrow-style holds
- AI-assisted project description generation (Gemini)
- Redis caching layer for frequently accessed queries — reduced average API response time by ~40% in local benchmarks
- Real-time notifications
- Dark mode
- Analytics dashboard for tracking proposals, contracts, and earnings

## Project Structure

```
freelanceco/
├── backend/
│   ├── Controllers/       # Business logic (auth, projects, payments, chat, AI, admin)
│   ├── Middlewares/       # Auth, error handling, rate limiting, uploads
│   ├── Models/            # MongoDB schemas
│   ├── Routes/            # API route definitions
│   ├── config/            # Cloudinary, Redis config
│   ├── services/          # Email (Brevo) and payment (Razorpay) services
│   └── index.js
├── frontend/
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── context/       # Auth and theme context
│   │   ├── pages/         # Route-level pages
│   │   ├── services/      # API service layer
│   │   └── hooks/
│   └── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites
- Node.js v16+
- MongoDB Atlas account
- API keys for: Cloudinary, Razorpay, Brevo, Google Gemini, Upstash Redis

### Setup

```bash
# Backend
cd backend
npm install
cp .env.example .env   # fill in your credentials
npm run dev             # runs on http://localhost:8080

# Frontend (new terminal)
cd frontend
npm install
cp .env.example .env
npm run dev              # runs on http://localhost:5173
```

### Environment Variables

**Backend (`backend/.env`)**
```
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

**Frontend (`frontend/.env`)**
```
VITE_API_BASE_URL=http://localhost:8080
```

## API Reference

Full details in [`backend/API_DOCUMENTATION.md`](https://github.com/Lithish779/FreelanceCo/blob/main/backend/API_DOCUMENTATION.md).

| Endpoint | Method | Description | Auth |
|---|---|---|---|
| `/api/auth/signup` | POST | Register new user | ❌ |
| `/api/auth/login` | POST | Login | ❌ |
| `/api/auth/verify-otp` | POST | Verify OTP | ❌ |
| `/api/projects` | GET/POST | List / create projects | ✅ |
| `/api/applications` | POST | Apply to a project | ✅ |
| `/api/payments/create-order` | POST | Create payment order | ✅ |
| `/api/chat/conversations` | GET | List conversations | ✅ |

## Deployment

- **Frontend:** Vercel
- **Backend:** Render / Vercel
- Set `VITE_API_BASE_URL` in the frontend to point at the deployed backend, and `FRONTEND_URL` in the backend to your deployed frontend origin (for CORS).

## Author

**Lithish Kumar**
[GitHub](https://github.com/Lithish779) · [LinkedIn](https://linkedin.com/in/lithishkumar779) · [lithishkumar779@gmail.com](mailto:lithishkumar779@gmail.com)

---

This project is a personal portfolio project built to demonstrate full-stack MERN development, real-time systems, and third-party API integration (payments, AI, email, media).
