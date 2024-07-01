import React from "react";
import "../css/Loading.css";

export default function LoadingScreen() {
  return (
    <main id="loading">
      <div>
        <svg id='loading-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150">
          <path
            fill="none"
            strokeLinecap="round"
            strokeDasharray="300 385"
            strokeDashoffset="0"
            d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
          >
            <animate
              attributeName="stroke-dashoffset"
              calcMode="spline"
              dur="2"
              values="685;-685"
              keySplines="0 0 1 1"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke"
              values="red;blue;red"
              dur="1"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-width"
              values="15;8;15"
              dur="1"
              repeatCount="indefinite"
            />
          </path>
        </svg>
        {/* <img src="" alt="" /> */}
        <div id='loading-text'>Loading...</div>
      </div>
    </main>
  );
}
