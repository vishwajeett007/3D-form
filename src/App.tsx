import { useRef } from "react";
import "./App.css";

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    containerRef.current.style.setProperty("--x", `${x}px`);
    containerRef.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative bg-black text-gray-100 h-screen overflow-hidden"
    >
      {/* GRID BACKGROUND */}
      <div className="grid-hover fixed inset-0 z-0" />

      {/* CONTENT */}
      <main className="relative z-10 min-h-screen flex items-center justify-center lg:justify-start px-4 lg:px-16">
        <div className="login-container pl-3 ml-22 mt-10">
          <div className="login-card">
            <h2>Welcome Back</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <label>Email Address</label>
                <input type="email" placeholder="name@company.com" required />
              </div>
              <div className="input-group">
                <label>Password</label>
                <input type="password" placeholder="••••••••" required />
              </div>
              <button type="submit" className="login-button">
                Sign In
              </button>
            </form>
          </div>
        </div>

        <div className=" text-[clamp(2.5rem,6vw,6rem)] font-bold p-5 absolute top-1 left-3 opacity-20 pointer-events-none select-none">
          <h1>Frontend Developer</h1>
          </div>
      </main>

      {/* SPLINE */}
      <div className="hidden sm:block lg:block absolute lg:top-0 lg:right-[-17vw] lg:w-[90vw] z-10 h-full pointer-events-none">
        <spline-viewer url="https://prod.spline.design/QvUMJYs0EqUYy6Xs/scene.splinecode" />
      </div>

    </div>
  );
}

export default App;
