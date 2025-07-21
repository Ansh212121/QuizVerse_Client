# 🎯 QuizVerse

> AI-powered Quiz Generation & Analysis Platform using Gemini API, MERN Stack & Chart.js

**QuizVerse** is an intelligent quiz app where users can generate quizzes using the Gemini API, attempt them, and view insightful performance analytics. It includes features like quiz history, answer tracking, personalized charts, and much more.

---

## 🖼️ Preview

> Here's a visual walkthrough of QuizVerse in action:

### 🧠 AI-Generated Quiz Interface  
<img width="1877" height="837" alt="Quiz Page" src="https://github.com/user-attachments/assets/d4c8bd71-8725-4c76-9f75-bc0022f8818f" />

### 📋 Quiz Result with Answer Breakdown  
<img width="1871" height="831" alt="Quiz Result" src="https://github.com/user-attachments/assets/7167ff53-d9f7-44bf-8e88-3beb3f38213f" />

### 📚 Past History & Detailed Result View  
<img width="1858" height="726" alt="History Details" src="https://github.com/user-attachments/assets/639cbb98-e09b-438d-8647-c731db9249d3" />

### 📊 Personalized Dashboard with Analytics  
<img width="1844" height="840" alt="Dashboard Charts" src="https://github.com/user-attachments/assets/f3844fc6-7bad-44ef-b3b9-f91075dac8bb" />

### 🧾 Quiz List History  
<img width="1213" height="756" alt="Quiz History Table" src="https://github.com/user-attachments/assets/38df0a13-5f88-4601-9ca2-9cc7329094e9" />

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

- 📈 **Line Graph** – Performance over time
- 🧠 **Pie Chart** – Correct vs Incorrect answers
- 📚 **Bar Graph** – Topic-wise score
- ⏱️ **Time Analysis** – Speed per quiz attempt

---

## 👨‍💻 Developer

**Ansh Agarwal**  
🌍 Moradabad, India  
🔗 [GitHub](https://github.com/Ansh-Agarwal)

---

## 📃 License

Licensed under the [MIT License](LICENSE)
