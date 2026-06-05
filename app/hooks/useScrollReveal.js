"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Custom hook for scroll-triggered reveal animations using Intersection Observer.
 * @param {Object} options
 * @param {number} options.threshold - Visibility threshold (0-1). Default 0.15
 * @param {string} options.rootMargin - Root margin. Default "0px 0px -50px 0px"
 * @param {boolean} options.triggerOnce - Only trigger once. Default true
 * @returns {{ ref: React.RefObject, isVisible: boolean }}
 */
export function useScrollReveal({
  threshold = 0.15,
  rootMargin = "0px 0px -50px 0px",
  triggerOnce = true,
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

/**
 * Returns a staggered delay style for items in a list.
 * @param {number} index - Item index
 * @param {number} baseDelay - Base delay in ms. Default 100
 * @returns {{ transitionDelay: string }}
 */
export function getStaggerDelay(index, baseDelay = 100) {
  return { transitionDelay: `${index * baseDelay}ms` };
}
