export function ContactPage() {
  return `
    <div class="bg-white p-6 rounded-2xl border border-pink-200 shadow-sm space-y-4 max-w-md mx-auto">
      <h1 class="text-2xl font-bold text-pink-600">Contact Page</h1>
      <p class="text-gray-600 text-sm">ช่องทางติดต่อ</p>
      <form onsubmit="event.preventDefault(); alert('ส่งแล้วค่ะ');" class="space-y-3">
        <input type="text" placeholder="ชื่อ" class="w-full px-3 py-2 border border-pink-200 rounded-xl text-sm" />
        <input type="text" placeholder="ข้อความ" class="w-full px-3 py-2 border border-pink-200 rounded-xl text-sm" />
        <button type="submit" class="w-full bg-pink-500 hover:bg-pink-600 text-white text-sm py-2 rounded-xl">
          ส่งข้อความ
        </button>
      </form>
    </div>
  `;
}