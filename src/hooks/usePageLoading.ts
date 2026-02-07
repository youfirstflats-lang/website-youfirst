import { useState, useEffect } from "react";

export function usePageLoading(delay: number = 600) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isLoading;
}

export function useImageLoading(src: string) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
    
    // If image is already cached
    if (img.complete) {
      setIsLoaded(true);
    }
  }, [src]);

  return isLoaded;
}
