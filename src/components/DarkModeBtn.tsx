"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

export default function DarkModeBtn() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
      {currentTheme === "dark" ? (
        <Icon
          icon="material-symbols:light-mode-outline"
          className="cursor-pointer h-6 w-6"
          onClick={() => setTheme("light")}
        />
      ) : (
        <Icon
          icon="material-symbols:dark-mode-outline"
          className="cursor-pointer h-6 w-6"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
}
