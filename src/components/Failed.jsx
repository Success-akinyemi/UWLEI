import React from "react";

function Failed({ color = "#DC2626" }) {
  return (
    <div className="flex items-center justify-center">
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-red-600"
      >
        <circle
          cx="60"
          cy="60"
          r="50"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="314"
          strokeDashoffset="314"
          style={{
            animation: "drawCircle 0.6s forwards ease-in-out",
          }}
        />
        <path
          d="M45 45 L75 75"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="42"
          strokeDashoffset="42"
          style={{
            animation: "drawX 0.45s forwards ease-in-out 0.5s",
          }}
        />
        <path
          d="M75 45 L45 75"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="42"
          strokeDashoffset="42"
          style={{
            animation: "drawX 0.45s forwards ease-in-out 0.7s",
          }}
        />
      </svg>

      <style>
        {`
          @keyframes drawCircle { to { stroke-dashoffset: 0; } }
          @keyframes drawX { to { stroke-dashoffset: 0; } }
        `}
      </style>
    </div>
  );
}

export default Failed;
