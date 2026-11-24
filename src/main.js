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
    <div class="min-h-screen bg-gray-100">
      <nav class="p-4 bg-white border-b flex gap-4">
        <a href="#/" class="text-blue-600 underline">Home</a>
        <a href="#/about" class="text-blue-600 underline">About</a>
        <a href="#/contact" class="text-blue-600 underline">Contact</a>
        <a href="#/admin" class="text-blue-600 underline">Admin</a>
      </nav>
      <div class="p-4">${Page()}</div>
    </div>
  `;
}

window.addEventListener('hashchange', render);
render();