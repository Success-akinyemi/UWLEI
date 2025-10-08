import React from "react";

function Checked({ color = "#06b6d4", size = 120 }) {
  return (
    <div className="flex items-center justify-center">
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color }}
      >
        <circle
          cx="60"
          cy="60"
          r="50"
          stroke="currentColor"
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
          d="M40 62 L54 76 L80 46"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="50"
          strokeDashoffset="50"
          style={{
            animation: "drawCheck 0.45s forwards ease-in-out 0.5s",
          }}
        />
      </svg>

      <style>
        {`
          @keyframes drawCircle { to { stroke-dashoffset: 0; } }
          @keyframes drawCheck { to { stroke-dashoffset: 0; } }
        `}
      </style>
    </div>
  );
}

export default Checked;
