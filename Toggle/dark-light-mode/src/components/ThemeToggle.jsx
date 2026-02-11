import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={container}>
      <div style={card}>
        <h2>{theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"}</h2>
        <button style={button} onClick={toggleTheme}>
          Switch Theme
        </button>
      </div>
    </div>
  );
}

const container = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const card = {
  padding: "32px",
  borderRadius: "16px",
  background: "var(--card-bg)",
  border: "1px solid var(--border)",
  textAlign: "center"
};

const button = {
  marginTop: "16px",
  padding: "10px 20px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer"
};
