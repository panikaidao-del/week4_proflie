export function AdminPage() {
  return `
    <div class="bg-white p-6 rounded-2xl border border-pink-200 shadow-sm space-y-4">
      <h1 class="text-2xl font-bold text-pink-600">Admin Page</h1>
      <p class="text-gray-600 text-sm">หน้าสำหรับผู้ดูแลระบบ</p>
      <div class="grid grid-cols-2 gap-3 text-center">
        <div class="bg-pink-50 p-3 rounded-xl">
          <p class="text-xs text-gray-500">จำนวนหน้า</p>
          <p class="text-lg font-bold text-pink-600">4</p>
        </div>
        <div class="bg-pink-50 p-3 rounded-xl">
          <p class="text-xs text-gray-500">สถานะ</p>
          <p class="text-lg font-bold text-pink-600">พร้อมส่ง</p>
        </div>
      </div>
    </div>
  `;
}