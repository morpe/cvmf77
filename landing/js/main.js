/* ============================================================
   MORPE — cyberpunk landing | main.js
   ============================================================ */

// ---------- Easter egg (solo per te, sviluppatore) ----------
console.log(
  "%c🌆 Night City era casa. %c// per Judy, Panam, Jackie, Johnny… e la mia V. %c\n(il trauma più bello non sta in una landing page, ma la sua luce sì.)",
  "color:#f9ee0a;font-weight:bold;font-size:14px;background:#05070d;padding:10px 14px;border:1px solid #ff2bd3;border-radius:8px;font-family:monospace",
  "color:#00f0ff;background:#05070d;padding:10px 14px;border:1px solid #ff2bd3;border-radius:8px;font-family:monospace",
  "color:#9aa3c7;background:#05070d;padding:10px 14px;border:1px solid #ff2bd3;border-radius:8px;font-family:monospace"
);
console.log("%c> morpe.exe — caricato.", "color:#b6ff3c;font-family:monospace");

// ---------- Terminale: typing effect in hero ----------
(function () {
  const el = document.getElementById("typewriter");
  if (!el) return;
  const phrases = [
    "web developer",
    "graphic designer",
    "audio & video producer",
    "teacher & problem solver",
    "online dal 1996 (come Kernelpanic)",
  ];
  let pi = 0, ci = 0, deleting = false;
  function tick() {
    const cur = phrases[pi];
    el.textContent = cur.slice(0, ci);
    let delay = deleting ? 28 : 62;
    if (!deleting && ci === cur.length) { delay = 1600; deleting = true; }
    else if (deleting && ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; delay = 350; }
    ci += deleting ? -1 : 1;
    setTimeout(tick, delay);
  }
  tick();
})();

// ---------- Reveal on scroll ----------
(function () {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach((e) => e.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  els.forEach((e) => io.observe(e));
})();

// ---------- Navbar: sfondo alo scroll ----------
(function () {
  const nav = document.getElementById("navbar");
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle("nav-scrolled", window.scrollY > 40);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

// ---------- Menu mobile ----------
(function () {
  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("mobile-menu");
  if (!btn || !menu) return;
  btn.addEventListener("click", () => {
    const open = menu.classList.toggle("hidden");
    btn.setAttribute("aria-expanded", String(!open));
    btn.textContent = open ? "☰" : "✕";
  });
  menu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      menu.classList.add("hidden");
      btn.textContent = "☰";
    })
  );
})();

// ---------- Anno automatico ----------
(function () {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();

// ---------- Effetto parallax leggero sul hero ----------
(function () {
  const hero = document.getElementById("hero");
  if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let raf = null;
  window.addEventListener(
    "scroll",
    () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        hero.style.backgroundPositionY = `${Math.min(window.scrollY * 0.35, 260)}px`;
        raf = null;
      });
    },
    { passive: true }
  );
})();
