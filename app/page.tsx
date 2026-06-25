import { ContactForm } from "./ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <SpecsSection />
        <AdvantagesSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#070d1a]/90 backdrop-blur-md border-b border-[#1a2540]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8M12 17v4" />
              <path d="M6 7h2M6 11h2M11 7h7M11 11h7" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight">
            Алмазная <span className="text-blue-400">6</span>
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-400">
          <a href="#services" className="hover:text-white transition-colors">Услуги</a>
          <a href="#specs" className="hover:text-white transition-colors">Характеристики</a>
          <a href="#advantages" className="hover:text-white transition-colors">Преимущества</a>
          <a href="#contacts" className="hover:text-white transition-colors">Контакты</a>
        </nav>
        <a
          href="#contacts"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors text-sm font-semibold"
        >
          Связаться
        </a>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Дата-центр в Липецке · 3 МВт мощности
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          Надёжная{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            инфраструктура
          </span>{" "}
          <br />
          для вашего бизнеса
        </h1>

        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          Профессиональный дата-центр «Алмазная 6» предлагает colocation и
          аренду стоек в Липецке. Гарантированная мощность, высокая надёжность
          и круглосуточная поддержка.
        </p>

        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl border border-green-500/40 bg-green-500/10 text-green-300 text-sm font-medium mb-12">
          <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.248-1.413 2.248H4.721c-1.447 0-2.415-1.25-1.413-2.248L5 14.5" />
          </svg>
          Доступно размещение AI-оборудования — GPU-кластеры, высокоплотные стойки 60–80 кВт
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+79159112323"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 transition-all font-semibold text-lg shadow-lg shadow-blue-600/30"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Позвонить нам
          </a>
          <a
            href="mailto:lipetsk-hpc@mail.ru"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-slate-600 hover:border-blue-500 hover:text-blue-400 transition-all font-semibold text-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            Написать на почту
          </a>
          <a
            href="#contacts"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-green-500/50 text-green-400 hover:bg-green-500/10 transition-all font-semibold text-lg"
          >
            Получить КП
          </a>
        </div>
        <p className="mt-4 text-sm text-slate-500">Ответим в течение 2 часов в рабочее время</p>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "3 МВт", label: "Мощность ЦОД" },
            { value: "10 кВт", label: "Мощность стойки" },
            { value: "99.98%", label: "Uptime SLA" },
            { value: "24/7", label: "Поддержка" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl border border-[#1a2540] bg-[#0d1424]/80 backdrop-blur-sm"
            >
              <div className="text-3xl font-bold text-blue-400 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="1.5" />
          <path d="M8 21h8M12 17v4" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: "Colocation",
      subtitle: "Размещение вашего оборудования",
      description:
        "Размещаем ваши серверы и сетевое оборудование в защищённом дата-центре. Предоставляем физическое пространство, электропитание, охлаждение и высокоскоростной интернет.",
      features: [
        "Физическая охрана 24/7",
        "Дизельные генераторы ИБП",
        "Система контроля доступа",
        "Видеонаблюдение",
        "Удалённый KVM доступ",
      ],
      badge: "Популярно",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="2" y="3" width="20" height="18" rx="2" strokeWidth="1.5" />
        </svg>
      ),
      title: "Аренда стоек",
      subtitle: "Выделенные серверные стойки",
      description:
        "Арендуйте полную серверную стойку мощностью до 10 кВт. Идеально для компаний, которым нужен полный контроль над оборудованием без затрат на собственную инфраструктуру.",
      features: [
        "Стойки по 10 кВт",
        "Резервное питание",
        "Выделенный канал",
        "Кросс-коннект",
        "Мониторинг энергопотребления",
      ],
      badge: null,
    },
  ];

  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
            Услуги
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Что мы предлагаем
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Гибкие решения для размещения серверного оборудования любого масштаба
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative p-8 rounded-2xl border border-[#1a2540] bg-[#0d1424] hover:border-blue-500/50 transition-all group"
            >
              {service.badge && (
                <span className="absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  {service.badge}
                </span>
              )}
              <div className="w-16 h-16 rounded-xl bg-blue-600/15 text-blue-400 flex items-center justify-center mb-6 group-hover:bg-blue-600/25 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-1">{service.title}</h3>
              <p className="text-blue-400 text-sm font-medium mb-4">{service.subtitle}</p>
              <p className="text-slate-400 leading-relaxed mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-slate-300">
                    <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contacts"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                Узнать стоимость
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpecsSection() {
  const specs = [
    {
      category: "Электропитание",
      items: [
        { label: "Общая мощность ЦОД", value: "3 МВт" },
        { label: "Мощность стойки", value: "до 10 кВт" },
        { label: "Резервирование питания", value: "2N" },
        { label: "Дизельные генераторы", value: "есть" },
        { label: "ИБП", value: "100% покрытие" },
      ],
    },
    {
      category: "Охлаждение",
      items: [
        { label: "Система охлаждения", value: "N+1" },
        { label: "Температура в зале", value: "18–24°C" },
        { label: "Влажность", value: "40–60%" },
        { label: "PUE", value: "≤ 1.5" },
      ],
    },
    {
      category: "Безопасность",
      items: [
        { label: "Охрана", value: "24/7" },
        { label: "Видеонаблюдение", value: "100% зон" },
        { label: "Контроль доступа", value: "карта + PIN" },
        { label: "Пожаротушение", value: "газовое" },
      ],
    },
    {
      category: "Связь",
      items: [
        { label: "Точки присутствия", value: "4 оператора" },
        { label: "Минимальный порт", value: "1 Гбит/с" },
        { label: "Резервирование канала", value: "есть" },
        { label: "IPv4 / IPv6", value: "оба протокола" },
      ],
    },
  ];

  return (
    <section id="specs" className="py-32 px-6 bg-[#0a1020]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
            Технические характеристики
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Параметры ЦОД
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Современная инфраструктура, соответствующая требованиям Tier III
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {specs.map((spec) => (
            <div
              key={spec.category}
              className="p-8 rounded-2xl border border-[#1a2540] bg-[#0d1424]"
            >
              <h3 className="text-lg font-bold text-blue-400 mb-5 flex items-center gap-2">
                <span className="w-1.5 h-6 rounded-full bg-blue-500 inline-block" />
                {spec.category}
              </h3>
              <div className="space-y-3">
                {spec.items.map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-2 border-b border-[#1a2540]/60 last:border-0">
                    <span className="text-slate-400 text-sm">{item.label}</span>
                    <span className="text-white font-semibold text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AdvantagesSection() {
  const advantages = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: "Максимальная надёжность",
      description: "Резервирование по схеме N+1 для питания и охлаждения. SLA 99.98% uptime с финансовой ответственностью.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: "Высокая скорость подключения",
      description: "Прямые пиринговые соединения с ведущими российскими операторами. Порты от 1 до 100 Гбит/с.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      title: "Выгодное расположение",
      description: "Центр Липецка, г. Алмазная 6. Удобный доступ для технических специалистов клиентов.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      title: "Профессиональная команда",
      description: "Квалифицированные специалисты с опытом работы в крупных дата-центрах. Поддержка 24/7/365.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
      ),
      title: "Гибкое ценообразование",
      description: "Тарифы под любой бюджет. Помесячная и годовая оплата со скидками. Прозрачный договор без скрытых платежей.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
        </svg>
      ),
      title: "Удалённое управление",
      description: "KVM over IP, IPMI/iDRAC доступ, умные PDU с мониторингом потребления. Управляйте оборудованием не выходя из офиса.",
    },
  ];

  return (
    <section id="advantages" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
            Преимущества
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Мы создаём условия, при которых ваша инфраструктура работает без сбоев
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv) => (
            <div
              key={adv.title}
              className="p-6 rounded-2xl border border-[#1a2540] bg-[#0d1424] hover:border-blue-500/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600/15 text-blue-400 flex items-center justify-center mb-4 group-hover:bg-blue-600/25 transition-colors">
                {adv.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{adv.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactsSection() {
  return (
    <section id="contacts" className="py-32 px-6 bg-[#0a1020]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
            Контакты
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Готовы обсудить ваши потребности и подобрать оптимальное решение
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="p-8 rounded-2xl border border-[#1a2540] bg-[#0d1424]">
              <h3 className="text-xl font-bold mb-6">Контактная информация</h3>
              <div className="space-y-5">
                <ContactItem
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  }
                  label="Адрес"
                  value="г. Липецк, ул. Алмазная, 6"
                />
                <ContactItem
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  }
                  label="Телефон"
                  value="+7 (915) 911-23-23"
                  href="tel:+79159112323"
                />
                <ContactItem
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  }
                  label="Email"
                  value="lipetsk-hpc@mail.ru"
                  href="mailto:lipetsk-hpc@mail.ru"
                />
                <ContactItem
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  }
                  label="Режим работы"
                  value="Круглосуточно, без выходных"
                />
              </div>
            </div>

            {/* Map placeholder */}
            <div className="h-52 rounded-2xl border border-[#1a2540] bg-[#0d1424] overflow-hidden relative flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
              <div className="relative text-center">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <p className="text-slate-400 text-sm font-medium">г. Липецк, ул. Алмазная, 6</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="p-8 rounded-2xl border border-[#1a2540] bg-[#0d1424]">
            <h3 className="text-xl font-bold mb-6">Оставить заявку</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-blue-600/15 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
        {icon}
      </div>
      <div>
        <div className="text-xs text-slate-500 mb-0.5 uppercase tracking-wider">{label}</div>
        <div className="text-white font-medium">{value}</div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block hover:opacity-80 transition-opacity">
        {content}
      </a>
    );
  }
  return content;
}

function Footer() {
  return (
    <footer className="border-t border-[#1a2540] py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8M12 17v4" />
              <path d="M6 7h2M6 11h2M11 7h7M11 11h7" strokeLinecap="round" />
            </svg>
          </div>
          <span className="font-bold">
            Алмазная <span className="text-blue-400">6</span>
          </span>
        </div>
        <div className="text-sm text-slate-500">
          © 2025 ЦОД «Алмазная 6». Все права защищены. · г. Липецк, ул. Алмазная, 6
        </div>
        <div className="flex gap-6 text-sm text-slate-500">
          <a href="#" className="hover:text-slate-300 transition-colors">Политика конфиденциальности</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Договор оферты</a>
        </div>
      </div>
    </footer>
  );
}
