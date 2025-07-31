'use client';
import { useEffect, useState } from "react";

export function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  function toggle() {
    setDark(d => {
      if (!d) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
      }
      return !d;
    });
  }

  return (
    <button
      className="rounded-full p-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 fixed top-3 right-3 shadow-lg z-50"
      onClick={toggle}
      aria-label="Changer le mode sombre/clair"
      title="Changer le mode sombre/clair"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}
