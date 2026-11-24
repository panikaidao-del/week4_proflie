export function AdminPage() {
  return `
    <div class="space-y-6">
      <!-- Header -->
      <div class="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-pink-100 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          <p class="text-sm text-gray-500 mt-1">ระบบจัดการข้อมูลและตรวจสอบสถานะเว็บไซต์</p>
        </div>
        <span class="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 text-xs font-semibold px-4 py-2 rounded-full border border-emerald-200">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          System Online
        </span>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div class="bg-white p-6 rounded-2xl border border-pink-100 shadow-sm">
          <p class="text-sm text-gray-500">ผู้เข้าชมทั้งหมด</p>
          <p class="text-3xl font-extrabold text-pink-500 mt-2">1,284</p>
          <p class="text-xs text-emerald-500 mt-1">↑ +12% จากสัปดาห์ที่แล้ว</p>
        </div>
        <div class="bg-white p-6 rounded-2xl border border-pink-100 shadow-sm">
          <p class="text-sm text-gray-500">จำนวนหน้าเว็บไซต์</p>
          <p class="text-3xl font-extrabold text-rose-500 mt-2">4 หน้า</p>
          <p class="text-xs text-gray-400 mt-1">Home, About, Contact, Admin</p>
        </div>
        <div class="bg-white p-6 rounded-2xl border border-pink-100 shadow-sm">
          <p class="text-sm text-gray-500">สถานะ Deployment</p>
          <p class="text-3xl font-extrabold text-fuchsia-500 mt-2">Vercel</p>
          <p class="text-xs text-emerald-500 mt-1">● เชื่อมต่อ GitHub สำเร็จ</p>
        </div>
      </div>

      <!-- Table -->
      <div class="bg-white rounded-3xl p-6 shadow-sm border border-pink-100 overflow-x-auto">
        <h2 class="font-bold text-gray-800 mb-4">รายการหน้าเว็บในระบบ</h2>
        <table class="w-full text-left text-sm">
          <thead>
            <tr class="border-b border-pink-100 text-gray-500">
              <th class="pb-3 font-medium">ชื่อหน้า</th>
              <th class="pb-3 font-medium">ไฟล์</th>
              <th class="pb-3 font-medium">สถานะ</th>
              <th class="pb-3 font-medium text-right">ลิงก์</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-pink-50">
            <tr>
              <td class="py-3 font-medium text-gray-800">Home</td>
              <td class="py-3 text-gray-500">src/pages/home.js</td>
              <td class="py-3"><span class="bg-pink-100 text-pink-600 text-xs px-2.5 py-0.5 rounded-full">Active</span></td>
              <td class="py-3 text-right"><a href="#/" class="text-pink-500 hover:underline">เปิดหน้า</a></td>
            </tr>
            <tr>
              <td class="py-3 font-medium text-gray-800">About</td>
              <td class="py-3 text-gray-500">src/pages/about.js</td>
              <td class="py-3"><span class="bg-pink-100 text-pink-600 text-xs px-2.5 py-0.5 rounded-full">Active</span></td>
              <td class="py-3 text-right"><a href="#/about" class="text-pink-500 hover:underline">เปิดหน้า</a></td>
            </tr>
            <tr>
              <td class="py-3 font-medium text-gray-800">Contact</td>
              <td class="py-3 text-gray-500">src/pages/contact.js</td>
              <td class="py-3"><span class="bg-pink-100 text-pink-600 text-xs px-2.5 py-0.5 rounded-full">Active</span></td>
              <td class="py-3 text-right"><a href="#/contact" class="text-pink-500 hover:underline">เปิดหน้า</a></td>
            </tr>
            <tr>
              <td class="py-3 font-medium text-gray-800">Admin</td>
              <td class="py-3 text-gray-500">src/pages/admin.js</td>
              <td class="py-3"><span class="bg-pink-100 text-pink-600 text-xs px-2.5 py-0.5 rounded-full">Active</span></td>
              <td class="py-3 text-right"><a href="#/admin" class="text-pink-500 hover:underline">เปิดหน้า</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}