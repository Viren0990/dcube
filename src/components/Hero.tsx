"use client";

import React, { useEffect, useState } from "react";

const words = ["Mumbai", "Bangalore", "Pune", "Delhi", "Hyderabad", "Chennai"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade out
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
        setFade(true); // fade back in
      }, 220); // wait for fade out
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="beam beam-1"></div>
      <div className="beam beam-2"></div>
      <div className="beam beam-3"></div>
      <div className="dots"></div>
      
      <svg className="leaf leaf-left" width="130" height="150" viewBox="0 0 130 150" fill="none">
        <path d="M10 150C10 90 40 40 100 20C95 70 85 110 40 140C28 148 18 150 10 150Z" fill="#2F6F63" opacity="0.55" />
        <path d="M10 150C10 100 30 60 75 35" stroke="#1C2B2E" strokeWidth="2" opacity="0.2" fill="none" />
      </svg>
      <svg className="leaf leaf-right" width="150" height="170" viewBox="0 0 150 170" fill="none">
        <path d="M10 170C10 100 45 45 115 22C110 80 98 125 45 158C31 167 19 170 10 170Z" fill="#1F3557" opacity="0.45" />
        <path d="M10 170C10 110 33 65 82 38" stroke="#1C2B2E" strokeWidth="2" opacity="0.15" fill="none" />
      </svg>

      <div className="wrap">
        <div className="flank-icons">
          <div className="chip chip-mum" style={{ "--r": "-6deg" } as React.CSSProperties}>
            <svg viewBox="0 0 40 50" width="35" height="44">
              <rect x="12" y="4" width="16" height="42" rx="2" fill="#fff" />
              <rect x="15" y="9" width="3" height="3" fill="#C1622D" /><rect x="22" y="9" width="3" height="3" fill="#C1622D" />
              <rect x="15" y="15" width="3" height="3" fill="#C1622D" /><rect x="22" y="15" width="3" height="3" fill="#C1622D" />
              <rect x="15" y="21" width="3" height="3" fill="#C1622D" /><rect x="22" y="21" width="3" height="3" fill="#C1622D" />
              <rect x="15" y="27" width="3" height="3" fill="#C1622D" /><rect x="22" y="27" width="3" height="3" fill="#C1622D" />
              <rect x="17" y="38" width="6" height="8" fill="#C1622D" />
            </svg>
          </div>
          <div className="chip chip-blr" style={{ "--r": "4deg" } as React.CSSProperties}>
            <svg viewBox="0 0 44 40" width="42" height="37">
              <rect x="3" y="9" width="38" height="29" rx="2" fill="#fff" />
              <rect x="7" y="14" width="4" height="4" fill="#1F3557" /><rect x="14" y="14" width="4" height="4" fill="#1F3557" /><rect x="21" y="14" width="4" height="4" fill="#1F3557" /><rect x="28" y="14" width="4" height="4" fill="#1F3557" />
              <rect x="7" y="21" width="4" height="4" fill="#1F3557" /><rect x="14" y="21" width="4" height="4" fill="#1F3557" /><rect x="21" y="21" width="4" height="4" fill="#1F3557" /><rect x="28" y="21" width="4" height="4" fill="#1F3557" />
              <rect x="18" y="30" width="8" height="8" fill="#1F3557" />
            </svg>
          </div>
          <div className="chip chip-pun" style={{ "--r": "-3deg" } as React.CSSProperties}>
            <svg viewBox="0 0 40 50" width="33" height="41">
              <rect x="12" y="4" width="16" height="42" rx="2" fill="#fff" />
              <rect x="15" y="9" width="3" height="3" fill="#E8A33D" /><rect x="22" y="9" width="3" height="3" fill="#E8A33D" />
              <rect x="15" y="15" width="3" height="3" fill="#E8A33D" /><rect x="22" y="15" width="3" height="3" fill="#E8A33D" />
              <rect x="15" y="21" width="3" height="3" fill="#E8A33D" /><rect x="22" y="21" width="3" height="3" fill="#E8A33D" />
              <rect x="15" y="27" width="3" height="3" fill="#E8A33D" /><rect x="22" y="27" width="3" height="3" fill="#E8A33D" />
              <rect x="17" y="38" width="6" height="8" fill="#E8A33D" />
            </svg>
          </div>
          <div className="chip chip-del" style={{ "--r": "7deg" } as React.CSSProperties}>
            <svg viewBox="0 0 44 40" width="40" height="35">
              <rect x="3" y="9" width="38" height="29" rx="2" fill="#fff" />
              <rect x="7" y="14" width="4" height="4" fill="#2F6F63" /><rect x="14" y="14" width="4" height="4" fill="#2F6F63" /><rect x="21" y="14" width="4" height="4" fill="#2F6F63" /><rect x="28" y="14" width="4" height="4" fill="#2F6F63" />
              <rect x="7" y="21" width="4" height="4" fill="#2F6F63" /><rect x="14" y="21" width="4" height="4" fill="#2F6F63" /><rect x="21" y="21" width="4" height="4" fill="#2F6F63" /><rect x="28" y="21" width="4" height="4" fill="#2F6F63" />
              <rect x="18" y="30" width="8" height="8" fill="#2F6F63" />
            </svg>
          </div>
          <div className="chip chip-hyd" style={{ "--r": "-5deg" } as React.CSSProperties}>
            <svg viewBox="0 0 40 50" width="33" height="41">
              <rect x="12" y="4" width="16" height="42" rx="2" fill="#fff" />
              <rect x="15" y="9" width="3" height="3" fill="#8C4A2F" /><rect x="22" y="9" width="3" height="3" fill="#8C4A2F" />
              <rect x="15" y="15" width="3" height="3" fill="#8C4A2F" /><rect x="22" y="15" width="3" height="3" fill="#8C4A2F" />
              <rect x="15" y="21" width="3" height="3" fill="#8C4A2F" /><rect x="22" y="21" width="3" height="3" fill="#8C4A2F" />
              <rect x="15" y="27" width="3" height="3" fill="#8C4A2F" /><rect x="22" y="27" width="3" height="3" fill="#8C4A2F" />
              <rect x="17" y="38" width="6" height="8" fill="#8C4A2F" />
            </svg>
          </div>
          <div className="chip chip-chn" style={{ "--r": "5deg" } as React.CSSProperties}>
            <svg viewBox="0 0 44 40" width="40" height="35">
              <rect x="3" y="9" width="38" height="29" rx="2" fill="#fff" />
              <rect x="7" y="14" width="4" height="4" fill="#142238" /><rect x="14" y="14" width="4" height="4" fill="#142238" /><rect x="21" y="14" width="4" height="4" fill="#142238" /><rect x="28" y="14" width="4" height="4" fill="#142238" />
              <rect x="7" y="21" width="4" height="4" fill="#142238" /><rect x="14" y="21" width="4" height="4" fill="#142238" /><rect x="21" y="21" width="4" height="4" fill="#142238" /><rect x="28" y="21" width="4" height="4" fill="#142238" />
              <rect x="18" y="30" width="8" height="8" fill="#142238" />
            </svg>
          </div>
        </div>

        <div className="hero-inner">
          <div className="proof">
            <div className="avatars">
              <span style={{ background: "#C1622D" }}></span>
              <span style={{ background: "#1F3557" }}></span>
              <span style={{ background: "#2F6F63" }}></span>
            </div>
            Trusted by <b>85,000+</b> home seekers
          </div>

          <h1 className="headline font-playfair">
            Find a home<br />
            in{" "}
            <span className="highlight">
              <span
                className="cycle-word font-inter"
                style={{
                  opacity: fade ? 1 : 0,
                  transition: "opacity .22s ease",
                }}
              >
                {words[wordIndex]}
              </span>
            </span>
          </h1>

          <p className="subhead font-inter">
            Basera connects you directly with verified owners and RERA-approved
            listings — no brokerage, no fake photos, just homes you can actually move into.
          </p>

          <div className="store-badges">
            <button className="cta-pill hero-cta">Browse listings in your city</button>
          </div>

          <div className="stage">
            <div className="bubble font-ibm-plex-mono">
              <div className="verified-dot"></div>
              Verified listing
            </div>

            <svg className="mascot" viewBox="0 0 300 340" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="150" cy="322" rx="120" ry="15" fill="#1C2B2E" opacity="0.08" />

              {/* brick stack, ground left */}
              <g transform="translate(24 268)">
                <rect x="0" y="24" width="40" height="16" rx="2" fill="#C1622D" />
                <rect x="20" y="24" width="1.5" height="16" fill="#8C4A2F" opacity="0.5" />
                <rect x="4" y="8" width="40" height="16" rx="2" fill="#8C4A2F" />
                <rect x="24" y="8" width="1.5" height="16" fill="#5C2F19" opacity="0.5" />
                <rect x="0" y="-8" width="40" height="16" rx="2" fill="#C1622D" />
                <rect x="20" y="-8" width="1.5" height="16" fill="#8C4A2F" opacity="0.5" />
              </g>

              {/* small potted plant, ground right */}
              <g transform="translate(238 258)">
                <path d="M10 40l4-22h16l4 22z" fill="#8C4A2F" />
                <ellipse cx="18" cy="10" rx="16" ry="14" fill="#2F6F63" />
                <ellipse cx="9" cy="16" rx="9" ry="9" fill="#3F8974" />
                <ellipse cx="27" cy="16" rx="9" ry="9" fill="#3F8974" />
              </g>

              {/* torso / overalls */}
              <path d="M150 176c56 0 92 34 92 92 0 34-14 54-92 54s-92-20-92-54c0-58 36-92 92-92z" fill="#1F3557" />
              <path d="M150 176c56 0 92 34 92 92-18-14-52-22-92-22s-74 8-92 22c0-58 36-92 92-92z" fill="#142238" />

              {/* hi-vis vest */}
              <path d="M112 196l-14 108c14 8 30 12 52 12s38-4 52-12l-14-108c-12 20-64 20-76 0z" fill="#C1622D" />
              <path d="M120 210l10 96" stroke="#F4D9A6" strokeWidth="6" strokeLinecap="round" />
              <path d="M180 210l-10 96" stroke="#F4D9A6" strokeWidth="6" strokeLinecap="round" />

              {/* arms */}
              <path d="M96 210c-18 10-24 34-14 50 10-6 22-16 30-30z" fill="#1F3557" />
              <path d="M204 210c18 10 24 34 14 50-10-6-22-16-30-30z" fill="#1F3557" />

              {/* blueprint held at center */}
              <g transform="translate(150 258)">
                <rect x="-38" y="-16" width="76" height="40" rx="4" fill="#F7F1E4" stroke="#8C4A2F" strokeWidth="2.5" />
                <path d="M-28 -4h56M-28 4h40M-28 12h48" stroke="#1F3557" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M-38 -16c-6 4-6 32 0 40M38 -16c6 4 6 32 0 40" stroke="#8C4A2F" strokeWidth="2.5" fill="none" />
              </g>

              {/* neck */}
              <rect x="134" y="150" width="32" height="28" rx="10" fill="#E7B98D" />

              {/* head */}
              <circle cx="150" cy="122" r="46" fill="#E7B98D" />

              {/* ears */}
              <circle cx="104" cy="124" r="8" fill="#E7B98D" />
              <circle cx="196" cy="124" r="8" fill="#E7B98D" />

              {/* eyes */}
              <circle cx="133" cy="118" r="7.5" fill="#1C2B2E" />
              <circle cx="167" cy="118" r="7.5" fill="#1C2B2E" />
              <circle cx="130" cy="115" r="2.4" fill="#EAF1F3" />
              <circle cx="164" cy="115" r="2.4" fill="#EAF1F3" />

              {/* smile */}
              <path d="M136 138c6 8 22 8 28 0" stroke="#8C4A2F" strokeWidth="3.5" strokeLinecap="round" fill="none" />

              {/* cheeks */}
              <circle cx="118" cy="132" r="7" fill="#C1622D" opacity="0.25" />
              <circle cx="182" cy="132" r="7" fill="#C1622D" opacity="0.25" />

              {/* hard hat */}
              <path d="M150 62c32 0 58 22 60 50H90c2-28 28-50 60-50z" fill="#E8A33D" />
              <rect x="82" y="108" width="136" height="12" rx="6" fill="#C1622D" />
              <rect x="140" y="52" width="20" height="10" rx="3" fill="#8C4A2F" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
