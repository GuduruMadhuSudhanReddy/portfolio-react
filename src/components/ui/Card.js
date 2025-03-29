import React from "react";

// Basic Card Component with RGBA Background
export function Card({ children, className = "" }) {
  return (
    <div
      className={`p-6 rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300 ${className}`}
      style={{ backgroundColor: "rgba(65, 80, 76, 1)", borderColor: "rgba(0, 0, 255, 0.5)" }} // Sky blue with opacity
    >
      {children}
    </div>
  );
}

// CardContent Component for better structure
export function CardContent({ children }) {
  return <div className="space-y-2">{children}</div>;
}
