const SITE = {
  name: "SparkNest",
  tagline: "Cleaning Services",
  phone: "+971 4 123 4567",
  phoneRaw: "+97141234567",
  whatsapp: "971501234567",
  email: "hello@sparknest.ae",
  address: "Office 1204, Bay Square, Business Bay, Dubai, UAE",
  hours: "Mon – Sun: 7:00 AM – 10:00 PM",
};

const NAV = [
  { href: "index.html", label: "Home" },
  { href: "about.html", label: "About" },
  { href: "services.html", label: "Services" },
  { href: "projects.html", label: "Projects" },
  { href: "process.html", label: "How It Works" },
  { href: "testimonials.html", label: "Reviews" },
  { href: "blog.html", label: "Blog" },
  { href: "contact.html", label: "Contact" },
];

const FALLBACK_IMG = "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=70";

function currentPage() {
  const file = location.pathname.split("/").pop();
  return file === "" ? "index.html" : file;
}

function renderHeader() {
  const page = currentPage();
  const links = NAV.map(
    (l) => `<a href="${l.href}" class="${l.href === page ? "active" : ""}">${l.label}</a>`
  ).join("");

  const header = `
  <div class="topbar">
    <div class="container">
      <div class="topbar-info">
        <a href="tel:${SITE.phoneRaw}"><i class="fa-solid fa-phone"></i>${SITE.phone}</a>
        <a href="mailto:${SITE.email}" class="hide-sm"><i class="fa-solid fa-envelope"></i>${SITE.email}</a>
        <span class="hide-sm"><i class="fa-solid fa-clock"></i>${SITE.hours}</span>
      </div>
      <div class="topbar-social">
        <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
        <a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
        <a href="#" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
      </div>
    </div>
  </div>
  <header class="header" id="header">
    <div class="container nav">
      <a href="index.html" class="logo">
        <span class="logo-icon"><i class="fa-solid fa-leaf"></i></span>
        <span>${SITE.name}<small>${SITE.tagline}</small></span>
      </a>
      <nav class="nav-links" id="navLinks">
        <button class="nav-close" id="navClose" aria-label="Close menu"><i class="fa-solid fa-xmark"></i></button>
        ${links}
        <a href="contact.html#booking" class="btn btn-primary mobile-cta">Book a Cleaning</a>
      </nav>
      <div class="nav-cta">
        <a href="tel:${SITE.phoneRaw}" class="btn btn-outline btn-sm"><i class="fa-solid fa-phone"></i> Call Us</a>
        <a href="contact.html#booking" class="btn btn-primary btn-sm">Book Now</a>
        <button class="menu-toggle" id="menuToggle" aria-label="Open menu"><i class="fa-solid fa-bars"></i></button>
      </div>
    </div>
  </header>
  <div class="nav-overlay" id="navOverlay"></div>`;

  document.getElementById("site-header").outerHTML = header;
}

function renderFooter() {
  const footer = `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <a href="index.html" class="logo">
            <span class="logo-icon"><i class="fa-solid fa-leaf"></i></span>
            <span>${SITE.name}<small>${SITE.tagline}</small></span>
          </a>
          <p>Professional, eco-friendly home and commercial cleaning across Dubai, Abu Dhabi, Sharjah and the Northern Emirates. Spotless spaces, happier places.</p>
          <div class="socials">
            <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="#" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>${NAV.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join("")}</ul>
        </div>
        <div>
          <h4>Our Services</h4>
          <ul>
            <li><a href="services.html">Home Cleaning</a></li>
            <li><a href="services.html">Deep Cleaning</a></li>
            <li><a href="services.html">Office Cleaning</a></li>
            <li><a href="services.html">Move In / Move Out</a></li>
            <li><a href="services.html">Sofa &amp; Carpet</a></li>
            <li><a href="services.html">Villa Cleaning</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact Us</h4>
          <ul class="footer-contact">
            <li><i class="fa-solid fa-location-dot"></i><span>${SITE.address}</span></li>
            <li><i class="fa-solid fa-phone"></i><a href="tel:${SITE.phoneRaw}">${SITE.phone}</a></li>
            <li><i class="fa-solid fa-envelope"></i><a href="mailto:${SITE.email}">${SITE.email}</a></li>
            <li><i class="fa-solid fa-clock"></i><span>${SITE.hours}</span></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; ${new Date().getFullYear()} ${SITE.name} Cleaning Services L.L.C. All rights reserved.</span>
        <span><a href="#">Privacy Policy</a> &nbsp;·&nbsp; <a href="#">Terms &amp; Conditions</a></span>
      </div>
    </div>
  </footer>
  <a class="whatsapp-float" href="https://wa.me/${SITE.whatsapp}?text=Hi%20SparkNest%2C%20I%27d%20like%20to%20book%20a%20cleaning" target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
  <button class="back-top" id="backTop" aria-label="Back to top"><i class="fa-solid fa-arrow-up"></i></button>`;

  document.getElementById("site-footer").outerHTML = footer;
}

function initNav() {
  const links = document.getElementById("navLinks");
  const overlay = document.getElementById("navOverlay");
  const open = () => { links.classList.add("open"); overlay.classList.add("show"); document.body.style.overflow = "hidden"; };
  const close = () => { links.classList.remove("open"); overlay.classList.remove("show"); document.body.style.overflow = ""; };
  document.getElementById("menuToggle").addEventListener("click", open);
  document.getElementById("navClose").addEventListener("click", close);
  overlay.addEventListener("click", close);
  window.addEventListener("resize", () => { if (window.innerWidth > 992) close(); });

  const header = document.getElementById("header");
  const backTop = document.getElementById("backTop");
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 10);
    backTop.classList.toggle("show", window.scrollY > 500);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { items.forEach((el) => el.classList.add("visible")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  items.forEach((el) => io.observe(el));
}

function initCounters() {
  const counters = document.querySelectorAll("[data-count]");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = +el.dataset.count;
      const suffix = el.dataset.suffix || "";
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / 1500, 1);
        el.textContent = Math.floor(target * p) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach((c) => io.observe(c));
}

function initFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".gallery-item");
  buttons.forEach((btn) =>
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.dataset.filter;
      items.forEach((it) => it.classList.toggle("hide", f !== "all" && it.dataset.cat !== f));
    })
  );

  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;
  const img = lightbox.querySelector("img");
  items.forEach((it) =>
    it.addEventListener("click", () => {
      img.src = it.querySelector("img").src.replace(/w=\d+/, "w=1600");
      lightbox.classList.add("open");
    })
  );
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.closest(".lightbox-close")) lightbox.classList.remove("open");
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") lightbox.classList.remove("open"); });
}

function initFaq() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    const q = item.querySelector(".faq-q");
    const a = item.querySelector(".faq-a");
    q.addEventListener("click", () => {
      const isOpen = item.classList.toggle("open");
      a.style.maxHeight = isOpen ? a.scrollHeight + "px" : null;
    });
  });
}

function initForms() {
  document.querySelectorAll("form[data-form]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const msg = form.querySelector(".form-msg");
      const type = form.dataset.form;
      if (msg) {
        msg.textContent = type === "subscribe"
          ? "Thank you for subscribing! Watch your inbox for exclusive offers."
          : "Thank you! Our team will contact you within 30 minutes to confirm your booking.";
        msg.classList.add("show");
      } else {
        alert("Thank you for subscribing!");
      }
      form.reset();
    });
  });
}

function initImageFallback() {
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", function handler() {
      img.removeEventListener("error", handler);
      img.src = FALLBACK_IMG;
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  initNav();
  initImageFallback();
  initReveal();
  initCounters();
  initFilters();
  initFaq();
  initForms();
});
