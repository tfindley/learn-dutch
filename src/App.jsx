import { useState } from "react";
import DutchTutor from "../dutch-100-words";
import DutchGrammar from "../dutch-grammar";
import DutchTests from "../dutch-tests";

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
  {
    id: "tests",
    title: "Tests",
    subtitle: "Practice quizzes & marathon sessions",
    accent: "#7c6fcd",
    bg: "#0e0d1a",
    border: "#1e1c3a",
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

  if (active === "tests") {
    return (
      <div>
        <BackButton onClick={() => setActive(null)} color="#7c6fcd" />
        <DutchTests />
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
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
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
            href="https://github.com/tfindley/learn-dutch"
            target="_blank"
            rel="noopener noreferrer"
            title="View source on GitHub"
            style={{
              fontSize: "11px",
              color: "#4a4a4a",
              letterSpacing: "2px",
              textDecoration: "none",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#f0e6c8"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#4a4a4a"}
          >
            <svg height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            GitHub
          </a>
        </div>
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
