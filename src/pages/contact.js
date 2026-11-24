export function ContactPage() {
  return `
    <div class="bg-white rounded-3xl shadow-sm border border-pink-100 overflow-hidden grid grid-cols-1 md:grid-cols-5">
      <!-- Left Info -->
      <div class="md:col-span-2 bg-gradient-to-b from-pink-500 to-rose-400 p-8 text-white flex flex-col justify-between space-y-6">
        <div class="space-y-3">
          <h1 class="text-2xl font-bold">ติดต่อฉัน</h1>
          <p class="text-pink-100 text-sm leading-relaxed">
            หากมีคำถามหรือต้องการพูดคุยเกี่ยวกับโปรเจกต์ สามารถส่งข้อความผ่านแบบฟอร์มนี้ได้เลยค่ะ
          </p>
        </div>
        <div class="space-y-3 text-sm text-pink-50">
          <p>📍 มหาสารคาม, ประเทศไทย</p>
          <p>💻 GitHub: panikaidao-del</p>
          <p>🌐 Vercel: week4-profile</p>
        </div>
      </div>

      <!-- Right Form -->
      <form
        onsubmit="event.preventDefault(); alert('ส่งข้อความเรียบร้อยแล้วค่ะ ขอบคุณที่ติดต่อเข้ามา!'); this.reset();"
        class="md:col-span-3 p-8 space-y-4"
      >
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ชื่อของคุณ</label>
          <input
            type="text"
            required
            placeholder="กรอกชื่อ-นามสกุล"
            class="w-full px-4 py-2.5 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">อีเมล</label>
          <input
            type="email"
            required
            placeholder="name@example.com"
            class="w-full px-4 py-2.5 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ข้อความ</label>
          <textarea
            rows="3"
            required
            placeholder="พิมพ์ข้อความที่ต้องการติดต่อ..."
            class="w-full px-4 py-2.5 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
        >
          ส่งข้อความ ✨
        </button>
      </form>
    </div>
  `;
}