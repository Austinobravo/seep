"use client"
import { useState, useEffect } from "react";

/**
 * Custom hook to check if a media query matches.
 * @param query - The media query string (e.g., "(min-width: 768px)").
 * @returns Whether the query matches (`true` or `false`).
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const updateMatch = () => setMatches(mediaQueryList.matches);

    // Listen for changes
    mediaQueryList.addEventListener("change", updateMatch);

    // Set the initial match
    updateMatch();

    return () => {
      mediaQueryList.removeEventListener("change", updateMatch);
    };
  }, [query]);

  return matches;
}
