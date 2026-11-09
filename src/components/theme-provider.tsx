"use client";

import * as React from "react";
import type { UseThemeProps } from "next-themes";

type ThemeProviderProps = React.PropsWithChildren<{
  attribute?: "class";
  defaultTheme?: string;
  disableTransitionOnChange?: boolean;
  enableColorScheme?: boolean;
  enableSystem?: boolean;
  storageKey?: string;
  themes?: string[];
}>;

const DEFAULT_THEMES = ["light", "dark"];

const ThemeContext = React.createContext<UseThemeProps>({
  setTheme: () => {},
  themes: [],
});

function getSystemTheme(): "dark" | "light" {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  disableTransitionOnChange = false,
  enableColorScheme = true,
  enableSystem = true,
  storageKey = "theme",
  themes = DEFAULT_THEMES,
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState(() => {
    if (typeof window === "undefined") return defaultTheme;

    try {
      return window.localStorage.getItem(storageKey) || defaultTheme;
    } catch {
      return defaultTheme;
    }
  });
  const [systemTheme, setSystemTheme] = React.useState<"dark" | "light">(() =>
    typeof window === "undefined" ? "dark" : getSystemTheme()
  );

  const setTheme = React.useCallback<React.Dispatch<React.SetStateAction<string>>>(
    (nextTheme) => {
      const resolvedTheme =
        typeof nextTheme === "function" ? nextTheme(theme) : nextTheme;
      setThemeState(resolvedTheme);

      try {
        window.localStorage.setItem(storageKey, resolvedTheme);
      } catch {
        // Theme changes still apply when storage is unavailable.
      }
    },
    [storageKey, theme]
  );

  React.useEffect(() => {
    if (!enableSystem) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const updateSystemTheme = () =>
      setSystemTheme(mediaQuery.matches ? "dark" : "light");

    updateSystemTheme();
    mediaQuery.addEventListener("change", updateSystemTheme);
    return () => mediaQuery.removeEventListener("change", updateSystemTheme);
  }, [enableSystem]);

  const resolvedTheme =
    theme === "system" && enableSystem ? systemTheme : theme;

  React.useEffect(() => {
    const root = document.documentElement;
    const nextTheme = resolvedTheme;
    let restoreTransitions: (() => void) | undefined;

    if (disableTransitionOnChange) {
      const style = document.createElement("style");
      style.appendChild(
        document.createTextNode(
          "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
        )
      );
      document.head.appendChild(style);
      window.getComputedStyle(document.body);
      restoreTransitions = () => {
        window.setTimeout(() => style.remove(), 1);
      };
    }

    root.classList.remove(...themes);
    root.classList.add(nextTheme);

    if (enableColorScheme) {
      root.style.colorScheme =
        nextTheme === "light" || nextTheme === "dark" ? nextTheme : "";
    }

    restoreTransitions?.();
  }, [disableTransitionOnChange, enableColorScheme, resolvedTheme, themes]);

  React.useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key !== storageKey) return;
      setThemeState(event.newValue || defaultTheme);
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [defaultTheme, storageKey]);

  const contextValue = React.useMemo<UseThemeProps>(
    () => ({
      theme,
      setTheme,
      resolvedTheme,
      systemTheme: enableSystem ? systemTheme : undefined,
      themes: enableSystem ? [...themes, "system"] : themes,
    }),
    [enableSystem, resolvedTheme, setTheme, systemTheme, theme, themes]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return React.useContext(ThemeContext);
}
