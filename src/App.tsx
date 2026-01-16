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
      <main className="relative z-10 h-screen flex items-center">
        <div className="login-container pl-3 ml-22">
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

        <div className="text-8xl font-bold p-5 absolute right-0 top-0 select-none opacity-20 pointer-events-none">
          <h1>Software</h1>
          <h2>Incubator</h2>
        </div>
      </main>

      {/* SPLINE */}
      <div className="absolute top-0 right-[-17vw] w-[90vw] z-10">
        <spline-viewer url="https://prod.spline.design/QvUMJYs0EqUYy6Xs/scene.splinecode" />
      </div>
    </div>
  );
}

export default App;
