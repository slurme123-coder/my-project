"use client";

export function ContactForm() {
  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Заявка отправлена! Мы свяжемся с вами в течение 2 часов.");
      }}
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-slate-400 mb-2">Имя</label>
          <input
            type="text"
            placeholder="Иван Иванов"
            className="w-full px-4 py-3 rounded-xl border border-[#1a2540] bg-[#070d1a] text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors text-sm"
          />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-2">Компания</label>
          <input
            type="text"
            placeholder="ООО Ромашка"
            className="w-full px-4 py-3 rounded-xl border border-[#1a2540] bg-[#070d1a] text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors text-sm"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm text-slate-400 mb-2">Телефон / Email</label>
        <input
          type="text"
          placeholder="+7 (000) 000-00-00"
          className="w-full px-4 py-3 rounded-xl border border-[#1a2540] bg-[#070d1a] text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors text-sm"
        />
      </div>
      <div>
        <label className="block text-sm text-slate-400 mb-2">Услуга</label>
        <select className="w-full px-4 py-3 rounded-xl border border-[#1a2540] bg-[#070d1a] text-white focus:outline-none focus:border-blue-500 transition-colors text-sm">
          <option value="">Выберите услугу...</option>
          <option value="colocation">Colocation</option>
          <option value="rack">Аренда стойки</option>
          <option value="other">Другое</option>
        </select>
      </div>
      <div>
        <label className="block text-sm text-slate-400 mb-2">Сообщение</label>
        <textarea
          rows={4}
          placeholder="Опишите ваши требования: количество серверов, необходимая мощность, сроки..."
          className="w-full px-4 py-3 rounded-xl border border-[#1a2540] bg-[#070d1a] text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors text-sm resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 transition-all font-semibold text-white glow-pulse"
      >
        Отправить заявку
      </button>
      <p className="text-xs text-slate-600 text-center">
        Ответим в течение 2 часов в рабочее время
      </p>
    </form>
  );
}
