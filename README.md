# MERN Chat App — DevOps Practical Exam

A simple MERN stack chat application demonstrating:
- MERN basics (MongoDB, Express, React, Node.js)
- JWT Authentication
- Docker & docker-compose
- GitHub Actions CI/CD
- Jenkins Pipeline

---

## 📁 Folder Structure

```
DevOps_Practicalexam/
├── client/               → React Frontend
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   └── Chat.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── public/index.html
│   ├── nginx.conf
│   ├── Dockerfile
│   └── package.json
├── server/               → Node.js Backend
│   ├── models/
│   │   ├── User.js
│   │   └── Message.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── messages.js
│   ├── server.js
│   ├── .env
│   ├── Dockerfile
│   └── package.json
├── .github/
│   └── workflows/
│       └── ci.yml
├── docker-compose.yml
├── Jenkinsfile
└── README.md
```

---

## 🔹 API Endpoints

| Method | Endpoint             | Description         |
|--------|----------------------|---------------------|
| POST   | /api/auth/register   | Register a user     |
| POST   | /api/auth/login      | Login and get token |
| GET    | /api/messages        | Fetch all messages  |
| POST   | /api/messages        | Send a message      |

---

## 🚀 How to Run

### Option 1: Run Locally

**Backend:**
```bash
cd server
npm install
npm start
```
> Server runs on http://localhost:5000

**Frontend:**
```bash
cd client
npm install
npm start
```
> App opens at http://localhost:3000

---

### Option 2: Run with Docker

```bash
docker-compose up --build
```
- Frontend → http://localhost:3000
- Backend  → http://localhost:5000
- MongoDB  → localhost:27017

---

### Option 3: Git Commands

```bash
git init
git add .
git commit -m "DevOps MERN Practical"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

---

## 🔧 Tech Stack

| Layer     | Technology      |
|-----------|-----------------|
| Frontend  | React.js        |
| Backend   | Node.js, Express|
| Database  | MongoDB         |
| Auth      | JWT             |
| Container | Docker, Nginx   |
| CI/CD     | GitHub Actions  |
| Pipeline  | Jenkins         |

---

## 📝 Message Schema

```js
{
  username: String,
  text: String,
  createdAt: Date
}
```
