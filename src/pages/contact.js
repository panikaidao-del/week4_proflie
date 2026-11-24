export function ContactPage() {
  return `
    <div class="bg-white p-6 rounded-lg border border-pink-200 space-y-3 max-w-md">
      <h1 class="text-xl font-bold text-pink-600">Contact</h1>
      <input type="text" placeholder="ชื่อ" class="w-full px-3 py-2 border border-pink-200 rounded text-sm" />
      <input type="text" placeholder="ข้อความ" class="w-full px-3 py-2 border border-pink-200 rounded text-sm" />
      <button onclick="alert('ส่งเรียบร้อย')" class="bg-pink-500 text-white text-sm px-4 py-2 rounded">
        ส่งข้อความ
      </button>
    </div>
  `;
}