<h1 align="center">
  <br>
  🐷 <br>
  Pork - Your Digital Piggy Bank
  <br>
</h1>

<h4 align="center">A modern financial assistant to manage expenses, save money, and achieve your dreams.</h4>

<p align="center">
  <a href="#-about">About</a> •
  <a href="#-key-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-authentication">Authentication</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-authors">Authors</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-active-success.svg?style=flat-square&color=2E8B57" alt="Status">
  <img src="https://img.shields.io/badge/react-v19-blue?style=flat-square&logo=react" alt="React">
  <img src="https://img.shields.io/badge/vite-v7-purple?style=flat-square&logo=vite" alt="Vite">
  <img src="https://img.shields.io/badge/tailwindcss-v4-38B2AC?style=flat-square&logo=tailwindcss" alt="TailwindCSS">
  <img src="https://img.shields.io/badge/license-MIT-lightgrey?style=flat-square" alt="License">
</p>

<br>

##  About

**Pork** is a comprehensive digital financial management platform designed to transform how users interact with their money. More than just a spreadsheet, it acts as an intelligent "digital piggy bank," providing tools for expense control, goal setting, and personalized economic planning.

Built with a focus on **User Experience (UX)** and **Performance**, the application features a responsive design, fluid animations, and real-time data visualization to make financial organization an engaging habit rather than a chore.

---

##  Key Features

* ** Smart Savings Plans:** Personalized strategies (Easy, Medium, Hard) adapting to the user's financial reality.
* ** Interactive Dashboards:** Visual data representation using **Recharts** to track spending habits and savings progress.
* ** Expense Tracking:** Easy logging and categorization of daily expenses (Food, Transport, Leisure, etc.).
* ** Custom Goals:** Define and track specific financial objectives to stay motivated.
* ** Robust Security:** Advanced authentication system ensuring data privacy and session persistence.

---

##  Tech Stack

This project leverages the latest advancements in the JavaScript ecosystem to ensure speed, scalability, and maintainability.

### Frontend
| Technology | Description |
| :--- | :--- |
| **React 19** | The latest core library for building user interfaces. |
| **Vite** | Next-generation frontend tooling for ultra-fast builds. |
| **Tailwind CSS v4** | Utility-first CSS framework for rapid and modern styling. |
| **Axios** | Promise-based HTTP client for API communication. |
| **Recharts** | Composable charting library for React components. |
| **SweetAlert2** | Beautiful, responsive, and customizable replacement for popup boxes. |
| **AOS & Tailwind-Animated** | Libraries for scroll animations and micro-interactions. |

### Architecture & State
* **Context API:** Global state management for Authentication (`AuthContext`) and Alerts (`AlertContext`).
* **React Router DOM v7:** Client-side routing with protected routes (`PrivateRoute`).

---

##  Authentication & Security

The application implements a secure authentication flow designed for production environments:

* **HttpOnly Cookies:** Sessions are managed via secure cookies, preventing XSS attacks on tokens.
* **Global Axios Config:** `withCredentials: true` is enabled globally to ensure seamless cookie transmission.
* **Protected Routes:** A dedicated High-Order Component (HOC) intercepts unauthorized access attempts, redirecting users to the login flow while preserving navigation history.
* **Session Persistence:** Users remain logged in even after refreshing the page, thanks to the synchronized state management between the backend session and the frontend Context.

---

## Project Structure

- 📂 **src/**
  - 📂 **components/** — *Modular React Components*
    - 📁 **FormsComponents/** — *Inputs, Buttons*
    - 📁 **GeneralComponents/** — *Navbar, Footer, PrivateRoute*
    - 📁 **LandingComponents/** — *Hero, Cards, Carousels*
    - 📁 **MainPageComponents/** — *Dashboard Widgets, Charts, Modals*
  - 📂 **contexts/** — *Global State (Auth, Alerts)*
  - 📂 **pages/** — *Application Views (Login, Register, Dashboard)*
  - 📂 **public/** — *Static Assets (Icons, Backgrounds)*
  - 📄 **main.jsx** — *Entry Point*

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites
* **Node.js** (v18 or higher)
* **npm** or **yarn**

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/dev-Chaves/Pork.git](https://github.com/dev-Chaves/Pork.git)
    cd Pork
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Access the application:**
    Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`).

### Build for Production
To create an optimized build for deployment:
```bash
npm run build
