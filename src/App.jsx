import Booklist from "./components/Booklist";
import BorrowedBooks from "./components/BorrowedBooks";
import MemberHistory from "./components/MemberHistory";
import "./App.css";
import { useState, useEffect } from "react";

const TABS = [
  { id: "books", label: "Book List", icon: "📚" },
  { id: "borrowed", label: "Borrowed Books", icon: "🔖" },
  { id: "members", label: "Member History", icon: "👤" },
];

function App() {
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem("ACTIVE_TAB") || "books";
  });

  useEffect(() => {
    localStorage.setItem("ACTIVE_TAB", activeTab);
  }, [activeTab]);

  return (
    <div className="app-wrapper">
      <div className="noise-overlay" />

      <header className="app-header">
        <div className="header-inner">
          <div className="header-logo">
            <span className="logo-icon">⬡</span>
          </div>
          <div className="header-text">
            <h1 className="header-title">Library Management System</h1>
          </div>
        </div>
      </header>

      <nav className="tab-nav">
        <div className="tab-nav-inner">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
              {activeTab === tab.id && <span className="tab-underline" />}
            </button>
          ))}
        </div>
      </nav>

      <main className="app-main">
        <div className="content-card">
          {activeTab === "books" && <Booklist />}
          {activeTab === "borrowed" && <BorrowedBooks />}
          {activeTab === "members" && <MemberHistory />}
        </div>
      </main>

      <footer className="app-footer">
        <p>© {new Date().getFullYear()} Library Management System</p>
      </footer>
    </div>
  );
}

export default App;
