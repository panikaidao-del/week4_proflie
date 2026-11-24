export function HomePage() {
  return `
    <div class="space-y-8">
      <!-- Hero Banner -->
      <section class="relative overflow-hidden bg-gradient-to-br from-pink-500 via-rose-400 to-pink-400 rounded-3xl p-8 md:p-12 text-white shadow-lg">
        <div class="relative z-10 max-w-xl space-y-4">
          <span class="inline-block bg-white/20 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full tracking-wide">
            ✨ PORTFOLIO & PROFILE
          </span>
          <h1 class="text-3xl md:text-5xl font-extrabold leading-tight">
            ยินดีต้อนรับสู่พื้นที่ของฉัน
          </h1>
          <p class="text-pink-50 text-sm md:text-base leading-relaxed">
            รวบรวมข้อมูลส่วนตัว ทักษะการพัฒนาเว็บไซต์ และระบบจัดการหลังบ้าน ตกแต่งด้วย Tailwind CSS อย่างลงตัว
          </p>
          <div class="pt-3 flex flex-wrap gap-3">
            <a
              href="#/admin"
              class="bg-white text-pink-600 hover:bg-pink-50 font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
            >
              ไปที่หน้า Admin →
            </a>
            <a
              href="#/about"
              class="bg-pink-600/40 hover:bg-pink-600/60 text-white border border-white/30 font-medium px-6 py-3 rounded-full transition"
            >
              เกี่ยวกับฉัน
            </a>
          </div>
        </div>
        <div class="hidden md:block absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
      </section>

      <!-- Feature Cards -->
      <section class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div class="bg-white p-6 rounded-2xl border border-pink-100 shadow-sm hover:shadow-md transition">
          <div class="w-11 h-11 rounded-xl bg-pink-100 text-pink-500 flex items-center justify-center text-xl mb-4">🎨</div>
          <h3 class="font-bold text-gray-800 mb-1">UI / UX Design</h3>
          <p class="text-sm text-gray-500">ออกแบบหน้าเว็บให้ใช้งานง่าย สบายตา และรองรับทุกขนาดหน้าจอ</p>
        </div>
        <div class="bg-white p-6 rounded-2xl border border-pink-100 shadow-sm hover:shadow-md transition">
          <div class="w-11 h-11 rounded-xl bg-rose-100 text-rose-500 flex items-center justify-center text-xl mb-4">💻</div>
          <h3 class="font-bold text-gray-800 mb-1">Web Development</h3>
          <p class="text-sm text-gray-500">พัฒนาเว็บแอปพลิเคชันด้วย JavaScript และ Tailwind CSS</p>
        </div>
        <div class="bg-white p-6 rounded-2xl border border-pink-100 shadow-sm hover:shadow-md transition">
          <div class="w-11 h-11 rounded-xl bg-fuchsia-100 text-fuchsia-500 flex items-center justify-center text-xl mb-4">🚀</div>
          <h3 class="font-bold text-gray-800 mb-1">Cloud Deploy</h3>
          <p class="text-sm text-gray-500">เชื่อมต่อ GitHub และอัปโหลดขึ้น Vercel พร้อมใช้งานออนไลน์</p>
        </div>
      </section>
    </div>
  `;
}