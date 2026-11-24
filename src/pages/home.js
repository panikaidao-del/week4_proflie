export function HomePage() {
  return `
    <div class="bg-white p-6 rounded-2xl border border-pink-200 shadow-sm text-center space-y-4">
      <div class="text-4xl">🎀</div>
      <h1 class="text-2xl font-bold text-pink-600">Home Page</h1>
      <p class="text-gray-600 text-sm">ยินดีต้อนรับเข้าสู่หน้าแรกของเว็บ</p>
      <a href="#/admin" class="inline-block bg-pink-500 hover:bg-pink-600 text-white text-sm px-5 py-2.5 rounded-xl">
        ไปหน้า Admin
      </a>
    </div>
  `;
}