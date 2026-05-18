// =========================
// Pawesome Components System
// =========================

// Detect if current page is inside /pages folder
const isPagesFolder = window.location.pathname.includes("/pages/");

// Dynamic Paths
const ROOT = isPagesFolder ? "../" : "./";
const PAGES = isPagesFolder ? "./" : "./pages/";

// =========================
// COMPONENTS
// =========================

const components = {

  // ================= NAVBAR =================

  navbar: `
  <nav class="fixed top-0 left-0 w-full z-50" id="main-nav">

    <div class="container mx-auto px-6 py-4">

      <div class="flex items-center justify-between bg-card/70 backdrop-blur-md px-6 py-3 rounded-2xl shadow-sm border border-white/20">

        <!-- Logo -->
        <a href="${ROOT}index.html" class="flex items-center gap-2">

          <img
            src="${ROOT}assets/images/brand-logo.png"
            alt="Logo"
            class="h-10 w-10 object-contain"
          >

          <span class="font-heading text-xl font-bold">
            Paw<span class="text-primary">esome</span>
          </span>

        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8 font-medium">

          <a href="${ROOT}index.html" class="nav-link">
            Home
          </a>

          <a href="${PAGES}home.html" class="nav-link">
            Home 2
          </a>

          <a href="${PAGES}about.html" class="nav-link">
            About
          </a>

          <a href="${PAGES}service.html" class="nav-link">
            Services
          </a>

          <a href="${PAGES}blog.html" class="nav-link">
            Blog
          </a>

          <a href="${PAGES}contact.html" class="nav-link">
            Contact
          </a>

        </div>

        <!-- Right Side -->
        <div class="flex items-center gap-2">

          <!-- Theme -->
          <button
            id="theme-toggle"
            class="p-2 hover:bg-primary/10 rounded-xl"
          >
            <i data-lucide="moon"></i>
          </button>

          <!-- Book -->
          <a
            href="${PAGES}booking.html"
            class="hidden sm:block bg-primary text-white px-5 py-2 rounded-xl"
          >
            Book Now
          </a>

          <!-- Mobile Toggle -->
          <button
            id="mobile-menu-btn"
            class="md:hidden p-2 hover:bg-primary/10 rounded-xl"
          >
            <i data-lucide="menu"></i>
          </button>

        </div>

      </div>

      <!-- Mobile Menu -->
      <div
        id="mobile-menu"
        class="hidden md:hidden mt-3 bg-card border border-dark/10 rounded-2xl p-6 shadow-xl flex flex-col gap-4"
      >

        <a href="${ROOT}index.html">Home</a>

        <a href="${PAGES}home.html">Home 2</a>

        <a href="${PAGES}about.html">About</a>

        <a href="${PAGES}service.html">Services</a>

        <a href="${PAGES}blog.html">Blog</a>

        <a href="${PAGES}contact.html">Contact</a>

        <a
          href="${PAGES}booking.html"
          class="bg-primary text-white text-center py-3 rounded-xl"
        >
          Book Now
        </a>

      </div>

    </div>

  </nav>
  `,

  // ================= FOOTER =================

  footer: `
  <footer class="bg-card pt-20 pb-10 border-t border-dark/5">

    <div class="container mx-auto px-6">

      <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-dark/50">

        <p>
          © 2024 Pawesome Pet Care
        </p>

        <div class="flex gap-6">

          <a href="${PAGES}faq.html">
            FAQ
          </a>

          <a href="${PAGES}policy.html">
            Privacy
          </a>

          <a href="${PAGES}terms.html">
            Terms
          </a>

        </div>

      </div>

    </div>

  </footer>
  `
};

// =========================
// INIT APP
// =========================

function initApp() {

  // Inject Navbar/Footer

  const navbarPlaceholder =
    document.getElementById("navbar-placeholder");

  const footerPlaceholder =
    document.getElementById("footer-placeholder");

  if (navbarPlaceholder) {
    navbarPlaceholder.innerHTML = components.navbar;
  }

  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = components.footer;
  }

  // =========================
  // ACTIVE NAV LINK
  // =========================

  const currentPage =
    window.location.pathname.split("/").pop();

  document.querySelectorAll(".nav-link").forEach(link => {

    const href =
      link.getAttribute("href");

    if (href.includes(currentPage)) {

      link.classList.add(
        "text-primary",
        "font-bold"
      );
    }
  });

  // =========================
  // MOBILE MENU
  // =========================

  const mobileBtn =
    document.getElementById("mobile-menu-btn");

  const mobileMenu =
    document.getElementById("mobile-menu");

  if (mobileBtn && mobileMenu) {

    mobileBtn.addEventListener("click", () => {

      mobileMenu.classList.toggle("hidden");

      const icon =
        mobileBtn.querySelector("i");

      if (
        mobileMenu.classList.contains("hidden")
      ) {

        icon.setAttribute(
          "data-lucide",
          "menu"
        );

      } else {

        icon.setAttribute(
          "data-lucide",
          "x"
        );
      }

      lucide.createIcons();
    });
  }

  // =========================
  // THEME TOGGLE
  // =========================

  const themeToggle =
    document.getElementById("theme-toggle");

  if (themeToggle) {

    // Load Theme

    if (
      localStorage.getItem("theme") === "dark"
    ) {

      document.documentElement
        .classList
        .add("dark");
    }

    themeToggle.addEventListener("click", () => {

      document.documentElement
        .classList
        .toggle("dark");

      const isDark =
        document.documentElement
          .classList
          .contains("dark");

      localStorage.setItem(
        "theme",
        isDark ? "dark" : "light"
      );
    });
  }

  // =========================
  // LUCIDE ICONS
  // =========================

  if (window.lucide) {
    lucide.createIcons();
  }
}

// =========================
// START
// =========================

document.addEventListener(
  "DOMContentLoaded",
  initApp
);