import { useState, useEffect } from "react";

const LOGO = "data:image/jpeg;base64,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";

const C = { navy:"#0B1A2E", n2:"#111F36", n3:"#182844", gold:"#C8A24E", gL:"#E4C96E", w:"#FFFFFF", g:"#8896A8", gn:"#10B981", rd:"#EF4444", or:"#F59E0B", bl:"#3B82F6", pu:"#8B5CF6", cy:"#06B6D4", pk:"#EC4899" };

const CATS = [
  {id:"plot",l:"Plots",i:"🏗️",c:C.bl,t:"மனைகள்"},
  {id:"villa",l:"Villas",i:"🏡",c:C.pu,t:"வில்லாக்கள்"},
  {id:"apt",l:"Apartments",i:"🏢",c:C.cy,t:"அடுக்குமாடி"},
  {id:"farm",l:"Farm Land",i:"🌾",c:C.gn,t:"விவசாய நிலம்"},
  {id:"comm",l:"Commercial",i:"🏪",c:C.or,t:"வணிக இடம்"},
  {id:"ware",l:"Warehouse",i:"🏭",c:C.rd,t:"கிடங்கு"},
  {id:"rent",l:"Rental",i:"🔑",c:C.pk,t:"வாடகை"},
];

const LOCS = ["Chennai","West Tambaram","Vandalur","Guduvancheri","OMR","Madhavaram","Chengalpattu","Kelambakkam","Thiruporur","ECR","Porur","Marakkanam","Nellikuppam","Mamandur","Coimbatore","Madurai","Bengaluru","Hyderabad"];

const P = [
  {id:1,t:"i5 Aurowin Enclave",cat:"plot",ty:"sale",loc:"ECR, Marakkanam",pr:1250000,ar:"1200 sq.ft",ic:"🏗️",f:true,ow:"i5 Housing",d:"Premium DTCP-approved resort plots near ECR beach road with all modern amenities, tar road, drainage, street lights, compound wall, and 24/7 security.",b:0,ba:0,r:4.8,v:342,rera:"TN/29/Layout/0045/2026",dtcp:true,im:3},
  {id:2,t:"Wonder City Villas",cat:"villa",ty:"sale",loc:"Thiruporur, Chengalpattu",pr:8500000,ar:"2400 sq.ft",ic:"🏡",f:true,ow:"i5 Housing",d:"Luxurious 3BHK individual villas with car parking, modular kitchen, garden space, community hall, children's play area.",b:3,ba:3,r:4.9,v:521,rera:"TN/29/Build/0123/2026",dtcp:true,im:5},
  {id:3,t:"CK Madhavan Nagar",cat:"plot",ty:"sale",loc:"Madhavaram, Chennai",pr:1800000,ar:"800 sq.ft",ic:"🏗️",f:true,ow:"i5 Housing",d:"Strategically located CMDA-approved plots near Madhavaram industrial corridor. Close to Metro station, hospitals, schools.",b:0,ba:0,r:4.7,v:289,rera:"TN/01/Layout/0089/2025",dtcp:true,im:4},
  {id:4,t:"Luxury Apartment Porur",cat:"apt",ty:"sale",loc:"Porur, Chennai",pr:12000000,ar:"1800 sq.ft",ic:"🏢",f:false,ow:"Rajesh Kumar",d:"Spacious 3BHK apartment with lake view, swimming pool, gym, club house, power backup.",b:3,ba:2,r:4.5,v:198,rera:"TN/01/Build/0234/2025",dtcp:true,im:6},
  {id:5,t:"Organic Farm Land",cat:"farm",ty:"sale",loc:"Mamandur, Chengalpattu",pr:3500000,ar:"1 Acre",ic:"🌾",f:false,ow:"i5 Housing",d:"Fertile agricultural land with bore well, electricity, mango & coconut trees. Patta land with clear title.",b:0,ba:0,r:4.6,v:167,rera:null,dtcp:false,im:3},
  {id:6,t:"IT Corridor Office Space",cat:"comm",ty:"rent",loc:"OMR, Chennai",pr:75000,ar:"3500 sq.ft",ic:"🏪",f:true,ow:"Suresh Babu",d:"Fully furnished office space on OMR IT corridor with AC, UPS, conference room, and pantry.",b:0,ba:2,r:4.4,v:445,rera:null,dtcp:true,im:4},
  {id:7,t:"Industrial Warehouse",cat:"ware",ty:"rent",loc:"Guduvancheri, Chennai",pr:150000,ar:"10,000 sq.ft",ic:"🏭",f:false,ow:"i5 Housing",d:"Spacious warehouse with 20ft ceiling, loading dock, 3-phase power on GST Road.",b:0,ba:1,r:4.3,v:132,rera:null,dtcp:true,im:3},
  {id:8,t:"Family Home Rental",cat:"rent",ty:"rent",loc:"Tambaram, Chennai",pr:18000,ar:"950 sq.ft",ic:"🔑",f:false,ow:"Priya Sharma",d:"Well-maintained 2BHK near Tambaram railway station. Semi-furnished with wardrobes and geysers.",b:2,ba:2,r:4.2,v:276,rera:null,dtcp:false,im:3},
  {id:9,t:"i5 Cynosure Plots",cat:"plot",ty:"sale",loc:"West Tambaram, Chennai",pr:2200000,ar:"1500 sq.ft",ic:"🏗️",f:true,ow:"i5 Housing",d:"Premium gated community plots with 24/7 security, CCTV, children's park, temple, and jogging track.",b:0,ba:0,r:4.8,v:389,rera:"TN/01/Layout/0156/2025",dtcp:true,im:5},
  {id:10,t:"Sea View Penthouse",cat:"apt",ty:"sale",loc:"ECR, Chennai",pr:28000000,ar:"3200 sq.ft",ic:"🏢",f:false,ow:"Vikram Reddy",d:"Ultra-luxury sea-facing penthouse with private terrace, infinity pool, and Italian marble.",b:4,ba:4,r:5.0,v:612,rera:"TN/29/Build/0067/2026",dtcp:true,im:8},
  {id:11,t:"i5 Palace Villa Plots",cat:"villa",ty:"sale",loc:"Nellikuppam",pr:4500000,ar:"2000 sq.ft",ic:"🏡",f:true,ow:"i5 Housing",d:"Premium villa plots in serene countryside. Gated community with club house, swimming pool, gym.",b:0,ba:0,r:4.7,v:301,rera:"TN/29/Layout/0201/2026",dtcp:true,im:4},
  {id:12,t:"Retail Space Madhavaram",cat:"comm",ty:"sale",loc:"Madhavaram, Chennai",pr:5500000,ar:"600 sq.ft",ic:"🏪",f:false,ow:"i5 Housing",d:"Ready-to-move retail shop in busy commercial complex. High footfall area near bus stand.",b:0,ba:1,r:4.5,v:210,rera:null,dtcp:true,im:3},
];

const US = {
  "admin@i5housing.com":{pw:"i5admin2026",nm:"i5 Admin",rl:"admin",ph:"7667005000"},
  "owner@i5housing.com":{pw:"owner123",nm:"Property Owner",rl:"owner",ph:"9876543210"},
  "user@i5housing.com":{pw:"user123",nm:"Sudalai",rl:"user",ph:"9123456789"},
};

const fmt = n => { if(n>=1e7) return `₹${(n/1e7).toFixed(1)} Cr`; if(n>=1e5) return `₹${(n/1e5).toFixed(1)} L`; return `₹${n.toLocaleString("en-IN")}`; };
const fp = (p,ty) => ty==="rent" ? `${fmt(p)}/mo` : fmt(p);

const Logo = ({s=44}) => <img src={LOGO} alt="i5" style={{width:s,height:s,borderRadius:s*0.22,objectFit:"cover"}} />;

const Badge = ({children,color=C.gold}) => <span style={{background:`${color}18`,color,fontSize:10,fontWeight:800,padding:"3px 9px",borderRadius:20,letterSpacing:.6,textTransform:"uppercase",whiteSpace:"nowrap"}}>{children}</span>;

const Btn = ({children,onClick,v="primary",full,style,disabled,sz="md"}) => {
  const pd=sz==="sm"?"8px 16px":sz==="lg"?"16px 32px":"12px 24px";
  const fs=sz==="sm"?12:sz==="lg"?16:14;
  const base={primary:{background:`linear-gradient(135deg,${C.gold},${C.gL})`,color:C.navy,fontWeight:800,border:"none"},secondary:{background:"transparent",border:`2px solid ${C.gold}`,color:C.gold,fontWeight:700},ghost:{background:`${C.w}10`,color:C.w,fontWeight:600,border:"none"},success:{background:C.gn,color:"#fff",fontWeight:700,border:"none"}};
  return <button disabled={disabled} onClick={onClick} style={{...base[v],padding:pd,borderRadius:14,cursor:disabled?"not-allowed":"pointer",fontSize:fs,width:full?"100%":"auto",transition:"all .2s",opacity:disabled?.45:1,letterSpacing:.4,display:"inline-flex",alignItems:"center",justifyContent:"center",gap:8,...style}}>{children}</button>;
};

const Fld = ({label,icon,ta,...p}) => (
  <div style={{marginBottom:14}}>
    {label&&<label style={{color:C.g,fontSize:11,fontWeight:700,marginBottom:5,display:"block",letterSpacing:.8,textTransform:"uppercase"}}>{label}</label>}
    <div style={{position:"relative"}}>
      {icon&&<span style={{position:"absolute",left:13,top:ta?"14px":"50%",transform:ta?"none":"translateY(-50%)",fontSize:16,zIndex:1}}>{icon}</span>}
      {ta?<textarea {...p} style={{width:"100%",padding:icon?"14px 14px 14px 40px":"14px",background:`${C.w}06`,border:`1.5px solid ${C.w}10`,borderRadius:14,color:C.w,fontSize:14,outline:"none",boxSizing:"border-box",minHeight:90,resize:"vertical",fontFamily:"inherit",...(p.style||{})}} />
        :<input {...p} style={{width:"100%",padding:icon?"14px 14px 14px 40px":"14px",background:`${C.w}06`,border:`1.5px solid ${C.w}10`,borderRadius:14,color:C.w,fontSize:14,outline:"none",boxSizing:"border-box",...(p.style||{})}} />}
    </div>
  </div>
);

const Sel = ({label,opts,...p}) => (
  <div style={{marginBottom:14}}>
    {label&&<label style={{color:C.g,fontSize:11,fontWeight:700,marginBottom:5,display:"block",letterSpacing:.8,textTransform:"uppercase"}}>{label}</label>}
    <select {...p} style={{width:"100%",padding:"14px",background:C.n2,border:`1.5px solid ${C.w}10`,borderRadius:14,color:C.w,fontSize:14,outline:"none",boxSizing:"border-box",...(p.style||{})}}>
      {opts.map(o=><option key={o.v} value={o.v} style={{background:C.navy}}>{o.l}</option>)}
    </select>
  </div>
);

// ═══ SPLASH ═══
function Splash({onDone}) {
  const [p,setP]=useState(0);
  useEffect(()=>{const t=setInterval(()=>setP(v=>{if(v>=100){clearInterval(t);setTimeout(onDone,400);return 100;}return v+3;}),50);return()=>clearInterval(t);},[]);
  return (
    <div style={{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:`radial-gradient(ellipse at 30% 20%,${C.n3},${C.navy} 70%)`,position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0,backgroundImage:`repeating-linear-gradient(0deg,transparent,transparent 80px,${C.gold}04 80px,${C.gold}04 81px),repeating-linear-gradient(90deg,transparent,transparent 80px,${C.gold}04 80px,${C.gold}04 81px)`}} />
      <div style={{animation:"pulse 2s ease-in-out infinite",marginBottom:16}}><Logo s={90} /></div>
      <h1 style={{color:C.w,fontSize:34,fontWeight:900,margin:0,fontFamily:"'Georgia',serif"}}>i5 <span style={{color:C.gold}}>Housing</span></h1>
      <p style={{color:C.gold,fontSize:14,margin:"2px 0",fontFamily:"'Georgia',serif"}}>& Properties ®</p>
      <p style={{color:C.gL,fontSize:12,letterSpacing:5,textTransform:"uppercase",marginTop:6,fontStyle:"italic"}}>Think High Achieve High</p>
      <div style={{width:220,height:5,background:`${C.w}08`,borderRadius:5,marginTop:36,overflow:"hidden"}}>
        <div style={{width:`${p}%`,height:"100%",background:`linear-gradient(90deg,${C.gold},${C.gL})`,borderRadius:5,transition:"width .08s"}} />
      </div>
      <p style={{color:C.g,fontSize:12,marginTop:14}}>{p<30?"Initializing...":p<60?"Loading properties...":p<90?"Almost ready...":"Welcome! 🏠"}</p>
      <div style={{position:"absolute",bottom:24,textAlign:"center"}}>
        <p style={{color:`${C.g}60`,fontSize:10,margin:0}}>📞 7667 00 5000 • 72001 41515</p>
        <p style={{color:`${C.g}40`,fontSize:9,margin:"4px 0 0"}}>© 2026 i5 Housing & Properties Pvt Ltd</p>
      </div>
      <style>{`@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}`}</style>
    </div>
  );
}

// ═══ LOGIN ═══
function Login({onLogin}) {
  const [mode,setMode]=useState("login");
  const [em,setEm]=useState("");const [pw,setPw]=useState("");const [nm,setNm]=useState("");const [ph,setPh]=useState("");const [rl,setRl]=useState("user");
  const [err,setErr]=useState("");const [showPw,setSP]=useState(false);
  const doL=()=>{const u=US[em];if(u&&u.pw===pw)onLogin({email:em,nm:u.nm,rl:u.rl,ph:u.ph});else setErr("Invalid credentials. Use demo accounts below.");};
  const doR=()=>{if(!nm||!em||!pw||!ph){setErr("All fields required");return;}US[em]={pw,nm,rl,ph};onLogin({email:em,nm,rl,ph});};

  return (
    <div style={{height:"100%",display:"flex",flexDirection:"column",background:`radial-gradient(ellipse at 50% 0%,${C.n3},${C.navy} 55%)`,overflow:"auto"}}>
      <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:20}}>
        <Logo s={64} />
        <h1 style={{color:C.w,fontSize:24,fontWeight:900,margin:"8px 0 0",fontFamily:"'Georgia',serif"}}>i5 <span style={{color:C.gold}}>Housing</span></h1>
        <p style={{color:C.g,fontSize:11,letterSpacing:3,textTransform:"uppercase",marginBottom:24}}>{mode==="login"?"Sign in to continue":"Create your account"}</p>
        <div style={{width:"100%",maxWidth:400}}>
          <div style={{display:"flex",background:`${C.w}05`,borderRadius:16,padding:3,marginBottom:20}}>
            {["login","register"].map(m=>(
              <button key={m} onClick={()=>{setMode(m);setErr("");}} style={{flex:1,padding:11,border:"none",borderRadius:13,cursor:"pointer",fontSize:13,fontWeight:700,background:mode===m?`linear-gradient(135deg,${C.gold},${C.gL})`:"transparent",color:mode===m?C.navy:C.g,transition:"all .25s"}}>{m==="login"?"🔐 Sign In":"✨ Register"}</button>
            ))}
          </div>
          {mode==="register"&&<><Fld label="Full Name" icon="👤" placeholder="Your name" value={nm} onChange={e=>setNm(e.target.value)} /><Fld label="Phone" icon="📱" placeholder="+91 XXXXX XXXXX" value={ph} onChange={e=>setPh(e.target.value)} /><Sel label="I want to" value={rl} onChange={e=>setRl(e.target.value)} opts={[{v:"user",l:"🏠 Buy / Rent"},{v:"owner",l:"🔑 List Property (Owner)"}]} /></>}
          <Fld label="Email" icon="📧" placeholder="you@example.com" type="email" value={em} onChange={e=>{setEm(e.target.value);setErr("");}} />
          <div style={{position:"relative"}}><Fld label="Password" icon="🔒" placeholder="Password" type={showPw?"text":"password"} value={pw} onChange={e=>{setPw(e.target.value);setErr("");}} /><button onClick={()=>setSP(!showPw)} style={{position:"absolute",right:12,top:32,background:"none",border:"none",color:C.g,cursor:"pointer",fontSize:13}}>{showPw?"🙈":"👁"}</button></div>
          {err&&<div style={{color:C.rd,fontSize:13,marginBottom:14,background:`${C.rd}12`,padding:"11px 14px",borderRadius:12,borderLeft:`3px solid ${C.rd}`}}>⚠️ {err}</div>}
          <Btn full sz="lg" onClick={mode==="login"?doL:doR} style={{marginTop:4}}>{mode==="login"?"Sign In →":"Create Account →"}</Btn>
          {mode==="login"&&<div style={{marginTop:16}}>
            <p style={{color:C.g,fontSize:11,textAlign:"center",marginBottom:10,letterSpacing:1,textTransform:"uppercase"}}>Demo Accounts</p>
            <div style={{background:`${C.w}04`,borderRadius:14,overflow:"hidden",border:`1px solid ${C.w}06`}}>
              {[{e:"admin@i5housing.com",p:"i5admin2026",r:"Admin",ic:"👑"},{e:"owner@i5housing.com",p:"owner123",r:"Owner",ic:"🔑"},{e:"user@i5housing.com",p:"user123",r:"Buyer",ic:"🏠"}].map((d,i)=>(
                <div key={d.e} onClick={()=>{setEm(d.e);setPw(d.p);}} style={{cursor:"pointer",padding:"11px 14px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:i<2?`1px solid ${C.w}06`:"none"}}>
                  <span style={{color:C.w,fontSize:12}}>{d.ic} {d.e}</span><Badge>{d.r}</Badge>
                </div>
              ))}
            </div>
          </div>}
        </div>
      </div>
      <p style={{color:`${C.g}40`,fontSize:9,textAlign:"center",padding:"8px 0 14px"}}>Secured by Razorpay™ • www.i5housing.com</p>
    </div>
  );
}

// ═══ CARD ═══
function Card({p,onClick}){const cat=CATS.find(c=>c.id===p.cat);return(
  <div onClick={onClick} style={{background:C.n2,borderRadius:18,overflow:"hidden",cursor:"pointer",border:`1px solid ${C.w}06`}}>
    <div style={{height:125,background:`linear-gradient(135deg,${cat?.c}20,${C.navy})`,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"}}>
      <span style={{fontSize:44}}>{p.ic}</span>
      {p.f&&<span style={{position:"absolute",top:8,left:8,background:`linear-gradient(135deg,${C.gold},${C.gL})`,color:C.navy,fontSize:8,fontWeight:800,padding:"3px 7px",borderRadius:7}}>⭐ FEATURED</span>}
      <span style={{position:"absolute",top:8,right:8,background:p.ty==="sale"?`${C.gn}dd`:`${C.or}dd`,color:"#fff",fontSize:8,fontWeight:800,padding:"3px 7px",borderRadius:7,textTransform:"uppercase"}}>{p.ty==="sale"?"Sale":"Rent"}</span>
      {p.dtcp&&<span style={{position:"absolute",bottom:6,left:8,background:`${C.gn}20`,color:C.gn,fontSize:7,fontWeight:800,padding:"2px 5px",borderRadius:5}}>✓ DTCP</span>}
    </div>
    <div style={{padding:"10px 12px 12px"}}>
      <h3 style={{color:C.w,fontSize:12,fontWeight:700,margin:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{p.t}</h3>
      <p style={{color:C.g,fontSize:10,margin:"2px 0 6px"}}>📍 {p.loc}</p>
      <div style={{display:"flex",gap:4,marginBottom:6}}><Badge color={cat?.c}>{cat?.i} {cat?.l}</Badge></div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <span style={{color:C.gold,fontSize:14,fontWeight:900,fontFamily:"'Georgia',serif"}}>{fp(p.pr,p.ty)}</span>
        <span style={{color:C.g,fontSize:9}}>⭐{p.r}</span>
      </div>
    </div>
  </div>
);}

// ═══ DETAIL ═══
function Detail({p,onBack,onBook}){const cat=CATS.find(c=>c.id===p.cat);return(
  <div style={{height:"100%",overflow:"auto",background:C.navy}}>
    <div style={{height:230,background:`linear-gradient(135deg,${cat?.c}25,${C.navy})`,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"}}>
      <span style={{fontSize:80}}>{p.ic}</span>
      <button onClick={onBack} style={{position:"absolute",top:16,left:16,background:`${C.navy}bb`,border:"none",color:C.w,width:42,height:42,borderRadius:14,cursor:"pointer",fontSize:18,backdropFilter:"blur(10px)"}}>←</button>
      <div style={{position:"absolute",top:16,right:16,display:"flex",gap:6,flexDirection:"column",alignItems:"flex-end"}}>
        <span style={{background:p.ty==="sale"?C.gn:C.or,color:"#fff",fontSize:11,fontWeight:800,padding:"5px 12px",borderRadius:10,textTransform:"uppercase"}}>{p.ty==="sale"?"For Sale":"For Rent"}</span>
        {p.dtcp&&<span style={{background:`${C.gn}20`,color:C.gn,fontSize:10,fontWeight:700,padding:"4px 10px",borderRadius:8}}>✓ DTCP</span>}
      </div>
      <div style={{position:"absolute",bottom:12,display:"flex",gap:5}}>
        {Array.from({length:p.im}).map((_,i)=><div key={i} style={{width:i===0?20:7,height:7,borderRadius:4,background:i===0?C.gold:`${C.w}30`}} />)}
      </div>
    </div>
    <div style={{padding:"18px 18px 100px"}}>
      <h1 style={{color:C.w,fontSize:22,fontWeight:900,margin:0,fontFamily:"'Georgia',serif"}}>{p.t}</h1>
      <p style={{color:C.g,fontSize:12,margin:"4px 0 0"}}>📍 {p.loc} • 👤 {p.ow}</p>
      <div style={{background:`linear-gradient(135deg,${C.gold}15,${C.n2})`,borderRadius:16,padding:16,margin:"14px 0",border:`1px solid ${C.gold}25`}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div><p style={{color:C.g,fontSize:10,margin:0,textTransform:"uppercase",letterSpacing:1}}>Price</p><span style={{color:C.gold,fontSize:26,fontWeight:900,fontFamily:"'Georgia',serif"}}>{fp(p.pr,p.ty)}</span></div>
          <div style={{textAlign:"right"}}><p style={{color:C.g,fontSize:10,margin:0}}>Area</p><span style={{color:C.w,fontSize:15,fontWeight:700}}>{p.ar}</span></div>
        </div>
        {p.pr>=100000&&p.ty==="sale"&&<p style={{color:C.g,fontSize:11,margin:"8px 0 0",borderTop:`1px solid ${C.w}08`,paddingTop:8}}>💳 EMI from <strong style={{color:C.gL}}>{fmt(Math.round(p.pr*.0085))}/mo</strong></p>}
      </div>
      <div style={{display:"flex",gap:7,marginBottom:16}}>
        {[p.b?{v:p.b,l:"Beds",i:"🛏"}:null,p.ba?{v:p.ba,l:"Baths",i:"🚿"}:null,{v:p.ar,l:"Area",i:"📐"},{v:p.v,l:"Views",i:"👁"},{v:p.r,l:"Rating",i:"⭐"}].filter(Boolean).map(s=>(
          <div key={s.l} style={{flex:1,background:`${C.w}05`,borderRadius:12,padding:"9px 4px",textAlign:"center"}}><p style={{fontSize:13,margin:0}}>{s.i}</p><p style={{color:C.w,fontSize:12,fontWeight:700,margin:"2px 0 0"}}>{s.v}</p><p style={{color:C.g,fontSize:8,margin:0}}>{s.l}</p></div>
        ))}
      </div>
      <h3 style={{color:C.w,fontSize:14,fontWeight:800,margin:"0 0 6px"}}>About</h3>
      <p style={{color:C.g,fontSize:13,lineHeight:1.7,margin:"0 0 16px"}}>{p.d}</p>
      {p.rera&&<div style={{background:`${C.gn}10`,borderRadius:12,padding:"10px 14px",marginBottom:14,display:"flex",alignItems:"center",gap:10,border:`1px solid ${C.gn}20`}}><span style={{fontSize:16}}>🏛️</span><div><p style={{color:C.gn,fontSize:11,fontWeight:700,margin:0}}>RERA Registered</p><p style={{color:C.g,fontSize:10,margin:0}}>{p.rera}</p></div></div>}
      <h3 style={{color:C.w,fontSize:14,fontWeight:800,margin:"0 0 8px"}}>Highlights</h3>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginBottom:18}}>
        {["✅ Clear Title","✅ Bank Loan","✅ Gated Community","✅ 24/7 Security","✅ Water & Power","✅ Tar Road","✅ Street Lights","✅ Drainage"].map(f=><div key={f} style={{color:C.g,fontSize:11,padding:"8px 10px",background:`${C.w}04`,borderRadius:10}}>{f}</div>)}
      </div>
      <div style={{background:C.n2,borderRadius:16,padding:14,marginBottom:16,display:"flex",gap:12,alignItems:"center",border:`1px solid ${C.w}06`}}>
        <Logo s={40} /><div style={{flex:1}}><p style={{color:C.w,fontSize:13,fontWeight:700,margin:0}}>i5 Housing & Properties</p><p style={{color:C.gold,fontSize:11,margin:"2px 0 0"}}>📞 7667 00 5000 • WhatsApp 72001 41515</p></div>
      </div>
      <Btn full sz="lg" onClick={onBook}>{p.ty==="sale"?"🏠 Book Now • Pay Online":"📝 Schedule Visit"}</Btn>
    </div>
  </div>
);}

// ═══ RAZORPAY BOOKING ═══
function BookSheet({p,onClose,user}){
  const [step,setStep]=useState(1);const [pm,setPm]=useState(null);const [proc,setProc]=useState(false);const [txn,setTxn]=useState("");
  const [f,sF]=useState({nm:user?.nm||"",ph:user?.ph||"",em:user?.email||"",dt:"",tm:"10:00",nt:""});
  const s=(k,v)=>sF(x=>({...x,[k]:v}));
  const bk=p.ty==="sale"?25000:5000;const gst=Math.round(bk*.18);const tot=bk+gst;
  const pay=()=>{setProc(true);setTimeout(()=>{setTxn(`rzp_i5_${Date.now().toString(36).toUpperCase()}`);setProc(false);setStep(4);},2500);};

  return(
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.75)",display:"flex",alignItems:"flex-end",justifyContent:"center",zIndex:999,backdropFilter:"blur(4px)"}}>
      <div style={{width:"100%",maxWidth:480,background:C.navy,borderRadius:"24px 24px 0 0",maxHeight:"88vh",overflow:"auto",border:`1px solid ${C.w}10`,boxShadow:"0 -10px 40px rgba(0,0,0,.5)"}}>
        <div style={{padding:"16px 20px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:`1px solid ${C.w}06`,position:"sticky",top:0,background:C.navy,zIndex:1,borderRadius:"24px 24px 0 0"}}>
          <div>
            <h2 style={{color:C.w,margin:0,fontSize:17,fontWeight:800}}>{["","📋 Details","💳 Payment","🔐 Checkout","✅ Confirmed"][step]}</h2>
            {step<4&&<div style={{display:"flex",gap:4,marginTop:5}}>{[1,2,3].map(i=><div key={i} style={{width:i<=step?40:24,height:3,borderRadius:2,background:i<=step?C.gold:`${C.w}10`,transition:"all .3s"}} />)}</div>}
          </div>
          <button onClick={onClose} style={{background:`${C.w}08`,border:"none",color:C.w,width:34,height:34,borderRadius:10,cursor:"pointer",fontSize:14}}>✕</button>
        </div>
        <div style={{padding:20}}>
          {step<4&&<div style={{background:`${C.gold}08`,borderRadius:14,padding:12,marginBottom:16,display:"flex",gap:10,alignItems:"center",border:`1px solid ${C.gold}15`}}>
            <span style={{fontSize:32}}>{p.ic}</span><div style={{flex:1,minWidth:0}}><p style={{color:C.w,fontSize:12,fontWeight:700,margin:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{p.t}</p><p style={{color:C.gold,fontSize:15,fontWeight:900,margin:"2px 0 0",fontFamily:"'Georgia',serif"}}>{fp(p.pr,p.ty)}</p></div>
          </div>}

          {step===1&&<>
            <Fld label="Full Name" icon="👤" placeholder="Your name" value={f.nm} onChange={e=>s("nm",e.target.value)} />
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}><Fld label="Phone" icon="📱" placeholder="+91" value={f.ph} onChange={e=>s("ph",e.target.value)} /><Fld label="Email" icon="📧" placeholder="Email" value={f.em} onChange={e=>s("em",e.target.value)} /></div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}><Fld label="Visit Date" icon="📅" type="date" value={f.dt} onChange={e=>s("dt",e.target.value)} /><Sel label="Time" value={f.tm} onChange={e=>s("tm",e.target.value)} opts={["09:00","10:00","11:00","14:00","15:00","16:00"].map(t=>({v:t,l:`🕐 ${t}`}))} /></div>
            <Btn full sz="lg" onClick={()=>setStep(2)} disabled={!f.nm||!f.ph}>Continue to Payment →</Btn>
          </>}

          {step===2&&<>
            <div style={{background:`${C.w}04`,borderRadius:16,padding:16,marginBottom:16,border:`1px solid ${C.w}06`}}>
              <p style={{color:C.g,fontSize:10,margin:"0 0 12px",textTransform:"uppercase",letterSpacing:1.5,fontWeight:700}}>Booking Summary</p>
              {[{l:"Booking Amount",v:fmt(bk),c:C.w},{l:"GST (18%)",v:fmt(gst),c:C.g},{l:"Processing Fee",v:"₹0 (Waived)",c:C.gn}].map(r=><div key={r.l} style={{display:"flex",justifyContent:"space-between",marginBottom:7}}><span style={{color:C.g,fontSize:13}}>{r.l}</span><span style={{color:r.c,fontSize:13,fontWeight:600}}>{r.v}</span></div>)}
              <div style={{height:1,background:`${C.w}10`,margin:"10px 0"}} />
              <div style={{display:"flex",justifyContent:"space-between"}}><span style={{color:C.w,fontSize:16,fontWeight:800}}>Total</span><span style={{color:C.gold,fontSize:20,fontWeight:900,fontFamily:"'Georgia',serif"}}>{fmt(tot)}</span></div>
            </div>
            <p style={{color:C.g,fontSize:11,marginBottom:10,fontWeight:600}}>SELECT PAYMENT METHOD</p>
            {[{id:"upi",ic:"📱",l:"UPI / GPay / PhonePe",s:"Instant"},{id:"card",ic:"💳",l:"Credit / Debit Card",s:"Visa, Mastercard, RuPay"},{id:"nb",ic:"🏦",l:"Net Banking",s:"All major banks"},{id:"emi",ic:"🏧",l:"EMI Options",s:"No-cost EMI available"},{id:"wal",ic:"👛",l:"Wallets",s:"Amazon Pay, Paytm"}].map(m=>(
              <div key={m.id} onClick={()=>setPm(m.id)} style={{padding:"13px 14px",background:pm===m.id?`${C.gold}12`:`${C.w}04`,borderRadius:14,marginBottom:7,cursor:"pointer",border:`1.5px solid ${pm===m.id?C.gold:`${C.w}06`}`,display:"flex",alignItems:"center",gap:11}}>
                <span style={{fontSize:20}}>{m.ic}</span><div style={{flex:1}}><p style={{color:C.w,fontSize:12,fontWeight:600,margin:0}}>{m.l}</p><p style={{color:C.g,fontSize:10,margin:0}}>{m.s}</p></div>
                <div style={{width:18,height:18,borderRadius:9,border:`2px solid ${pm===m.id?C.gold:C.g}`,display:"flex",alignItems:"center",justifyContent:"center"}}>{pm===m.id&&<div style={{width:9,height:9,borderRadius:5,background:C.gold}} />}</div>
              </div>
            ))}
            <Btn full sz="lg" onClick={()=>setStep(3)} disabled={!pm} style={{marginTop:8}}>Pay {fmt(tot)} →</Btn>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginTop:12}}><span style={{color:C.g,fontSize:10}}>🔒 Secured by</span><span style={{color:"#2D81F7",fontSize:13,fontWeight:800}}>Razorpay</span></div>
          </>}

          {step===3&&<div style={{textAlign:"center",padding:"16px 0"}}>
            {!proc?<>
              <div style={{background:"#1a1f36",borderRadius:18,overflow:"hidden",border:`1px solid ${C.w}10`,marginBottom:18}}>
                <div style={{background:"#2D81F7",padding:"12px 16px",display:"flex",alignItems:"center",justifyContent:"space-between"}}><span style={{color:"#fff",fontSize:15,fontWeight:800,letterSpacing:.5}}>Razorpay</span><span style={{color:"#fff",fontSize:12}}>🔒 Secure</span></div>
                <div style={{padding:16}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}><div style={{display:"flex",alignItems:"center",gap:8}}><Logo s={26} /><span style={{color:C.w,fontSize:11,fontWeight:600}}>i5 Housing</span></div><span style={{color:C.gold,fontSize:17,fontWeight:900}}>{fmt(tot)}</span></div>
                  <div style={{height:1,background:`${C.w}08`,margin:"8px 0"}} />
                  <p style={{color:C.g,fontSize:10,margin:"0 0 3px"}}>Property: {p.t}</p>
                  <p style={{color:C.g,fontSize:10,margin:"0 0 3px"}}>Customer: {f.nm} ({f.ph})</p>
                  <p style={{color:C.g,fontSize:10,margin:"0 0 10px"}}>Method: {pm?.toUpperCase()}</p>
                </div>
              </div>
              <Btn full sz="lg" v="success" onClick={pay}>🔐 Confirm & Pay {fmt(tot)}</Btn>
              <Btn full v="ghost" onClick={()=>setStep(2)} style={{marginTop:8}} sz="sm">← Back</Btn>
            </>:<div style={{padding:"40px 0"}}><div style={{width:54,height:54,border:`4px solid ${C.gold}`,borderTopColor:"transparent",borderRadius:"50%",margin:"0 auto 18px",animation:"spin .8s linear infinite"}} /><p style={{color:C.w,fontSize:15,fontWeight:700}}>Processing Payment...</p><p style={{color:C.g,fontSize:12}}>Don't close this window</p><style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style></div>}
          </div>}

          {step===4&&<div style={{textAlign:"center",padding:"8px 0 16px"}}>
            <div style={{width:72,height:72,borderRadius:"50%",background:`${C.gn}18`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 14px",fontSize:36,border:`3px solid ${C.gn}`}}>✓</div>
            <h3 style={{color:C.gn,fontSize:22,fontWeight:900,margin:"0 0 4px",fontFamily:"'Georgia',serif"}}>Payment Successful!</h3>
            <p style={{color:C.g,fontSize:13,margin:"0 0 16px"}}>Booking confirmed</p>
            <div style={{background:`${C.w}04`,borderRadius:16,padding:16,textAlign:"left",marginBottom:14,border:`1px solid ${C.w}08`}}>
              {[{l:"Booking ID",v:`i5-BK-${Date.now().toString().slice(-6)}`,c:C.gold},{l:"Transaction",v:txn,c:C.w},{l:"Amount",v:fmt(tot),c:C.gn},{l:"Property",v:p.t,c:C.w},{l:"Method",v:pm?.toUpperCase(),c:C.w},{l:"Status",v:"CONFIRMED",c:C.gn}].map(r=>(
                <div key={r.l} style={{display:"flex",justifyContent:"space-between",marginBottom:6}}><span style={{color:C.g,fontSize:11}}>{r.l}</span><span style={{color:r.c,fontSize:11,fontWeight:700,maxWidth:"55%",overflow:"hidden",textOverflow:"ellipsis",textAlign:"right"}}>{r.v}</span></div>
              ))}
            </div>
            <div style={{background:`${C.gold}10`,borderRadius:12,padding:12,marginBottom:14,border:`1px solid ${C.gold}15`}}>
              <p style={{color:C.gL,fontSize:11,margin:0,lineHeight:1.6}}>📞 Our team will call you at <strong>{f.ph}</strong> within 2 hours</p>
            </div>
            <Btn full sz="lg" onClick={onClose}>🏠 Back to Home</Btn>
            <p style={{color:C.g,fontSize:9,marginTop:10}}>Processed by Razorpay™ • {txn}</p>
          </div>}
        </div>
      </div>
    </div>
  );
}

// ═══ LIST PROPERTY ═══
function ListScr({onBack,user}){
  const [f,sF]=useState({t:"",cat:"plot",ty:"sale",loc:"Chennai",pr:"",ar:"",d:"",b:"",ba:"",rera:"",ct:user?.ph||""});
  const [done,setDone]=useState(false);const [ph,setPh]=useState(0);const s=(k,v)=>sF(x=>({...x,[k]:v}));
  if(done)return(<div style={{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:24,textAlign:"center"}}>
    <div style={{width:72,height:72,borderRadius:"50%",background:`${C.gn}18`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 14px",fontSize:36,border:`3px solid ${C.gn}`}}>✓</div>
    <h2 style={{color:C.w,fontSize:22,fontWeight:800,margin:"0 0 8px"}}>Listed!</h2><p style={{color:C.g,fontSize:13,maxWidth:300}}><strong style={{color:C.gold}}>{f.t}</strong> submitted for review. Live within 24hrs.</p>
    <div style={{background:`${C.w}05`,borderRadius:14,padding:14,margin:"20px 0",border:`1px solid ${C.w}08`}}><p style={{color:C.g,fontSize:10,margin:"0 0 4px",textTransform:"uppercase"}}>Listing ID</p><p style={{color:C.gold,fontSize:20,fontWeight:900,margin:0,fontFamily:"'Georgia',serif"}}>i5-LST-{Date.now().toString().slice(-6)}</p></div>
    <Btn onClick={onBack}>← Home</Btn>
  </div>);
  return(<div style={{height:"100%",overflow:"auto",padding:18}}>
    <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:18}}><button onClick={onBack} style={{background:`${C.w}08`,border:"none",color:C.w,width:40,height:40,borderRadius:14,cursor:"pointer",fontSize:16}}>←</button><div><h2 style={{color:C.w,fontSize:18,fontWeight:800,margin:0}}>List Your Property</h2><p style={{color:C.g,fontSize:10,margin:0}}>Reach lakhs of buyers</p></div></div>
    <Fld label="Title *" icon="🏠" placeholder="e.g. Villa Plot in ECR" value={f.t} onChange={e=>s("t",e.target.value)} />
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}><Sel label="Category" value={f.cat} onChange={e=>s("cat",e.target.value)} opts={CATS.map(c=>({v:c.id,l:`${c.i} ${c.l}`}))} /><Sel label="Type" value={f.ty} onChange={e=>s("ty",e.target.value)} opts={[{v:"sale",l:"🏷 Sale"},{v:"rent",l:"🔑 Rent"}]} /></div>
    <Sel label="Location" value={f.loc} onChange={e=>s("loc",e.target.value)} opts={LOCS.map(l=>({v:l,l:`📍 ${l}`}))} />
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}><Fld label="Price (₹) *" icon="💰" placeholder="25,00,000" value={f.pr} onChange={e=>s("pr",e.target.value)} /><Fld label="Area *" icon="📐" placeholder="1200 sq.ft" value={f.ar} onChange={e=>s("ar",e.target.value)} /></div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}><Fld label="Beds" icon="🛏" type="number" value={f.b} onChange={e=>s("b",e.target.value)} /><Fld label="Baths" icon="🚿" type="number" value={f.ba} onChange={e=>s("ba",e.target.value)} /></div>
    <Fld label="RERA No." icon="🏛️" placeholder="TN/XX/Layout/XXXX" value={f.rera} onChange={e=>s("rera",e.target.value)} />
    <Fld label="Phone" icon="📞" value={f.ct} onChange={e=>s("ct",e.target.value)} />
    <Fld label="Description *" icon="📝" ta placeholder="Describe your property..." value={f.d} onChange={e=>s("d",e.target.value)} />
    <div onClick={()=>setPh(x=>Math.min(x+1,10))} style={{border:`2px dashed ${ph>0?C.gold:C.w}20`,borderRadius:16,padding:ph>0?14:24,textAlign:"center",marginBottom:16,cursor:"pointer",background:ph>0?`${C.gold}05`:"transparent"}}>
      {ph>0?<div style={{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center"}}>{Array.from({length:ph}).map((_,i)=><div key={i} style={{width:48,height:48,borderRadius:10,background:`${C.gold}15`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>📸</div>)}<div style={{width:48,height:48,borderRadius:10,background:`${C.w}06`,display:"flex",alignItems:"center",justifyContent:"center",color:C.g,fontSize:20,border:`1px dashed ${C.w}15`}}>+</div></div>
      :<><span style={{fontSize:28}}>📸</span><p style={{color:C.g,fontSize:11,margin:"4px 0 0"}}>Upload photos (max 10)</p></>}
    </div>
    <Btn full sz="lg" onClick={()=>{if(f.t&&f.pr&&f.ar)setDone(true);}} disabled={!f.t||!f.pr||!f.ar} style={{marginBottom:20}}>🚀 Submit</Btn>
  </div>);
}

// ═══ MAIN ═══
export default function App(){
  const [scr,setScr]=useState("splash");const [user,setUser]=useState(null);const [selP,setSelP]=useState(null);const [bookP,setBookP]=useState(null);
  const [tab,setTab]=useState("home");const [fC,setFC]=useState("all");const [fT,setFT]=useState("all");const [q,setQ]=useState("");

  const fl = P.filter(p=>{
    if(fC!=="all"&&p.cat!==fC)return false;if(fT!=="all"&&p.ty!==fT)return false;
    if(q){const s=q.toLowerCase();if(!p.t.toLowerCase().includes(s)&&!p.loc.toLowerCase().includes(s))return false;}return true;
  });

  if(scr==="splash")return<div style={{height:"100vh"}}><Splash onDone={()=>setScr("login")} /></div>;
  if(scr==="login")return<div style={{height:"100vh"}}><Login onLogin={u=>{setUser(u);setScr("home");}} /></div>;
  if(scr==="detail"&&selP)return<div style={{height:"100vh"}}><Detail p={selP} onBack={()=>{setScr("home");setSelP(null);}} onBook={()=>setBookP(selP)} />{bookP&&<BookSheet p={bookP} user={user} onClose={()=>{setBookP(null);setScr("home");setSelP(null);}} />}</div>;
  if(scr==="list")return<div style={{height:"100vh",background:C.navy}}><ListScr onBack={()=>setScr("home")} user={user} /></div>;

  return(
    <div style={{height:"100vh",display:"flex",flexDirection:"column",background:C.navy,color:C.w,fontFamily:"'Segoe UI',system-ui,sans-serif"}}>
      {/* HEADER */}
      <div style={{padding:"12px 16px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:`1px solid ${C.w}06`,flexShrink:0}}>
        <div style={{display:"flex",alignItems:"center",gap:9}}><Logo s={36} /><div><h1 style={{margin:0,fontSize:17,fontWeight:900,fontFamily:"'Georgia',serif",lineHeight:1}}>i5 <span style={{color:C.gold}}>Housing</span></h1><p style={{margin:0,color:C.g,fontSize:7,letterSpacing:2.5,textTransform:"uppercase",fontStyle:"italic"}}>Think High Achieve High</p></div></div>
        <div style={{display:"flex",alignItems:"center",gap:7}}><Badge>{user?.rl}</Badge><button onClick={()=>{setScr("login");setUser(null);setTab("home");}} style={{width:34,height:34,borderRadius:11,background:`${C.gold}15`,border:"none",cursor:"pointer",fontSize:14,display:"flex",alignItems:"center",justifyContent:"center"}}>👤</button></div>
      </div>

      {/* CONTENT */}
      <div style={{flex:1,overflow:"auto",paddingBottom:68}}>
        {tab==="home"&&<>
          <div style={{padding:"16px 16px 0"}}><p style={{color:C.g,fontSize:11,margin:0}}>நல்வரவு 🙏</p><h2 style={{color:C.w,fontSize:20,fontWeight:800,margin:"2px 0",fontFamily:"'Georgia',serif"}}>{user?.nm}!</h2><p style={{color:C.g,fontSize:11,margin:"0 0 12px"}}>Find your dream property across South India</p></div>
          <div style={{padding:"0 16px 8px"}}><div style={{position:"relative"}}><span style={{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)",fontSize:15}}>🔍</span><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search properties, locations..." style={{width:"100%",padding:"13px 36px 13px 40px",background:C.n2,border:`1.5px solid ${C.w}08`,borderRadius:16,color:C.w,fontSize:13,outline:"none",boxSizing:"border-box"}} />{q&&<button onClick={()=>setQ("")} style={{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",color:C.g,cursor:"pointer"}}>✕</button>}</div></div>
          <div style={{padding:"0 16px 7px",display:"flex",gap:6}}>{[{v:"all",l:"🏠 All"},{v:"sale",l:"🏷 Sale"},{v:"rent",l:"🔑 Rent"}].map(t=><button key={t.v} onClick={()=>setFT(t.v)} style={{padding:"8px 15px",borderRadius:22,border:"none",cursor:"pointer",fontSize:11,fontWeight:700,background:fT===t.v?`linear-gradient(135deg,${C.gold},${C.gL})`:`${C.w}08`,color:fT===t.v?C.navy:C.g}}>{t.l}</button>)}</div>
          <div style={{padding:"0 16px 12px",display:"flex",gap:5,overflowX:"auto"}}><button onClick={()=>setFC("all")} style={{padding:"7px 14px",borderRadius:20,border:"none",cursor:"pointer",fontSize:11,fontWeight:700,flexShrink:0,background:fC==="all"?C.n3:`${C.w}05`,color:fC==="all"?C.w:C.g}}>All</button>{CATS.map(c=><button key={c.id} onClick={()=>setFC(c.id)} style={{padding:"7px 14px",borderRadius:20,border:"none",cursor:"pointer",fontSize:11,fontWeight:700,flexShrink:0,background:fC===c.id?`${c.c}22`:`${C.w}05`,color:fC===c.id?c.c:C.g}}>{c.i} {c.l}</button>)}</div>

          {fC==="all"&&fT==="all"&&!q&&<>
            <div style={{padding:"0 16px 10px"}}><h3 style={{color:C.w,fontSize:15,fontWeight:800,margin:"0 0 9px"}}>⭐ Featured</h3><div style={{display:"flex",gap:10,overflowX:"auto",paddingBottom:4}}>{P.filter(p=>p.f).map(p=>{const cat=CATS.find(c=>c.id===p.cat);return(<div key={p.id} onClick={()=>{setSelP(p);setScr("detail");}} style={{minWidth:200,background:`linear-gradient(135deg,${cat?.c}15,${C.n2})`,borderRadius:16,padding:12,cursor:"pointer",border:`1px solid ${C.w}06`,flexShrink:0}}><div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}><span style={{fontSize:28}}>{p.ic}</span><Badge color={C.gold}>⭐</Badge></div><h4 style={{color:C.w,fontSize:12,fontWeight:700,margin:"0 0 2px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{p.t}</h4><p style={{color:C.g,fontSize:10,margin:"0 0 4px"}}>📍 {p.loc}</p><span style={{color:C.gold,fontSize:15,fontWeight:900,fontFamily:"'Georgia',serif"}}>{fp(p.pr,p.ty)}</span></div>);})}</div></div>
            <div style={{padding:"0 16px 12px",display:"flex",gap:7}}>{[{n:"120+",l:"Properties",i:"🏠"},{n:"50+",l:"Projects",i:"📋"},{n:"10K+",l:"Owners",i:"😊"},{n:"15+",l:"Years",i:"🏆"}].map(s=><div key={s.l} style={{flex:1,background:`${C.w}04`,borderRadius:12,padding:"8px 4px",textAlign:"center"}}><p style={{fontSize:12,margin:0}}>{s.i}</p><p style={{color:C.gold,fontSize:14,fontWeight:900,margin:"1px 0",fontFamily:"'Georgia',serif"}}>{s.n}</p><p style={{color:C.g,fontSize:7,margin:0}}>{s.l}</p></div>)}</div>
          </>}

          <div style={{padding:"0 16px"}}>
            <h3 style={{color:C.w,fontSize:14,fontWeight:800,margin:"0 0 9px"}}>{fC==="all"?"All Properties":CATS.find(c=>c.id===fC)?.l} <span style={{color:C.g,fontWeight:500,fontSize:11}}>({fl.length})</span></h3>
            {fl.length===0?<div style={{textAlign:"center",padding:36}}><span style={{fontSize:40}}>🔍</span><p style={{color:C.g,fontSize:12,margin:"8px 0"}}>No properties found</p><Btn v="ghost" onClick={()=>{setFC("all");setFT("all");setQ("");}}>Clear</Btn></div>
            :<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>{fl.map(p=><Card key={p.id} p={p} onClick={()=>{setSelP(p);setScr("detail");}} />)}</div>}
            <div style={{height:12}} />
          </div>
        </>}

        {tab==="book"&&<div style={{padding:20}}><h2 style={{color:C.w,fontSize:18,fontWeight:800,margin:"0 0 16px"}}>📋 My Bookings</h2><div style={{textAlign:"center",padding:36}}><span style={{fontSize:48}}>📭</span><p style={{color:C.g,fontSize:12,margin:"10px 0"}}>No bookings yet</p><Btn onClick={()=>setTab("home")} sz="sm">Browse →</Btn></div></div>}
        {tab==="save"&&<div style={{padding:20}}><h2 style={{color:C.w,fontSize:18,fontWeight:800,margin:"0 0 16px"}}>❤️ Saved</h2><div style={{textAlign:"center",padding:36}}><span style={{fontSize:48}}>💛</span><p style={{color:C.g,fontSize:12}}>Save properties to compare</p></div></div>}
        {tab==="me"&&<div style={{padding:18}}>
          <div style={{textAlign:"center",marginBottom:18}}><div style={{width:64,height:64,borderRadius:18,background:`linear-gradient(135deg,${C.gold}30,${C.n3})`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 8px",border:`2px solid ${C.gold}30`}}><Logo s={44} /></div><h2 style={{color:C.w,fontSize:18,fontWeight:800,margin:0}}>{user?.nm}</h2><p style={{color:C.g,fontSize:11,margin:"2px 0 5px"}}>{user?.email}</p><Badge>{user?.rl?.toUpperCase()}</Badge></div>
          {[{ic:"📝",l:"List Property",s:"Sell or rent",a:()=>setScr("list")},{ic:"📋",l:"My Listings",s:"Manage",a:()=>{}},{ic:"📞",l:"Support",s:"7667 00 5000",a:()=>{}},{ic:"⚙️",l:"Settings",s:"Preferences",a:()=>{}},{ic:"🌐",l:"i5housing.com",s:"Website",a:()=>{}},{ic:"🚪",l:"Sign Out",s:"",a:()=>{setScr("login");setUser(null);setTab("home");}}].map(x=>(
            <div key={x.l} onClick={x.a} style={{display:"flex",alignItems:"center",gap:12,padding:"12px 14px",background:`${C.w}03`,borderRadius:14,marginBottom:5,cursor:"pointer",border:`1px solid ${C.w}04`}}><span style={{fontSize:18}}>{x.ic}</span><div style={{flex:1}}><p style={{color:C.w,fontSize:12,fontWeight:600,margin:0}}>{x.l}</p>{x.s&&<p style={{color:C.g,fontSize:9,margin:0}}>{x.s}</p>}</div><span style={{color:`${C.g}60`,fontSize:11}}>›</span></div>
          ))}
          <p style={{color:`${C.g}40`,fontSize:8,textAlign:"center",marginTop:14}}>i5 Housing v2.0 • © 2026 • Razorpay™ Integrated</p>
        </div>}
      </div>

      {(user?.rl==="owner"||user?.rl==="admin")&&tab==="home"&&<button onClick={()=>setScr("list")} style={{position:"fixed",bottom:76,right:16,width:50,height:50,borderRadius:14,background:`linear-gradient(135deg,${C.gold},${C.gL})`,border:"none",fontSize:20,cursor:"pointer",boxShadow:`0 4px 20px ${C.gold}40`,color:C.navy,fontWeight:900,zIndex:10}}>+</button>}

      {/* NAV */}
      <div style={{display:"flex",justifyContent:"space-around",padding:"7px 0 10px",background:C.n2,borderTop:`1px solid ${C.w}06`,flexShrink:0}}>
        {[{id:"home",ic:"🏠",l:"Home"},{id:"book",ic:"📋",l:"Bookings"},{id:"save",ic:"❤️",l:"Saved"},{id:"me",ic:"👤",l:"Profile"}].map(t=>(
          <button key={t.id} onClick={()=>setTab(t.id)} style={{background:"none",border:"none",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:2,padding:"3px 12px"}}>
            <span style={{fontSize:17,filter:tab===t.id?"none":"grayscale(1) opacity(.4)"}}>{t.ic}</span>
            <span style={{fontSize:8,fontWeight:700,color:tab===t.id?C.gold:C.g}}>{t.l}</span>
            {tab===t.id&&<div style={{width:16,height:2.5,background:C.gold,borderRadius:2}} />}
          </button>
        ))}
      </div>
      {bookP&&<BookSheet p={bookP} user={user} onClose={()=>setBookP(null)} />}
    </div>
  );
}
