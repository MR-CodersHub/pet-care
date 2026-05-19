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
            class="hidden sm:block bg-primary text-white px-6 py-2 rounded-xl"
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
  <footer class="bg-[#1a1a1a] dark:bg-card  pt-24 pb-12 mt-20 rounded-t-[4rem] relative overflow-hidden">
    <!-- Background Decorations -->
    <div class="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-accent-teal/10 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      
      <!-- Top Section: 4 Columns -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
        
        <!-- Column 1: Brand -->
        <div class="space-y-6">
          <a href="${ROOT}index.html" class="flex items-center gap-2">
            <div class="p-2 rounded-xl">
              <img src="${ROOT}assets/images/brand-logo.png" alt="Logo" class="h-8 w-8 object-contain">
            </div>
            <span class="font-heading text-2xl font-bold ">Paw<span class="text-primary">esome</span></span>
          </a>
          <p class="text-sm leading-relaxed max-w-xs">
            Premium pet care services delivering happiness, health, and wagging tails to your furry friends every single day.
          </p>
        </div>

        <!-- Column 2: Quick Links -->
        <div class="space-y-6">
          <h4 class="text-lg font-bold ">Explore</h4>
          <ul class="space-y-4 text-sm">
            <li><a href="${ROOT}index.html" class="hover:text-primary transition-colors flex items-center gap-2"><i data-lucide="chevron-right" class="w-3 h-3"></i> Home</a></li>
            <li><a href="${PAGES}home.html" class="hover:text-primary transition-colors flex items-center gap-2"><i data-lucide="chevron-right" class="w-3 h-3"></i> Home 2</a></li>
            <li><a href="${PAGES}about.html" class="hover:text-primary transition-colors flex items-center gap-2"><i data-lucide="chevron-right" class="w-3 h-3"></i> About Us</a></li>
            <li><a href="${PAGES}service.html" class="hover:text-primary transition-colors flex items-center gap-2"><i data-lucide="chevron-right" class="w-3 h-3"></i> Services</a></li>
            <li><a href="${PAGES}blog.html" class="hover:text-primary transition-colors flex items-center gap-2"><i data-lucide="chevron-right" class="w-3 h-3"></i> Pet Blog</a></li>
            <li><a href="${PAGES}contact.html" class="hover:text-primary transition-colors flex items-center gap-2"><i data-lucide="chevron-right" class="w-3 h-3"></i> Contact</a></li>
          </ul>
        </div>

        <!-- Column 3: Services -->
        <div class="space-y-6">
          <h4 class="text-lg font-bold ">Services</h4>
          <ul class="space-y-4 text-sm">
            <li><a href="${PAGES}grooming.html" class="hover:text-primary transition-colors flex items-center gap-2"><i data-lucide="chevron-right" class="w-3 h-3"></i> Pet Grooming</a></li>
            <li><a href="${PAGES}daycare.html" class="hover:text-primary transition-colors flex items-center gap-2"><i data-lucide="chevron-right" class="w-3 h-3"></i> Pet Daycare</a></li>
            <li><a href="${PAGES}veterinary.html" class="hover:text-primary transition-colors flex items-center gap-2"><i data-lucide="chevron-right" class="w-3 h-3"></i> Vet Consultations</a></li>
            <li><a href="${PAGES}dental.html" class="hover:text-primary transition-colors flex items-center gap-2"><i data-lucide="chevron-right" class="w-3 h-3"></i> Dental Care</a></li>
          </ul>
        </div>

        <!-- Column 4: Contact & Newsletter -->
        <div class="space-y-6">
          <h4 class="text-lg font-bold ">Stay Updated</h4>
          <p class="text-sm">Subscribe for pet care tips and special offers.</p>
          <div class="flex items-center bg-white/5 rounded-2xl p-1 border border-white/10 focus-within:border-primary transition-colors">
            <input type="email" placeholder="Email address" class="bg-transparent text-sm w-full px-4 outline-none text-white placeholder:text-white/30">
            <button class="bg-primary hover:bg-primary-dark text-white p-3 rounded-xl transition-colors">
              <i data-lucide="send" class="w-4 h-4"></i>
            </button>
          </div>
          <div class="space-y-2 mt-4 text-sm">
            <p class="flex items-center gap-3"><i data-lucide="phone" class="w-4 h-4 text-primary"></i> +1 (555) 123-4567</p>
            <p class="flex items-center gap-3"><i data-lucide="map-pin" class="w-4 h-4 text-primary"></i> 123 Paws Avenue, NY</p>
          </div>
        </div>

      </div>

      <!-- Bottom Section -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
        <p>© 2024 Pawesome Pet Care. All rights reserved.</p>
        <div class="flex gap-6">
          <a href="${PAGES}faq.html" class="hover:text-white transition-colors">FAQ</a>
          <a href="${PAGES}policy.html" class="hover:text-white transition-colors">Privacy Policy</a>
          <a href="${PAGES}terms.html" class="hover:text-white transition-colors">Terms of Service</a>
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