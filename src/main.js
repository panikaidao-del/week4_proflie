import './style.css';
import { HomePage } from './pages/home.js';
import { AboutPage } from './pages/about.js';
import { ContactPage } from './pages/contact.js';
import { AdminPage } from './pages/admin.js';

const routes = {
  '/': HomePage,
  '/about': AboutPage,
  '/contact': ContactPage,
  '/admin': AdminPage,
};

function render() {
  const path = location.hash.slice(1) || '/';
  const Page = routes[path] || HomePage;

  const navLink = (href, label) => {
    const active = path === href;
    return `<a href="#${href}" class="px-3.5 py-1.5 rounded-full text-sm font-medium transition ${
      active
        ? 'bg-pink-500 text-white shadow-sm'
        : 'text-gray-600 hover:text-pink-500 hover:bg-pink-50'
    }">${label}</a>`;
  };

  document.querySelector('#app').innerHTML = `
    <div class="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50/50 text-gray-800 flex flex-col">
      <nav class="bg-white/80 backdrop-blur-md border-b border-pink-100 sticky top-0 z-20">
        <div class="max-w-5xl mx-auto px-4 py-3.5 flex flex-wrap items-center justify-between gap-3">
          <a href="#/" class="text-lg font-extrabold bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
            🎀 Panita.Profile
          </a>
          <div class="flex items-center gap-1.5">
            ${navLink('/', 'Home')}
            ${navLink('/about', 'About')}
            ${navLink('/contact', 'Contact')}
            ${navLink('/admin', 'Admin')}
          </div>
        </div>
      </nav>

      <main class="max-w-5xl w-full mx-auto px-4 py-8 flex-1">
        ${Page()}
      </main>

      <footer class="text-center text-xs text-gray-400 py-6 border-t border-pink-100/60">
        © 2026 Week 4 Profile • Built with Tailwind CSS & Deployed on Vercel
      </footer>
    </div>
  `;
}

window.addEventListener('hashchange', render);
render();