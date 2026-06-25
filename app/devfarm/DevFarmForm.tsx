"use client";

export function DevFarmForm() {
  return (
    <>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",marginBottom:"16px"}}>
        <div><label style={{display:"block",fontSize:"13px",color:"#94a3b8",marginBottom:"6px"}}>Имя</label><input type="text" placeholder="Иван Иванов" style={{width:"100%",padding:"12px 16px",background:"#060810",border:"1px solid #1a2540",borderRadius:"12px",color:"#f0f4ff",fontSize:"14px",outline:"none",fontFamily:"inherit"}}/></div>
        <div><label style={{display:"block",fontSize:"13px",color:"#94a3b8",marginBottom:"6px"}}>Компания</label><input type="text" placeholder="ООО Ромашка" style={{width:"100%",padding:"12px 16px",background:"#060810",border:"1px solid #1a2540",borderRadius:"12px",color:"#f0f4ff",fontSize:"14px",outline:"none",fontFamily:"inherit"}}/></div>
      </div>
      <div style={{marginBottom:"16px"}}><label style={{display:"block",fontSize:"13px",color:"#94a3b8",marginBottom:"6px"}}>Телефон / Email</label><input type="text" placeholder="+7 (000) 000-00-00" style={{width:"100%",padding:"12px 16px",background:"#060810",border:"1px solid #1a2540",borderRadius:"12px",color:"#f0f4ff",fontSize:"14px",outline:"none",fontFamily:"inherit"}}/></div>
      <div style={{marginBottom:"16px"}}>
        <label style={{display:"block",fontSize:"13px",color:"#94a3b8",marginBottom:"6px"}}>Задача</label>
        <select style={{width:"100%",padding:"12px 16px",background:"#060810",border:"1px solid #1a2540",borderRadius:"12px",color:"#f0f4ff",fontSize:"14px",outline:"none",fontFamily:"inherit"}}>
          <option value="">Выберите задачу...</option>
          <option>Трафик на приложение</option>
          <option>Тестирование Android</option>
          <option>Тестирование iOS</option>
          <option>Мобильные прокси</option>
          <option>Автоматизация</option>
          <option>Другое</option>
        </select>
      </div>
      <div style={{marginBottom:"16px"}}><label style={{display:"block",fontSize:"13px",color:"#94a3b8",marginBottom:"6px"}}>Описание проекта</label><textarea rows={4} placeholder="Опишите задачу, количество устройств, сроки..." style={{width:"100%",padding:"12px 16px",background:"#060810",border:"1px solid #1a2540",borderRadius:"12px",color:"#f0f4ff",fontSize:"14px",outline:"none",fontFamily:"inherit",resize:"none"}}></textarea></div>
      <button onClick={() => alert("Заявка отправлена! Ответим в течение 2 часов.")} style={{width:"100%",padding:"16px",background:"#4ade80",color:"#06080f",border:"none",borderRadius:"12px",fontWeight:800,fontSize:"16px",cursor:"pointer"}}>Отправить заявку</button>
      <p style={{fontSize:"12px",color:"#475569",textAlign:"center",marginTop:"10px"}}>Ответим в течение 2 часов в рабочее время</p>
    </>
  );
}
