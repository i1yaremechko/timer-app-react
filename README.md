# ⏱️ Timers App

A modern SPA application for creating and managing timers, built with **React**, **TypeScript**, and **Vite**.

---

## 🔗 Live Demo
[View the Live Project](https://i1yaremechko.github.io/timer-app-react/)

---

## 🚀 Features

* ➕ **Create Timers**: Quickly add custom timers with any title.
* ⏸️ **Control Playback**: Start and pause each timer independently.
* 🗑️ **Delete Timers**: Easily remove timers you no longer need.
* 💾 **Persistent State**: Automatically saves your timers to `localStorage` so they stay saved after refreshing the page.
* ⏱️ **Time Formatting**: Clean and consistent time display in strict `hh:mm:ss` format.

---

## 🛠️ Tech Stack

* **Frontend**: React 18
* **Language**: TypeScript
* **Build Tool**: Vite
* **Styling**: SCSS (BEM methodology)
* **Code Quality**: ESLint, Prettier, Custom Hooks architecture

---

## Project Structure
  ```
  src/
  ├── assets/         # Static assets (SVG icons, images)
  ├── common/         # Global types and utility functions
  ├── features/       # Feature-based components (Header, TimersSection, Footer, etc.)
  ├── layouts/        # Layout components
  ├── App.tsx         # Root application component
  └── main.tsx        # Vite entry point
  ```

---

## 💻 Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation & Setup

1. **Clone the repository:**
  ```bash
  git clone [https://github.com/i1yaremechko/timer-app-react.git](https://github.com/i1yaremechko/timer-app-react.git)
  cd timer-app-react
  ```

2. **Install the dependencies:**
  ```bash
  npm install
  ```

3. **Compile SCSS styles:**
  ```bash
  npm run scss
  ```

4. **Run the development server:**
  ```bash
  npm run dev
  ```

4. **Launch the application:**
  ```bash
  npm run build
  ```