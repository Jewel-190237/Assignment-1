import React from "react";
import "../../styles/globals.css";
import Navbar from "../components/layout/navbar";

export const metadata = {
  title: "Assignment-1",
  description: "Assignment 1 Metro Solver Worldwide Recruitment Team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="antialiased"
        suppressHydrationWarning
        style={{ background: "rgba(255, 255, 255, 0.04)" }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
