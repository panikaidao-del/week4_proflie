export function HomePage() {
  return `
    <div class="bg-white p-6 rounded-lg border border-pink-200 space-y-3">
      <h1 class="text-xl font-bold text-pink-600">Home</h1>
      <p class="text-gray-600 text-sm">ยินดีต้อนรับเข้าสู่เว็บไซต์</p>
      <a href="#/admin" class="inline-block bg-pink-500 text-white text-sm px-4 py-2 rounded">
        ไปหน้า Admin
      </a>
    </div>
  `;
}