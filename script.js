
/* =================================
   MY FOREVER PERSON
   Website JavaScript Foundation
================================= */

"use strict";

/* Website settings */

const WEBSITE_CONFIG = {
  title: "My Forever Person",
  visitor: "Pari",
  creator: "Her Forever Bandar 🐒",
  secretWord: "BANDARIYA",
  loadingDuration: 2500,
  musicStartsAutomatically: false
};

/* Helpful DOM functions */

const $ = (selector, parent = document) =>
  parent.querySelector(selector);

const $$ = (selector, parent = document) =>
  [...parent.querySelectorAll(selector)];

/* Accessibility settings */

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

/* Small delay helper */

const wait = (milliseconds) =>
  new Promise(resolve => setTimeout(resolve, milliseconds));

/* Safe text helper */

function setText(element, text) {
  if (element) {
    element.textContent = text;
  }
}

/* Animation helper */

function animateElement(element, animationName, duration = 700) {
  if (!element || prefersReducedMotion) return;

  element.style.animation = "none";

  requestAnimationFrame(() => {
    element.style.animation =
      `${animationName} ${duration}ms ease both`;
  });
}

/* Website foundation */

const PariUniverse = {
  config: WEBSITE_CONFIG,
  select: $,
  selectAll: $$,
  wait,
  setText,
  animateElement,
  prefersReducedMotion
};

/* Make foundation available to future sections */

window.PariUniverse = PariUniverse;

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("app-ready");
});
