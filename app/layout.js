import "./globals.scss";

export const metadata = {
  title: "Assignment 1",
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
        {children}
      </body>
    </html>
  );
}
