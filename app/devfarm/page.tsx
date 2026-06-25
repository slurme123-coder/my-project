"use client";

export const metadata = {
  title: "DevFarm — Device Farm для трафика и тестирования",
  description: "6000+ реальных Android устройств для трафика и тестирования приложений. iOS по запросу.",
};

export default function DevFarm() {
  return (
    <>
      <style>{`
        *,*::before,*::after{cursor:none!important}
        #cur-dot{position:fixed;width:10px;height:10px;background:#4ade80;border-radius:50%;pointer-events:none;z-index:99999;transform:translate(-50%,-50%);box-shadow:0 0 10px #4ade80,0 0 20px #4ade8066;transition:width .2s,height .2s,background .2s}
        #cur-ring{position:fixed;width:36px;height:36px;border:1.5px solid #4ade8088;border-radius:50%;pointer-events:none;z-index:99998;transform:translate(-50%,-50%);transition:width .25s,height .25s,border-color .2s}
        .df-nav{position:fixed;top:0;left:0;right:0;z-index:100;background:#06080fdd;backdrop-filter:blur(12px);border-bottom:1px solid #1a2540;padding:16px 40px;display:flex;align-items:center;justify-content:space-between}
        .df-logo{font-size:22px;font-weight:800;letter-spacing:-.5px;color:#f0f4ff}
        .df-logo span{color:#4ade80}
        .df-nav-links{display:flex;gap:32px;font-size:14px}
        .df-nav-links a{color:#94a3b8;text-decoration:none;transition:color .2s}
        .df-nav-links a:hover{color:#f0f4ff}
        .df-nav-cta{padding:10px 24px;background:#4ade80;color:#06080f;border-radius:10px;font-weight:700;font-size:14px;text-decoration:none;transition:opacity .2s}
        .df-nav-cta:hover{opacity:.85}
        .df-hero{min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:120px 40px 80px;position:relative;overflow:hidden;background:#06080f;color:#f0f4ff}
        .df-grid-bg{position:absolute;inset:0;opacity:.15;background-image:linear-gradient(#4ade8022 1px,transparent 1px),linear-gradient(90deg,#4ade8022 1px,transparent 1px);background-size:60px 60px}
        .df-orb1{position:absolute;top:20%;left:15%;width:400px;height:400px;background:#22c55e18;border-radius:50%;filter:blur(80px)}
        .df-orb2{position:absolute;bottom:20%;right:15%;width:300px;height:300px;background:#3b82f618;border-radius:50%;filter:blur(80px)}
        .df-badge{display:inline-flex;align-items:center;gap:8px;padding:8px 20px;border-radius:999px;border:1px solid #4ade8033;background:#4ade8011;color:#4ade80;font-size:13px;font-weight:600;margin-bottom:28px}
        .df-pulse{width:8px;height:8px;background:#4ade80;border-radius:50%;animation:dfpulse 2s infinite}
        @keyframes dfpulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(1.3)}}
        .df-h1{font-size:clamp(36px,6vw,72px);font-weight:900;line-height:1.1;margin-bottom:24px;letter-spacing:-2px;color:#f0f4ff}
        .df-green{background:linear-gradient(135deg,#4ade80,#22c55e);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
        .df-blue{background:linear-gradient(135deg,#60a5fa,#3b82f6);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
        .df-sub{font-size:18px;color:#94a3b8;max-width:600px;margin:0 auto 40px;line-height:1.7}
        .df-btns{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-bottom:16px}
        .df-btn-p{display:inline-flex;align-items:center;gap:10px;padding:16px 36px;background:#4ade80;color:#06080f;border-radius:14px;font-weight:800;font-size:16px;text-decoration:none;transition:all .2s;box-shadow:0 0 30px #4ade8044}
        .df-btn-p:hover{background:#22c55e;transform:translateY(-2px)}
        .df-btn-s{display:inline-flex;align-items:center;gap:10px;padding:16px 36px;border:1px solid #4ade8044;border-radius:14px;font-weight:700;font-size:16px;color:#4ade80;text-decoration:none;transition:all .2s}
        .df-btn-s:hover{background:#4ade8011;border-color:#4ade80}
        .df-note{font-size:13px;color:#475569}
        .df-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;max-width:900px;margin:60px auto 0;padding:0 40px}
        .df-stat{background:#0d1120;border:1px solid #1a2540;border-radius:16px;padding:24px;text-align:center}
        .df-stat-v{font-size:32px;font-weight:900;color:#4ade80;margin-bottom:4px}
        .df-stat-l{font-size:12px;color:#94a3b8}
        .df-sec{padding:100px 40px;max-width:1200px;margin:0 auto;color:#f0f4ff}
        .df-sec-badge{display:inline-flex;align-items:center;gap:6px;padding:6px 16px;border-radius:999px;border:1px solid #4ade8033;background:#4ade8011;color:#4ade80;font-size:12px;font-weight:600;margin-bottom:16px}
        .df-h2{font-size:clamp(28px,4vw,44px);font-weight:900;letter-spacing:-1px;margin-bottom:12px;color:#f0f4ff}
        .df-sec-sub{color:#94a3b8;font-size:16px;max-width:600px;margin:0 auto 56px;line-height:1.6;text-align:center}
        .df-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
        .df-card{background:#0d1120;border:1px solid #1a2540;border-radius:20px;padding:32px;transition:border-color .2s}
        .df-card:hover{border-color:#4ade8044}
        .df-card-icon{width:52px;height:52px;border-radius:14px;background:#4ade8015;display:flex;align-items:center;justify-content:center;margin-bottom:20px;font-size:24px}
        .df-card h3{font-size:18px;font-weight:700;margin-bottom:8px;color:#f0f4ff}
        .df-card p{font-size:14px;color:#94a3b8;line-height:1.6}
        .df-tag{display:inline-block;margin-top:12px;padding:4px 12px;border-radius:999px;background:#4ade8015;color:#4ade80;font-size:12px;font-weight:600}
        .df-tag.blue{background:#3b82f615;color:#60a5fa}
        .df-tag.purple{background:#a78bfa15;color:#a78bfa}
        .df-bg-alt{background:#0a0e1a}
        .df-platforms{display:grid;grid-template-columns:1fr 1fr;gap:24px}
        .df-platform{background:#0d1120;border:1px solid #1a2540;border-radius:24px;padding:40px;position:relative;overflow:hidden}
        .df-platform.android{border-color:#4ade8033}
        .df-platform.ios{border-color:#3b82f633}
        .df-platform-badge{position:absolute;top:24px;right:24px;padding:6px 16px;border-radius:999px;font-size:12px;font-weight:700}
        .df-platform.android .df-platform-badge{background:#4ade8020;color:#4ade80}
        .df-platform.ios .df-platform-badge{background:#3b82f620;color:#60a5fa}
        .df-platform-icon{font-size:48px;margin-bottom:20px}
        .df-platform h3{font-size:24px;font-weight:800;margin-bottom:8px;color:#f0f4ff}
        .df-platform .version{font-size:13px;color:#94a3b8;margin-bottom:20px}
        .df-platform ul{list-style:none;display:flex;flex-direction:column;gap:10px}
        .df-platform li{font-size:14px;color:#94a3b8;display:flex;align-items:center;gap:10px}
        .df-platform li::before{content:"✓";color:#4ade80;font-weight:700;flex-shrink:0}
        .df-platform.ios li::before{color:#60a5fa}
        .df-platform-count{margin-top:24px;font-size:36px;font-weight:900}
        .df-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
        .df-step{background:#0d1120;border:1px solid #1a2540;border-radius:20px;padding:28px;text-align:center}
        .df-step-num{width:44px;height:44px;border-radius:12px;background:#4ade8020;color:#4ade80;font-weight:900;font-size:18px;display:flex;align-items:center;justify-content:center;margin:0 auto 16px}
        .df-step h4{font-size:15px;font-weight:700;margin-bottom:8px;color:#f0f4ff}
        .df-step p{font-size:13px;color:#94a3b8;line-height:1.5}
        .df-pricing{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
        .df-price-card{background:#0d1120;border:1px solid #1a2540;border-radius:24px;padding:36px;transition:all .2s}
        .df-price-card.featured{border-color:#4ade80;box-shadow:0 0 40px #4ade8020;position:relative}
        .df-price-card.featured::before{content:"Популярный";position:absolute;top:-14px;left:50%;transform:translateX(-50%);background:#4ade80;color:#06080f;padding:4px 20px;border-radius:999px;font-size:12px;font-weight:800}
        .df-price-card h3{font-size:18px;font-weight:700;margin-bottom:6px;color:#f0f4ff}
        .df-price-card .desc{font-size:13px;color:#94a3b8;margin-bottom:24px}
        .df-price{font-size:42px;font-weight:900;margin-bottom:4px;color:#f0f4ff}
        .df-price-card.featured .df-price{color:#4ade80}
        .df-price sub{font-size:16px;font-weight:400;color:#94a3b8}
        .df-price-note{font-size:12px;color:#94a3b8;margin-bottom:28px}
        .df-price-features{list-style:none;display:flex;flex-direction:column;gap:12px;margin-bottom:32px}
        .df-price-features li{font-size:14px;color:#94a3b8;display:flex;align-items:center;gap:10px}
        .df-price-features li::before{content:"✓";color:#4ade80;font-weight:700;flex-shrink:0}
        .df-btn-plan{display:block;text-align:center;padding:14px;border-radius:12px;font-weight:700;font-size:15px;text-decoration:none;transition:all .2s}
        .df-btn-plan.green{background:#4ade80;color:#06080f}
        .df-btn-plan.green:hover{background:#22c55e}
        .df-btn-plan.outline{border:1px solid #1a2540;color:#94a3b8}
        .df-btn-plan.outline:hover{border-color:#4ade80;color:#4ade80}
        .df-contacts-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px}
        .df-contact-box{background:#0d1120;border:1px solid #1a2540;border-radius:24px;padding:40px}
        .df-contact-box h3{font-size:20px;font-weight:700;margin-bottom:28px;color:#f0f4ff}
        .df-ci{display:flex;align-items:flex-start;gap:16px;margin-bottom:24px}
        .df-ci-icon{width:44px;height:44px;border-radius:12px;background:#4ade8015;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:20px}
        .df-ci-lbl{font-size:11px;color:#94a3b8;text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px}
        .df-ci-val{font-size:15px;font-weight:600;color:#f0f4ff;text-decoration:none}
        .df-ci-val:hover{color:#4ade80}
        .df-form-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px}
        .df-form-group{margin-bottom:16px}
        .df-label{display:block;font-size:13px;color:#94a3b8;margin-bottom:6px}
        .df-input{width:100%;padding:12px 16px;background:#060810;border:1px solid #1a2540;border-radius:12px;color:#f0f4ff;font-size:14px;outline:none;transition:border-color .2s;font-family:inherit}
        .df-input:focus{border-color:#4ade80}
        .df-textarea{width:100%;padding:12px 16px;background:#060810;border:1px solid #1a2540;border-radius:12px;color:#f0f4ff;font-size:14px;outline:none;transition:border-color .2s;font-family:inherit;resize:none}
        .df-textarea:focus{border-color:#4ade80}
        .df-submit{width:100%;padding:16px;background:#4ade80;color:#06080f;border:none;border-radius:12px;font-weight:800;font-size:16px;transition:all .2s}
        .df-submit:hover{background:#22c55e;transform:translateY(-1px)}
        .df-form-note{font-size:12px;color:#475569;text-align:center;margin-top:10px}
        .df-footer{border-top:1px solid #1a2540;padding:32px 40px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;background:#06080f;color:#f0f4ff}
        .df-footer-copy{font-size:13px;color:#94a3b8}
        .tc{text-align:center}
      `}</style>

      <div id="cur-dot"></div>
      <div id="cur-ring"></div>

      <nav className="df-nav">
        <div className="df-logo">Dev<span>Farm</span></div>
        <div className="df-nav-links">
          <a href="#df-platforms">Платформы</a>
          <a href="#df-how">Как работает</a>
          <a href="#df-pricing">Тарифы</a>
          <a href="#df-contacts">Контакты</a>
        </div>
        <a href="#df-contacts" className="df-nav-cta">Получить доступ</a>
      </nav>

      {/* HERO */}
      <div className="df-hero">
        <div className="df-grid-bg"></div>
        <div className="df-orb1"></div>
        <div className="df-orb2"></div>
        <div style={{position:"relative",maxWidth:"900px"}}>
          <div className="df-badge"><div className="df-pulse"></div>Сервис активен · 6 000+ устройств онлайн</div>
          <h1 className="df-h1">Device Farm для<br/><span className="df-green">трафика</span> и <span className="df-blue">тестирования</span><br/>мобильных приложений</h1>
          <p className="df-sub">Реальные Android и iOS устройства для накрутки трафика, тестирования приложений и автоматизации. 6 000 устройств Android, старт от $12.</p>
          <div className="df-btns">
            <a href="tel:+79159112323" className="df-btn-p">📞 Позвонить нам</a>
            <a href="mailto:lipetsk-hpc@mail.ru" className="df-btn-s">✉️ Написать на почту</a>
          </div>
          <p className="df-note">Ответим в течение 2 часов · Персональные условия под ваш проект</p>
        </div>
      </div>

      {/* STATS */}
      <div style={{background:"#06080f"}}>
        <div className="df-stats">
          {[["6 000+","Android устройств"],["от $12","Стоимость трафика"],["24/7","Работа устройств"],["iOS","По запросу"]].map(([v,l])=>(
            <div key={l} className="df-stat"><div className="df-stat-v">{v}</div><div className="df-stat-l">{l}</div></div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <div style={{background:"#06080f"}}>
        <div className="df-sec">
          <div className="tc"><div className="df-sec-badge">Возможности</div><h2 className="df-h2">Что вы получаете</h2><p className="df-sec-sub">Полная инфраструктура для работы с мобильным трафиком и тестирования приложений</p></div>
          <div className="df-cards">
            {[
              {icon:"📱",title:"Реальные устройства",text:"Только физические смартфоны — никаких эмуляторов. Реальный user-agent, IMEI, поведение.",tag:"6 000 Android",tc:""},
              {icon:"🚀",title:"Мобильный трафик",text:"Генерация органического трафика на приложения, сайты, магазины. Уникальные сессии с реальных SIM-карт.",tag:"от $12",tc:""},
              {icon:"🧪",title:"Тестирование приложений",text:"Функциональное и нагрузочное тестирование на реальных устройствах с разными версиями Android и iOS.",tag:"QA & Testing",tc:"blue"},
              {icon:"🤖",title:"Автоматизация",text:"Поддержка Appium, UIAutomator, XCTest. Запуск сценариев на тысячах устройств одновременно.",tag:"Appium",tc:"blue"},
              {icon:"🌐",title:"Мобильные прокси",text:"Ротация IP через реальные мобильные SIM-карты. Уникальный IP на каждое устройство.",tag:"4G/5G SIM",tc:"purple"},
              {icon:"📊",title:"Статистика и API",text:"Детальная аналитика по каждому устройству. REST API для интеграции в ваши процессы.",tag:"REST API",tc:"purple"},
            ].map(c=>(
              <div key={c.title} className="df-card">
                <div className="df-card-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <span className={`df-tag ${c.tc}`}>{c.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PLATFORMS */}
      <div className="df-bg-alt" id="df-platforms">
        <div className="df-sec">
          <div className="tc"><div className="df-sec-badge">Платформы</div><h2 className="df-h2">Android и iOS</h2><p className="df-sec-sub">Работайте с двумя крупнейшими мобильными платформами</p></div>
          <div className="df-platforms">
            <div className="df-platform android">
              <span className="df-platform-badge">Доступно сейчас</span>
              <div className="df-platform-icon">🤖</div>
              <h3>Android</h3>
              <div className="version">Android 9.0 — 14.0 · Разные производители</div>
              <ul>
                {["6 000+ физических устройств","Samsung, Xiaomi, Realme, OPPO и др.","Реальные SIM-карты (МТС, Билайн, Мегафон)","Уникальные IMEI и fingerprint","Стоимость от $12 от суммы трафика"].map(i=><li key={i}>{i}</li>)}
              </ul>
              <div className="df-platform-count" style={{color:"#4ade80"}}>6 000+ <span style={{fontSize:"14px",color:"#94a3b8",fontWeight:400,marginLeft:"4px"}}>устройств</span></div>
            </div>
            <div className="df-platform ios">
              <span className="df-platform-badge">По запросу</span>
              <div className="df-platform-icon">🍎</div>
              <h3>iOS</h3>
              <div className="version">iPhone 12 — iPhone 15 · iOS 16+</div>
              <ul>
                {["Парк iPhone устройств","iPhone 12, 13, 14, 15 серии","Поддержка XCTest и Appium","TestFlight и App Store тестирование","Индивидуальные условия подключения"].map(i=><li key={i}>{i}</li>)}
              </ul>
              <div className="df-platform-count" style={{color:"#60a5fa"}}>iOS <span style={{fontSize:"14px",color:"#94a3b8",fontWeight:400,marginLeft:"4px"}}>по запросу</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* HOW */}
      <div style={{background:"#06080f"}} id="df-how">
        <div className="df-sec">
          <div className="tc"><div className="df-sec-badge">Как работает</div><h2 className="df-h2">Начните за 4 шага</h2><p className="df-sec-sub">Простое подключение и быстрый старт</p></div>
          <div className="df-steps">
            {[["1","Заявка","Оставьте заявку, опишите задачу. Ответим в течение 2 часов."],["2","Согласование","Подбираем количество устройств, тариф и схему работы под ваш проект."],["3","Подключение","Предоставляем API-ключ и доступ к панели управления устройствами."],["4","Старт","Запускаете задачи на нужном количестве устройств. Платите за результат."]].map(([n,t,p])=>(
              <div key={n} className="df-step"><div className="df-step-num">{n}</div><h4>{t}</h4><p>{p}</p></div>
            ))}
          </div>
        </div>
      </div>

      {/* PRICING */}
      <div className="df-bg-alt" id="df-pricing">
        <div className="df-sec">
          <div className="tc"><div className="df-sec-badge">Тарифы</div><h2 className="df-h2">Прозрачные цены</h2><p className="df-sec-sub">Гибкие условия под любой масштаб</p></div>
          <div className="df-pricing">
            <div className="df-price-card">
              <h3>Старт</h3><p className="desc">Для небольших проектов и тестирования</p>
              <div className="df-price">от $12<sub> трафика</sub></div>
              <p className="df-price-note">До 100 устройств</p>
              <ul className="df-price-features">{["До 100 Android устройств","Базовый трафик","Email поддержка","Статистика по устройствам","REST API доступ"].map(i=><li key={i}>{i}</li>)}</ul>
              <a href="#df-contacts" className="df-btn-plan outline">Обсудить условия</a>
            </div>
            <div className="df-price-card featured">
              <h3>Бизнес</h3><p className="desc">Для серьёзных нагрузок и постоянной работы</p>
              <div className="df-price">Индивид.<sub> условия</sub></div>
              <p className="df-price-note">100 — 2 000 устройств</p>
              <ul className="df-price-features">{["До 2 000 Android устройств","Приоритетный трафик","Поддержка 24/7","Персональный менеджер","SLA гарантии","iOS по запросу"].map(i=><li key={i}>{i}</li>)}</ul>
              <a href="#df-contacts" className="df-btn-plan green">Получить КП</a>
            </div>
            <div className="df-price-card">
              <h3>Enterprise</h3><p className="desc">Полный парк под ваши задачи</p>
              <div className="df-price">6 000+<sub> устройств</sub></div>
              <p className="df-price-note">Весь парк устройств</p>
              <ul className="df-price-features">{["Весь парк 6 000+ устройств","Выделенная инфраструктура","Android + iOS","Кастомная интеграция","Dedicated команда","NDA и договор"].map(i=><li key={i}>{i}</li>)}</ul>
              <a href="#df-contacts" className="df-btn-plan outline">Обсудить проект</a>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACTS */}
      <div style={{background:"#06080f"}} id="df-contacts">
        <div className="df-sec">
          <div className="tc"><div className="df-sec-badge">Контакты</div><h2 className="df-h2">Свяжитесь с нами</h2><p className="df-sec-sub">Обсудим ваш проект и подберём решение</p></div>
          <div className="df-contacts-grid">
            <div className="df-contact-box">
              <h3>Контактная информация</h3>
              {[["📞","Телефон","tel:+79159112323","+7 (915) 911-23-23"],["✉️","Email","mailto:lipetsk-hpc@mail.ru","lipetsk-hpc@mail.ru"],["📍","Расположение","","г. Липецк, ул. Алмазная, 6"],["🕐","Режим работы","","Круглосуточно, без выходных"]].map(([icon,lbl,href,val])=>(
                <div key={lbl} className="df-ci">
                  <div className="df-ci-icon">{icon}</div>
                  <div><div className="df-ci-lbl">{lbl}</div>{href?<a href={href} className="df-ci-val">{val}</a>:<span className="df-ci-val">{val}</span>}</div>
                </div>
              ))}
            </div>
            <div className="df-contact-box">
              <h3>Оставить заявку</h3>
              <div className="df-form-row">
                <div><label className="df-label">Имя</label><input className="df-input" type="text" placeholder="Иван Иванов"/></div>
                <div><label className="df-label">Компания</label><input className="df-input" type="text" placeholder="ООО Ромашка"/></div>
              </div>
              <div className="df-form-group"><label className="df-label">Телефон / Email</label><input className="df-input" type="text" placeholder="+7 (000) 000-00-00"/></div>
              <div className="df-form-group">
                <label className="df-label">Задача</label>
                <select className="df-input">
                  <option value="">Выберите задачу...</option>
                  <option>Трафик на приложение</option>
                  <option>Тестирование Android</option>
                  <option>Тестирование iOS</option>
                  <option>Мобильные прокси</option>
                  <option>Автоматизация</option>
                  <option>Другое</option>
                </select>
              </div>
              <div className="df-form-group"><label className="df-label">Описание проекта</label><textarea className="df-textarea" rows={4} placeholder="Опишите задачу, количество устройств, сроки..."></textarea></div>
              <button className="df-submit" onClick={()=>alert('Заявка отправлена! Ответим в течение 2 часов.')}>Отправить заявку</button>
              <p className="df-form-note">Ответим в течение 2 часов в рабочее время</p>
            </div>
          </div>
        </div>
      </div>

      <div className="df-footer">
        <div className="df-logo" style={{fontSize:"18px"}}>Dev<span>Farm</span></div>
        <div className="df-footer-copy">© 2025 DevFarm · г. Липецк, ул. Алмазная, 6</div>
        <div style={{fontSize:"13px",color:"#94a3b8"}}>
          <a href="#" style={{color:"#94a3b8",textDecoration:"none",marginRight:"20px"}}>Конфиденциальность</a>
          <a href="#" style={{color:"#94a3b8",textDecoration:"none"}}>Оферта</a>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{__html:`
        const dot=document.getElementById('cur-dot');
        const ring=document.getElementById('cur-ring');
        let mx=0,my=0,rx=0,ry=0;
        document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px';});
        (function a(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(a);})();
        document.addEventListener('mousedown',()=>{dot.style.transform='translate(-50%,-50%) scale(.6)';ring.style.width='52px';ring.style.height='52px';});
        document.addEventListener('mouseup',()=>{dot.style.transform='translate(-50%,-50%) scale(1)';ring.style.width='36px';ring.style.height='36px';});
        document.querySelectorAll('a,button').forEach(el=>{el.addEventListener('mouseenter',()=>{ring.style.width='52px';ring.style.height='52px';ring.style.borderColor='#4ade80';dot.style.background='#22c55e';});el.addEventListener('mouseleave',()=>{ring.style.width='36px';ring.style.height='36px';ring.style.borderColor='#4ade8088';dot.style.background='#4ade80';});});
      `}}/>
    </>
  );
}
