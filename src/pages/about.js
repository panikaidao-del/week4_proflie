export function AboutPage() {
  return `
    <div class="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-pink-100 space-y-8">
      <div class="flex flex-col sm:flex-row items-center gap-6 border-b border-pink-50 pb-8">
        <div class="w-24 h-24 rounded-full bg-gradient-to-tr from-pink-400 to-rose-300 flex items-center justify-center text-4xl text-white shadow-md shrink-0">
          🎀
        </div>
        <div class="text-center sm:text-left space-y-2">
          <span class="text-xs font-semibold uppercase tracking-wider text-pink-500 bg-pink-50 px-3 py-1 rounded-full">
            About Me
          </span>
          <h1 class="text-2xl md:text-3xl font-bold text-gray-800">ปณิตา (Panita)</h1>
          <p class="text-gray-500 text-sm max-w-lg">
            นักศึกษาที่สนใจด้านการพัฒนาเว็บไซต์ การออกแบบส่วนติดต่อผู้ใช้ (UI/UX) และระบบสมองกลฝังตัว IoT
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="space-y-4">
          <h2 class="font-bold text-gray-800 text-lg">✨ ทักษะและความสนใจ</h2>
          <div class="space-y-3">
            <div>
              <div class="flex justify-between text-sm font-medium text-gray-600 mb-1">
                <span>HTML / Tailwind CSS</span><span>90%</span>
              </div>
              <div class="w-full bg-pink-100 h-2 rounded-full overflow-hidden">
                <div class="bg-pink-500 h-full w-[90%] rounded-full"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between text-sm font-medium text-gray-600 mb-1">
                <span>JavaScript & Web Routing</span><span>80%</span>
              </div>
              <div class="w-full bg-pink-100 h-2 rounded-full overflow-hidden">
                <div class="bg-rose-400 h-full w-[80%] rounded-full"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between text-sm font-medium text-gray-600 mb-1">
                <span>Arduino & IoT Systems</span><span>85%</span>
              </div>
              <div class="w-full bg-pink-100 h-2 rounded-full overflow-hidden">
                <div class="bg-fuchsia-400 h-full w-[85%] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-pink-50/60 rounded-2xl p-6 border border-pink-100 space-y-3">
          <h2 class="font-bold text-gray-800 text-lg">📌 รายละเอียดโปรเจกต์</h2>
          <ul class="text-sm text-gray-600 space-y-2.5">
            <li class="flex items-center gap-2">✅ แยกโครงสร้าง 4 หน้าในโฟลเดอร์ <code class="bg-white px-1.5 py-0.5 rounded text-pink-600">src/pages</code></li>
            <li class="flex items-center gap-2">✅ ระบบเปลี่ยนหน้าแบบ Single Page App</li>
            <li class="flex items-center gap-2">✅ ออกแบบและตกแต่งด้วย Tailwind CSS</li>
            <li class="flex items-center gap-2">✅ Deploy อัตโนมัติผ่าน GitHub & Vercel</li>
          </ul>
        </div>
      </div>
    </div>
  `;
}