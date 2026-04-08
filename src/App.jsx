import { useState } from "react";
import DutchTutor from "../dutch-100-words";
import DutchGrammar from "../dutch-grammar";

const SITES = [
  {
    id: "words",
    title: "100 Words",
    subtitle: "Essential vocabulary with phonetics & flashcards",
    accent: "#c8a84b",
    bg: "#1a1200",
    border: "#3a2800",
  },
  {
    id: "grammar",
    title: "Grammar",
    subtitle: "Rules, patterns & interactive quizzes",
    accent: "#2ecc71",
    bg: "#0d200d",
    border: "#1a3a1a",
  },
];

export default function App() {
  const [active, setActive] = useState(null);

  if (active === "words") {
    return (
      <div>
        <BackButton onClick={() => setActive(null)} color="#c8a84b" />
        <DutchTutor />
      </div>
    );
  }

  if (active === "grammar") {
    return (
      <div>
        <BackButton onClick={() => setActive(null)} color="#2ecc71" />
        <DutchGrammar />
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0a",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px",
      fontFamily: "'Courier New', Courier, monospace",
    }}>
      <div style={{ marginBottom: "48px", textAlign: "center" }}>
        <div style={{
          fontSize: "11px",
          letterSpacing: "4px",
          color: "#4a4a4a",
          marginBottom: "12px",
          textTransform: "uppercase",
        }}>
          BELGIAN DUTCH
        </div>
        <h1 style={{
          fontSize: "clamp(28px, 5vw, 48px)",
          fontWeight: "bold",
          color: "#f0e6c8",
          letterSpacing: "2px",
          margin: 0,
        }}>
          LEER NEDERLANDS
        </h1>
        <div style={{
          marginTop: "12px",
          fontSize: "13px",
          color: "#5a5a5a",
          letterSpacing: "1px",
        }}>
          Choose a module to begin
        </div>
      </div>

      <div style={{
        display: "flex",
        gap: "24px",
        flexWrap: "wrap",
        justifyContent: "center",
        maxWidth: "700px",
        width: "100%",
      }}>
        {SITES.map((site) => (
          <button
            key={site.id}
            onClick={() => setActive(site.id)}
            style={{
              flex: "1 1 260px",
              minHeight: "160px",
              background: site.bg,
              border: `1px solid ${site.border}`,
              borderLeft: `4px solid ${site.accent}`,
              borderRadius: "3px",
              padding: "28px 24px",
              cursor: "pointer",
              textAlign: "left",
              transition: "border-color 0.15s, background 0.15s",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = site.accent;
              e.currentTarget.style.background = site.bg.replace(
                /^#([0-9a-f]{6})$/i,
                (_, hex) => `#${(parseInt(hex, 16) + 0x111111).toString(16).padStart(6, "0")}`
              );
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderLeftColor = site.accent;
              e.currentTarget.style.borderTopColor = site.border;
              e.currentTarget.style.borderRightColor = site.border;
              e.currentTarget.style.borderBottomColor = site.border;
              e.currentTarget.style.background = site.bg;
            }}
          >
            <div style={{
              fontSize: "9px",
              letterSpacing: "3px",
              color: site.accent,
              marginBottom: "10px",
              textTransform: "uppercase",
            }}>
              MODULE
            </div>
            <div style={{
              fontSize: "22px",
              fontWeight: "bold",
              color: "#f0e6c8",
              letterSpacing: "1px",
              marginBottom: "10px",
            }}>
              {site.title}
            </div>
            <div style={{
              fontSize: "12px",
              color: "#6a6a6a",
              lineHeight: "1.5",
              letterSpacing: "0.3px",
            }}>
              {site.subtitle}
            </div>
            <div style={{
              marginTop: "20px",
              fontSize: "10px",
              color: site.accent,
              letterSpacing: "2px",
            }}>
              OPEN →
            </div>
          </button>
        ))}
      </div>

      <div style={{
        marginTop: "56px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
      }}>
        <a
          href="https://tfindley.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "11px",
            color: "#4a4a4a",
            letterSpacing: "2px",
            textDecoration: "none",
            textTransform: "uppercase",
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = "#f0e6c8"}
          onMouseLeave={(e) => e.currentTarget.style.color = "#4a4a4a"}
        >
          tfindley.co.uk
        </a>
        <a
          href="https://ko-fi.com/tfindley"
          target="_blank"
          rel="noopener noreferrer"
          title="Support me on Ko-fi"
        >
          <img
            src="https://ko-fi.com/img/githubbutton_sm.svg"
            alt="Support me on Ko-fi"
            style={{ height: "32px", opacity: 0.7, transition: "opacity 0.15s" }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
            onMouseLeave={(e) => e.currentTarget.style.opacity = "0.7"}
          />
        </a>
      </div>
    </div>
  );
}

function BackButton({ onClick, color }) {
  return (
    <button
      onClick={onClick}
      style={{
        position: "fixed",
        top: "16px",
        left: "16px",
        zIndex: 1000,
        background: "rgba(10,10,10,0.85)",
        border: `1px solid ${color}44`,
        borderRadius: "3px",
        color: color,
        fontFamily: "'Courier New', Courier, monospace",
        fontSize: "11px",
        letterSpacing: "2px",
        padding: "8px 14px",
        cursor: "pointer",
        backdropFilter: "blur(4px)",
      }}
    >
      ← MENU
    </button>
  );
}
