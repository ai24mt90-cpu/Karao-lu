"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

interface Particle {
    x: number;
    y: number;
    size: number;
    opacity: number;
    speed: number;
    twinkleSpeed: number;
    twinklePhase: number;
    type: "star" | "sparkle" | "dust";
    color: string;
    vx: number;
    vy: number;
}

export default function RamadanBanner() {
    const { t } = useTranslation();
    const [visible, setVisible] = useState(false);
    const [closing, setClosing] = useState(false);
    const [textPhase, setTextPhase] = useState(0);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animFrameRef = useRef<number>(0);

    useEffect(() => {
        if (sessionStorage.getItem("ramadan_shown")) return;
        const timer = setTimeout(() => setVisible(true), 600);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!visible) return;
        const t1 = setTimeout(() => setTextPhase(1), 800);
        const t2 = setTimeout(() => setTextPhase(2), 1800);
        const t3 = setTimeout(() => setTextPhase(3), 2600);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, [visible]);

    useEffect(() => {
        if (!visible) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const particles: Particle[] = [];
        const colors = ["#FFD700", "#FFC200", "#FFE066", "#FFFACD", "#FFFDD0", "#FFDAB9"];

        for (let i = 0; i < 180; i++) {
            particles.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                size: Math.random() * 2.5 + 0.5,
                opacity: Math.random() * 0.8 + 0.2,
                speed: Math.random() * 0.3 + 0.05,
                twinkleSpeed: Math.random() * 0.03 + 0.01,
                twinklePhase: Math.random() * Math.PI * 2,
                type: "star",
                color: colors[Math.floor(Math.random() * colors.length)],
                vx: (Math.random() - 0.5) * 0.1,
                vy: -Math.random() * 0.1,
            });
        }

        for (let i = 0; i < 40; i++) {
            particles.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                size: Math.random() * 3 + 1,
                opacity: Math.random() * 0.6 + 0.1,
                speed: Math.random() * 0.5 + 0.1,
                twinkleSpeed: Math.random() * 0.05 + 0.02,
                twinklePhase: Math.random() * Math.PI * 2,
                type: "sparkle",
                color: "#FFD700",
                vx: (Math.random() - 0.5) * 0.3,
                vy: -Math.random() * 0.4 - 0.1,
            });
        }

        let frame = 0;
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            frame++;

            particles.forEach((p) => {
                p.twinklePhase += p.twinkleSpeed;
                const alpha = p.opacity * (0.5 + 0.5 * Math.sin(p.twinklePhase));

                if (p.type === "sparkle") {
                    const size = p.size * (0.8 + 0.4 * Math.sin(p.twinklePhase));
                    ctx.save();
                    ctx.translate(p.x, p.y);
                    ctx.rotate(frame * 0.02);
                    const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 2);
                    grad.addColorStop(0, `rgba(255, 215, 0, ${alpha})`);
                    grad.addColorStop(1, `rgba(255, 215, 0, 0)`);
                    ctx.fillStyle = grad;

                    // Draw 4-pointed star
                    ctx.beginPath();
                    for (let j = 0; j < 8; j++) {
                        const angle = (j * Math.PI) / 4;
                        const r = j % 2 === 0 ? size * 2 : size * 0.6;
                        if (j === 0) ctx.moveTo(Math.cos(angle) * r, Math.sin(angle) * r);
                        else ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
                    }
                    ctx.closePath();
                    ctx.fill();
                    ctx.restore();
                } else {
                    ctx.beginPath();
                    const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2);
                    grad.addColorStop(0, `rgba(255, 255, 220, ${alpha})`);
                    grad.addColorStop(1, `rgba(255, 215, 0, 0)`);
                    ctx.fillStyle = grad;
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fill();
                }

                p.x += p.vx;
                p.y += p.vy;
                if (p.y < -10) p.y = canvas.height + 10;
                if (p.x < -10) p.x = canvas.width + 10;
                if (p.x > canvas.width + 10) p.x = -10;
            });

            animFrameRef.current = requestAnimationFrame(draw);
        };

        draw();
        return () => {
            cancelAnimationFrame(animFrameRef.current);
            window.removeEventListener("resize", resize);
        };
    }, [visible]);

    const handleClose = () => {
        setClosing(true);
        setTimeout(() => {
            setVisible(false);
            sessionStorage.setItem("ramadan_shown", "1");
        }, 700);
    };

    if (!visible) return null;

    const swingStyle = (delay: number, amplitude: number = 6) => ({
        animation: `swing${amplitude} 3.5s ease-in-out infinite`,
        animationDelay: `${delay}s`,
    });

    return (
        <>
            <style>{`
        @keyframes swing6 {
          0%, 100% { transform: rotate(-6deg); }
          50% { transform: rotate(6deg); }
        }
        @keyframes swing4 {
          0%, 100% { transform: rotate(-4deg); }
          50% { transform: rotate(4deg); }
        }
        @keyframes swing8 {
          0%, 100% { transform: rotate(-8deg); }
          50% { transform: rotate(8deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes moonGlow {
          0%, 100% { filter: drop-shadow(0 0 18px #FFD700aa) drop-shadow(0 0 40px #FFA50055); }
          50% { filter: drop-shadow(0 0 28px #FFD700cc) drop-shadow(0 0 60px #FFA50077); }
        }
        @keyframes bannerIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes bannerOut {
          from { opacity: 1; transform: scale(1); }
          to { opacity: 0; transform: scale(0.96); }
        }
        .lantern-chain { transform-origin: top center; }
        .lantern-light {
          animation: shimmer 2s ease-in-out infinite;
        }
        .text-reveal {
          animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>

            <div
                style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: 9999,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    animation: closing ? "bannerOut 0.7s ease forwards" : "bannerIn 0.7s ease forwards",
                }}
            >
                {/* Deep night sky background */}
                <div style={{
                    position: "absolute", inset: 0,
                    background: "radial-gradient(ellipse at 50% 20%, #1a0a3a 0%, #0d0520 40%, #060212 100%)",
                }} />
                {/* Soft horizon glow */}
                <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, height: "35%",
                    background: "linear-gradient(to top, #2d1060aa, transparent)",
                    pointerEvents: "none",
                }} />

                {/* Canvas for stars */}
                <canvas
                    ref={canvasRef}
                    style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
                />

                {/* Crescent Moon */}
                <div style={{
                    position: "absolute", top: "6%", right: "12%",
                    animation: "moonGlow 4s ease-in-out infinite",
                }}>
                    <svg width="110" height="110" viewBox="0 0 110 110">
                        <defs>
                            <radialGradient id="moonGrad" cx="40%" cy="40%">
                                <stop offset="0%" stopColor="#FFFACD" />
                                <stop offset="60%" stopColor="#FFE066" />
                                <stop offset="100%" stopColor="#FFB300" />
                            </radialGradient>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="4" result="blur" />
                                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                            </filter>
                        </defs>
                        {/* Outer moon circle */}
                        <circle cx="55" cy="55" r="40" fill="url(#moonGrad)" filter="url(#glow)" />
                        {/* Cut-out for crescent */}
                        <circle cx="72" cy="45" r="33" fill="#1a0a3a" />
                        {/* Moon surface craters */}
                        <circle cx="38" cy="48" r="3" fill="#FFD700" opacity="0.3" />
                        <circle cx="44" cy="62" r="2" fill="#FFD700" opacity="0.2" />
                        <circle cx="30" cy="57" r="4" fill="#FFD700" opacity="0.15" />
                    </svg>
                </div>

                {/* Small decorative star near moon */}
                <div style={{ position: "absolute", top: "9%", right: "24%", opacity: 0.9 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9"
                            fill="#FFD700" opacity="0.9" />
                    </svg>
                </div>

                {/* Lanterns row */}
                <div style={{
                    position: "absolute", top: 0, left: 0, right: 0,
                    display: "flex", justifyContent: "space-around",
                    padding: "0 5%",
                }}>
                    {/* Lantern 1 */}
                    <div className="lantern-chain" style={swingStyle(0, 6)}>
                        <Lantern color="#C0392B" accentColor="#FF6B6B" ropeLengthPx={90} />
                    </div>
                    {/* Lantern 2 */}
                    <div className="lantern-chain" style={swingStyle(0.6, 4)}>
                        <Lantern color="#8E44AD" accentColor="#D98FE4" ropeLengthPx={120} />
                    </div>
                    {/* Lantern 3 - center, longer rope */}
                    <div className="lantern-chain" style={swingStyle(0.2, 8)}>
                        <Lantern color="#2471A3" accentColor="#5DADE2" ropeLengthPx={100} large />
                    </div>
                    {/* Lantern 4 */}
                    <div className="lantern-chain" style={swingStyle(0.9, 6)}>
                        <Lantern color="#1E8449" accentColor="#52BE80" ropeLengthPx={115} />
                    </div>
                    {/* Lantern 5 */}
                    <div className="lantern-chain" style={swingStyle(0.3, 4)}>
                        <Lantern color="#B7950B" accentColor="#F1C40F" ropeLengthPx={85} />
                    </div>
                </div>

                {/* Main content card */}
                <div style={{
                    position: "relative",
                    textAlign: "center",
                    padding: "2.5rem 3rem",
                    maxWidth: "520px",
                    width: "90vw",
                }}>
                    {/* Decorative Arabic-style ornament line */}
                    {textPhase >= 1 && (
                        <div className="text-reveal" style={{ opacity: 0, marginBottom: "1.2rem" }}>
                            <svg width="280" height="20" viewBox="0 0 280 20" style={{ margin: "0 auto", display: "block" }}>
                                <line x1="0" y1="10" x2="110" y2="10" stroke="#FFD700" strokeWidth="1" strokeOpacity="0.5" />
                                <polygon points="140,2 148,10 140,18 132,10" fill="#FFD700" opacity="0.8" />
                                <line x1="170" y1="10" x2="280" y2="10" stroke="#FFD700" strokeWidth="1" strokeOpacity="0.5" />
                                <circle cx="120" cy="10" r="3" fill="#FFD700" opacity="0.6" />
                                <circle cx="160" cy="10" r="3" fill="#FFD700" opacity="0.6" />
                            </svg>
                        </div>
                    )}

                    {/* Arabic greeting */}
                    {textPhase >= 1 && (
                        <div className="text-reveal" style={{
                            opacity: 0, animationDelay: "0.1s",
                            fontSize: "1.1rem", color: "#FFD700", letterSpacing: "0.15em",
                            marginBottom: "0.5rem", fontStyle: "italic",
                        }}>
                            {t("ramadan.greeting")}
                        </div>
                    )}

                    {/* Main Turkish heading */}
                    {textPhase >= 2 && (
                        <h1 className="text-reveal" style={{
                            opacity: 0,
                            fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
                            fontWeight: 900,
                            lineHeight: 1.15,
                            marginBottom: "0.8rem",
                            background: "linear-gradient(135deg, #FFD700 0%, #FFE866 40%, #FFA500 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            textShadow: "none",
                            letterSpacing: "-0.02em",
                        }}>
                            {t("ramadan.titleLine1")}<br />{t("ramadan.titleLine2")}
                        </h1>
                    )}

                    {/* Sub text */}
                    {textPhase >= 3 && (
                        <p className="text-reveal" style={{
                            opacity: 0,
                            fontSize: "0.95rem",
                            color: "rgba(255,220,100,0.75)",
                            letterSpacing: "0.08em",
                            marginBottom: "1.8rem",
                        }}>
                            {t("ramadan.subtextLine1")}<br />
                            {t("ramadan.subtextLine2")}
                        </p>
                    )}

                    {/* Close button */}
                    {textPhase >= 3 && (
                        <button
                            className="text-reveal"
                            onClick={handleClose}
                            style={{
                                opacity: 0,
                                animationDelay: "0.3s",
                                background: "linear-gradient(135deg, #FFD700, #FFA500)",
                                color: "#1a0a3a",
                                border: "none",
                                borderRadius: "50px",
                                padding: "0.65rem 2.2rem",
                                fontSize: "0.9rem",
                                fontWeight: 700,
                                cursor: "pointer",
                                letterSpacing: "0.05em",
                                boxShadow: "0 4px 20px rgba(255,165,0,0.4)",
                                transition: "transform 0.2s, box-shadow 0.2s",
                            }}
                            onMouseEnter={(e) => {
                                (e.target as HTMLButtonElement).style.transform = "scale(1.05)";
                                (e.target as HTMLButtonElement).style.boxShadow = "0 6px 28px rgba(255,165,0,0.6)";
                            }}
                            onMouseLeave={(e) => {
                                (e.target as HTMLButtonElement).style.transform = "scale(1)";
                                (e.target as HTMLButtonElement).style.boxShadow = "0 4px 20px rgba(255,165,0,0.4)";
                            }}
                        >
                            {t("ramadan.continueBtn")}
                        </button>
                    )}

                    {/* Bottom ornament */}
                    {textPhase >= 1 && (
                        <div className="text-reveal" style={{ opacity: 0, animationDelay: "0.5s", marginTop: "1.5rem" }}>
                            <svg width="280" height="20" viewBox="0 0 280 20" style={{ margin: "0 auto", display: "block" }}>
                                <line x1="0" y1="10" x2="110" y2="10" stroke="#FFD700" strokeWidth="1" strokeOpacity="0.5" />
                                <polygon points="140,2 148,10 140,18 132,10" fill="#FFD700" opacity="0.8" />
                                <line x1="170" y1="10" x2="280" y2="10" stroke="#FFD700" strokeWidth="1" strokeOpacity="0.5" />
                                <circle cx="120" cy="10" r="3" fill="#FFD700" opacity="0.6" />
                                <circle cx="160" cy="10" r="3" fill="#FFD700" opacity="0.6" />
                            </svg>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

// ── Lantern SVG component ──────────────────────────────────────────────────
function Lantern({
    color,
    accentColor,
    ropeLengthPx,
    large = false,
}: {
    color: string;
    accentColor: string;
    ropeLengthPx: number;
    large?: boolean;
}) {
    const w = large ? 52 : 40;
    const h = large ? 80 : 62;

    return (
        <svg
            width={w}
            height={ropeLengthPx + h}
            viewBox={`0 0 ${w} ${ropeLengthPx + h}`}
            style={{ display: "block" }}
        >
            <defs>
                <radialGradient id={`lg-${color}`} cx="50%" cy="40%">
                    <stop offset="0%" stopColor={accentColor} stopOpacity="0.9" />
                    <stop offset="100%" stopColor={color} stopOpacity="1" />
                </radialGradient>
                <filter id={`lf-${color}`}>
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
            </defs>

            {/* Rope */}
            <line x1={w / 2} y1="0" x2={w / 2} y2={ropeLengthPx} stroke="#8B7355" strokeWidth="1.5" opacity="0.8" />

            {/* Lantern body group positioned below rope */}
            <g transform={`translate(0, ${ropeLengthPx})`}>
                {/* Glow effect */}
                <ellipse cx={w / 2} cy={h * 0.55} rx={w * 0.55} ry={h * 0.45}
                    fill={accentColor} opacity="0.25" filter={`url(#lf-${color})`} />

                {/* Top cap */}
                <rect x={w * 0.3} y={2} width={w * 0.4} height={8} rx="2"
                    fill={color} stroke="#5D4037" strokeWidth="0.5" />
                {/* Top cap ring */}
                <ellipse cx={w / 2} cy={10} rx={w * 0.38} ry={5}
                    fill={color} stroke="#5D4037" strokeWidth="0.5" />

                {/* Main body */}
                <ellipse cx={w / 2} cy={h * 0.52} rx={w * 0.45} ry={h * 0.38}
                    fill={`url(#lg-${color})`} stroke="#5D4037" strokeWidth="0.8" />

                {/* Vertical ribs */}
                {[-1, 0, 1].map((i) => (
                    <ellipse key={i}
                        cx={w / 2 + i * (w * 0.15)}
                        cy={h * 0.52}
                        rx={w * 0.06}
                        ry={h * 0.38}
                        fill="none"
                        stroke="#5D4037"
                        strokeWidth="0.5"
                        opacity="0.5"
                    />
                ))}

                {/* Light glow from inside */}
                <ellipse cx={w / 2} cy={h * 0.52} rx={w * 0.28} ry={h * 0.25}
                    fill="#FFFDE7" opacity="0.4" className="lantern-light" />

                {/* Bottom cap */}
                <ellipse cx={w / 2} cy={h * 0.88} rx={w * 0.38} ry={5}
                    fill={color} stroke="#5D4037" strokeWidth="0.5" />
                <rect x={w * 0.3} y={h * 0.88 + 4} width={w * 0.4} height={7} rx="2"
                    fill={color} stroke="#5D4037" strokeWidth="0.5" />

                {/* Tassel */}
                <line x1={w / 2} y1={h * 0.88 + 10} x2={w / 2} y2={h * 0.88 + 18}
                    stroke={accentColor} strokeWidth="1.5" opacity="0.8" />
                <circle cx={w / 2} cy={h * 0.88 + 20} r="3"
                    fill={accentColor} opacity="0.8" />
            </g>
        </svg>
    );
}
