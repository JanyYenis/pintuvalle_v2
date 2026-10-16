/* ==========================================================================
   main.js — menú móvil + animaciones de entrada al hacer scroll
   ========================================================================== */
(() => {
  "use strict";

  /* ---------- Menú de navegación en móvil ---------- */
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");

  if (toggle && nav) {
    const label = toggle.querySelector(".sr-only");

    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
      if (label) label.textContent = open ? "Cerrar menú" : "Abrir menú";
    };

    toggle.addEventListener("click", () => {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });

    window.matchMedia("(min-width: 52.0625rem)").addEventListener("change", (e) => {
      if (e.matches) setOpen(false);
    });
  }

  /* ---------- Animaciones de entrada ----------
     · [data-reveal]          → el elemento aparece (fundido + ascenso) al entrar en pantalla.
                                Valores: "left", "right", "fade" (sin valor = hacia arriba).
     · [data-reveal-stagger]  → sus hijos aparecen en cascada, uno tras otro.            */
  const STEP_MS = 120;
  const MAX_DELAY_MS = 480;

  document.querySelectorAll("[data-reveal-stagger]").forEach((group) => {
    [...group.children].forEach((child, i) => {
      child.setAttribute("data-reveal", "");
      child.style.setProperty("--reveal-delay", `${Math.min(i * STEP_MS, MAX_DELAY_MS)}ms`);
    });
  });

  const targets = document.querySelectorAll("[data-reveal]");
  const showAll = () => targets.forEach((el) => el.classList.add("is-visible"));

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    showAll();
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  targets.forEach((el) => observer.observe(el));
})();
