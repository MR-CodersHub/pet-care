// Pawesome Component System
const components = {
    navbar: `
    <nav class="fixed top-0 left-0 w-full z-50 transition-all duration-300" id="main-nav">
        <div class="container mx-auto px-6 py-4">
            <div class="flex items-center justify-between bg-card/70 backdrop-blur-md px-6 py-3 rounded-2xl shadow-sm border border-white/20">
                <!-- Logo -->
                <a href="index.html" class="flex items-center gap-2">
                    <div class="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
                        <i data-lucide="paw-print"></i>
                    </div>
                    <span class="font-heading text-xl font-bold tracking-tight">Paw<span class="text-primary">esome</span></span>
                </a>

                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center gap-8 font-medium">
                    <a href="index.html" class="hover:text-primary transition-colors">Home</a>
                    <a href="pages/home.html" class="hover:text-primary transition-colors">Home 2</a>
                    <a href="pages/about.html" class="hover:text-primary transition-colors">About</a>
                    <a href="pages/service.html" class="hover:text-primary transition-colors">Services</a>
                    <a href="pages/blog.html" class="hover:text-primary transition-colors">Blog</a>
                    <a href="pages/contact.html" class="hover:text-primary transition-colors">Contact</a>
                </div>

                <!-- Tools & CTA -->
                <div class="flex items-center gap-3">
                    <!-- Theme Toggle -->
                    <button id="theme-toggle" class="p-2.5 hover:bg-primary/10 rounded-xl transition-colors text-dark/70" title="Toggle Theme">
                        <i data-lucide="sun" class="hidden dark:block"></i>
                        <i data-lucide="moon" class="block dark:hidden"></i>
                    </button>
                    <!-- RTL Toggle -->
                    <button id="rtl-toggle" class="p-2.5 hover:bg-primary/10 rounded-xl transition-colors text-dark/70 font-bold text-xs" title="Toggle RTL">
                        LTR
                    </button>

                    <!-- Profile Dropdown -->
                    <div class="relative" id="profile-dropdown-container">
                        <button id="profile-btn" class="p-2.5 hover:bg-primary/10 rounded-xl transition-colors text-dark/70" title="Account">
                            <i data-lucide="user"></i>
                        </button>
                        <!-- Dropdown Menu -->
                        <div id="profile-menu" class="absolute right-0 mt-3 w-56 bg-card border border-dark/5 rounded-2xl shadow-2xl py-2 hidden animate-in fade-in zoom-in duration-200">
                            <a href="pages/login.html" class="flex items-center gap-3 px-4 py-3 hover:bg-primary/5 hover:text-primary transition-all font-medium">
                                <i data-lucide="log-in" class="w-4 h-4"></i> Login / Signup
                            </a>
                        </div>
                    </div>
                    
                    <a href="pages/booking.html" class="hidden sm:block bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5">
                        Book Now
                    </a>
                    <!-- Mobile Menu Toggle -->
                    <button class="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors">
                        <i data-lucide="menu"></i>
                    </button>
                </div>
            </div>
        </div>
    </nav>
    `,
    footer: `
    <footer class="bg-card pt-20 pb-10 border-t border-dark/5">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <div class="space-y-6">
                    <a href="index.html" class="flex items-center gap-2">
                        <div class="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
                            <i data-lucide="paw-print"></i>
                        </div>
                        <span class="font-heading text-xl font-bold tracking-tight">Paw<span class="text-primary">esome</span></span>
                    </a>
                    <p class="text-dark/60 dark:text-white/60 leading-relaxed">
                        Providing world-class pet care services since 2010. Your pet's happiness is our top priority.
                    </p>
                    <div class="flex gap-4">
                        <a href="#" class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.173.055 1.957.245 2.646.516.716.279 1.25.652 1.79 1.192.54.54.913 1.074 1.192 1.79.27.689.46 1.473.516 2.646.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.055 1.173-.245 1.957-.516 2.646-.279.716-.652 1.25-1.192 1.79-.54.54-1.074.913-1.79 1.192-.689.27-1.473.46-2.646.516-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.173-.055-1.957-.245-2.646-.516-.716-.279-1.25-.652-1.79-1.192-.54-.54-.913-1.074-1.192-1.79-.27-.689-.46-1.473-.516-2.646-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.055-1.173.245-1.957.516-2.646.279-.716.652-1.25 1.192-1.79.54-.54 1.074-.913 1.79-1.192.689-.27 1.473-.46 2.646-.516 1.266-.058 1.646-.07 4.85-.07zm0 2.163c-3.132 0-3.513.013-4.755.068-1.147.053-1.771.246-2.186.406-.55.213-.941.468-1.353.88-.412.412-.667.803-.88 1.353-.16.415-.353 1.039-.406 2.186-.055 1.242-.068 1.623-.068 4.755s.013 3.513.068 4.755c.053 1.147.246 1.771.406 2.186.213.55.468.941.88 1.353.412.412.803.667 1.353.88.415.16 1.039.353 2.186.406 1.242.055 1.623.068 4.755.068s3.513-.013 4.755-.068c1.147-.053 1.771-.246 2.186-.406.55-.213.941-.468 1.353-.88.412-.412.667-.803.88-1.353.16-.415.353-1.039.406-2.186.055-1.242.068-1.623.068-4.755s-.013-3.513-.068-4.755c-.053-1.147-.246-1.771-.406-2.186-.213-.55-.468-.941-.88-1.353-.412-.412-.803-.667-1.353-.88-.415-.16-1.039-.353-2.186-.406-.242-.055-1.623-.068-4.755-.068zm0 3.75a7.587 7.587 0 1 0 0 15.174 7.587 7.587 0 0 0 0-15.174zm0 2.163a5.424 5.424 0 1 1 0 10.848 5.424 5.424 0 0 1 0-10.848zm6.26-6.26a1.767 1.767 0 1 1 0 3.534 1.767 1.767 0 0 1 0-3.534z"/></svg>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.791-4.667 4.53-4.667 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        </a>
                    </div>
                </div>
                
                <div>
                    <h4 class="font-heading font-bold text-lg mb-6 dark:text-white">Quick Links</h4>
                    <ul class="space-y-4 text-dark/60 dark:text-white/40">
                        <li><a href="index.html" class="hover:text-primary transition-colors">Home</a></li>
                        <li><a href="pages/home2.html" class="hover:text-primary transition-colors">Home 2</a></li>
                        <li><a href="pages/about.html" class="hover:text-primary transition-colors">About Us</a></li>
                        <li><a href="pages/service.html" class="hover:text-primary transition-colors">Our Services</a></li>
                        <li><a href="pages/blog.html" class="hover:text-primary transition-colors">Latest News</a></li>
                        <li><a href="pages/contact.html" class="hover:text-primary transition-colors">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-heading font-bold text-lg mb-6 dark:text-white">Services</h4>
                    <ul class="space-y-4 text-dark/60 dark:text-white/40">
                        <li><a href="pages/grooming.html" class="hover:text-primary transition-colors">Pet Grooming</a></li>
                        <li><a href="pages/training.html" class="hover:text-primary transition-colors">Dog Training</a></li>
                        <li><a href="pages/veterinary.html" class="hover:text-primary transition-colors">Veterinary Care</a></li>
                        <li><a href="pages/daycare.html" class="hover:text-primary transition-colors">Pet Daycare</a></li>
                        <li><a href="pages/dental.html" class="hover:text-primary transition-colors">Dental Hygiene</a></li>
                        <li><a href="pages/emergency.html" class="hover:text-primary transition-colors">24/7 Emergency</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-heading font-bold text-lg mb-6 dark:text-white">Newsletter</h4>
                    <p class="text-dark/60 dark:text-white/40 mb-6 text-sm">Subscribe to get the latest updates and offers.</p>
                    <div class="relative">
                        <input type="email" placeholder="Email Address" class="w-full bg-accent-cream dark:bg-white/5 border border-dark/10 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors dark:text-white">
                        <button class="absolute right-2 top-2 bg-primary text-white p-2 rounded-lg hover:bg-primary-dark transition-colors">
                            <i data-lucide="send" class="w-4 h-4"></i>
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="pt-8 border-t border-dark/5 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-dark/40 dark:text-white/40">
                <p>© 2024 Pawesome Pet Care. All rights reserved.</p>
                <div class="flex gap-6">
                    <a href="pages/faq.html" class="hover:text-primary">FAQ</a>
                    <a href="pages/policy.html" class="hover:text-primary">Privacy Policy</a>
                    <a href="pages/terms.html" class="hover:text-primary">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
    `
};

function initApp() {
    // Inject Components
    const navPlaceholder = document.getElementById('navbar-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (navPlaceholder) navPlaceholder.innerHTML = components.navbar;
    if (footerPlaceholder) footerPlaceholder.innerHTML = components.footer;

    // Normalize component links when inside the pages folder
    const currentPath = window.location.pathname;
    const isPagesPage = currentPath.split('/').includes('pages');
    if (isPagesPage) {
        const allLinks = document.querySelectorAll('#main-nav a, footer a');
        allLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:')) return;
            if (href === 'index.html') {
                link.setAttribute('href', '../index.html');
            } else if (href.startsWith('pages/')) {
                link.setAttribute('href', href.replace(/^pages\//, ''));
            }
        });
    }

    // Active State Logic
    const navLinks = document.querySelectorAll('#main-nav a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;

        // Check if the link href matches the current path
        const isExactMatch = currentPath.endsWith(href) || (currentPath.endsWith('/') && href.endsWith('index.html'));
        const isBlogDetail = currentPath.includes('/blogs/') && href.includes('blog.html');
        const isHomeMatch = (currentPath.endsWith('/') || currentPath.endsWith('index.html')) && (href === 'index.html' || href === '/');

        if (isExactMatch || isBlogDetail || isHomeMatch) {
            link.classList.add('text-primary', 'font-bold');
        }
    });

    // Initialize Icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            const isDark = document.documentElement.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            lucide.createIcons();
        });
    }

    // RTL Toggle Logic
    const rtlToggle = document.getElementById('rtl-toggle');
    if (rtlToggle) {
        rtlToggle.addEventListener('click', () => {
            const isRTL = document.documentElement.dir === 'rtl';
            document.documentElement.dir = isRTL ? 'ltr' : 'rtl';
            rtlToggle.innerText = isRTL ? 'LTR' : 'RTL';
            localStorage.setItem('dir', document.documentElement.dir);
        });
    }

    // Apply saved preferences
    if (localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    }
    if (localStorage.getItem('dir')) {
        document.documentElement.dir = localStorage.getItem('dir');
        if (rtlToggle) rtlToggle.innerText = document.documentElement.dir.toUpperCase();
    }

    // Profile Dropdown Logic
    const profileBtn = document.getElementById('profile-btn');
    const profileMenu = document.getElementById('profile-menu');

    if (profileBtn && profileMenu) {
        profileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            profileMenu.classList.toggle('hidden');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!profileMenu.contains(e.target) && !profileBtn.contains(e.target)) {
                profileMenu.classList.add('hidden');
            }
        });
    }

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('main-nav');
        if (nav) {
            if (window.scrollY > 50) {
                nav.classList.add('py-2');
                nav.querySelector('.container').classList.remove('px-6');
                nav.querySelector('.container').classList.add('px-0', 'md:px-10');
            } else {
                nav.classList.remove('py-2');
                nav.querySelector('.container').classList.add('px-6');
                nav.querySelector('.container').classList.remove('px-0', 'md:px-10');
            }
        }
    });
}

// Run on load
document.addEventListener('DOMContentLoaded', initApp);
