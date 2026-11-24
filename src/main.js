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

  document.querySelector('#app').innerHTML = `
    <div class="min-h-screen bg-pink-50 text-gray-800">
      <nav class="bg-white border-b border-pink-200 px-6 py-3 flex gap-4 text-sm">
        <a href="#/" class="text-pink-600 font-medium">Home</a>
        <a href="#/about" class="text-pink-600 font-medium">About</a>
        <a href="#/contact" class="text-pink-600 font-medium">Contact</a>
        <a href="#/admin" class="text-pink-600 font-medium">Admin</a>
      </nav>
      <div class="max-w-2xl mx-auto p-6">
        ${Page()}
      </div>
    </div>
  `;
}

window.addEventListener('hashchange', render);
render();