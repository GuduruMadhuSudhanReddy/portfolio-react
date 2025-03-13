import React from "react";

// Basic Card Component with Enhanced Styling
export function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}

// CardContent Component for better structure
export function CardContent({ children }) {
  return <div className="space-y-2">{children}</div>;
}
