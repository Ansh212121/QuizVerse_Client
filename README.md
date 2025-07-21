# 🎯 QuizVerse

> AI-powered Quiz Generation & Analysis Platform using Gemini API, MERN Stack & Chart.js

**QuizVerse** is an intelligent quiz app where users can generate quizzes using the Gemini API, attempt them, and view insightful performance analytics. It includes features like quiz history, answer tracking, personalized charts, and much more.

---

## 🚀 Features

- 🤖 AI-based quiz generation using **Gemini**
- 🧑‍🎓 User authentication (Register/Login with JWT)
- 📝 Attempt quizzes with MCQs and real-time feedback
- 📊 Performance Dashboard using **Chart.js**
- 📚 Quiz history with stored answers and scores
- 📈 Personalized analytics: accuracy, topics, speed, trends

---

## ⚙️ Project Setup Instructions

### 📁 1. Clone the Repository

```bash
git clone https://github.com/your-username/quizverse.git
cd quizverse
```

---

### 🔧 2. Backend Setup (`/backend`)

```bash
cd backend
npm install
```

#### ➕ Create `.env` in `/backend`

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
JWT_SECRET=your_jwt_secret
```

#### ▶️ Start Backend

```bash
npm run dev
```

---

### 💻 3. Frontend Setup (`/frontend`)

```bash
cd ../frontend
npm install
```

#### ➕ Create `.env` in `/frontend`

```env
VITE_API_URL=http://localhost:5000
```

#### ▶️ Start Frontend

```bash
npm run dev
```

---

## 🛠️ Tech Stack

| Layer       | Tools / Libraries                           |
|-------------|---------------------------------------------|
| Frontend    | React.js, Tailwind CSS, Axios               |
| Backend     | Node.js, Express.js, MongoDB, JWT           |
| AI          | Gemini API (Google Generative AI)           |
| Charts      | Chart.js                                     |
| Auth        | JWT-based authentication                    |

---

## 📁 Folder Structure

```
quizverse/
├── backend/       # Express server
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── utils/
├── frontend/      # React client
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── utils/
└── README.md
```

---


## 📊 Dashboard Analytics (via Chart.js)

- **Line Graph** – Performance over time
- **Pie Chart** – Correct vs Incorrect answers
- **Bar Graph** – Topic-wise score
- **Time Analysis** – Speed per quiz attempt

---

## 👨‍💻 Developer

**Ansh Agarwal**  
🌍 Moradabad, India  
🔗 [GitHub](https://github.com/Ansh-Agarwal)

---

## 📃 License

Licensed under the [MIT License](LICENSE)


