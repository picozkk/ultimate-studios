"use client";

import { useEffect, useState } from "react";

type Product = { name:string; label:string; tone:"live"|"dev"|"soon"|"flagship"; blurb:string; detail:string; mark:string; featured?:boolean };
const products: Product[] = [
  {name:"UltimateTPA",label:"AVAILABLE",tone:"live",blurb:"A polished teleport request system for modern Minecraft servers.",detail:"UltimateTPA is the first released Ultimate Studios product. The product showcase is ready for client licensing and protected downloads to be connected later.",mark:"T"},
  {name:"UltimateRTP",label:"IN DEVELOPMENT",tone:"dev",blurb:"A refined random teleport system currently being improved.",detail:"UltimateRTP is under active development with a focus on a smooth player experience and efficient server-side behavior.",mark:"R"},
  {name:"UltimateRTPQ",label:"EARLY DEVELOPMENT",tone:"soon",blurb:"A queued random teleport experience currently being built.",detail:"UltimateRTPQ is an early-stage project. Further features, release information, and documentation will be announced as development progresses.",mark:"Q"},
  {name:"UltimateHOMES",label:"EARLY DEVELOPMENT",tone:"soon",blurb:"A modern homes system focused on clean everyday server utility.",detail:"UltimateHOMES is currently being built. The final feature set and availability will be announced later.",mark:"H"},
  {name:"UltimateAC",label:"FLAGSHIP • IN DEVELOPMENT",tone:"flagship",blurb:"Our flagship anti-cheat project, built to make server protection feel premium.",detail:"UltimateAC is the showcase flagship. Its public product experience is intentionally elevated with a larger visual treatment while development continues.",mark:"A",featured:true},
  {name:"More Products",label:"COMING SOON",tone:"soon",blurb:"More Ultimate tools are on the way. Stay tuned for the next release.",detail:"We are working on additional tools and plugins. New products will appear here as they become ready.",mark:"+"}
];

export default function ProductShowcase(){
  const [selected,setSelected]=useState<Product|null>(null);
  useEffect(()=>{document.body.style.overflow=selected?"hidden":""; return()=>{document.body.style.overflow=""}},[selected]);
  return <>
    <div className="product-grid">
      {products.map((p,i)=><button key={p.name} className={`product-card ${p.featured?"featured":""} ${i===5?"coming":""}`} onClick={()=>setSelected(p)}>
        <div className="card-top"><span className={`status ${p.tone}`}>{p.label}</span><span className="arrow">↗</span></div>
        <div className="product-mark"><span>{p.mark}</span></div>
        <div className="product-title-row"><h3>{p.name}</h3>{p.featured&&<span className="flag">FEATURED</span>}</div>
        <p>{p.blurb}</p><span className="learn">View details <b>→</b></span>
      </button>)}
    </div>
    {selected&&<div className="modal-backdrop" role="presentation" onMouseDown={()=>setSelected(null)}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="product-dialog-title" onMouseDown={e=>e.stopPropagation()}>
        <button className="close" onClick={()=>setSelected(null)} aria-label="Close">×</button>
        <span className={`status ${selected.tone}`}>{selected.label}</span>
        <div className="dialog-mark">{selected.mark}</div>
        <h3 id="product-dialog-title">{selected.name}</h3>
        <p>{selected.detail}</p>
        <div className="modal-foot"><span>ULTIMATE STUDIOS</span><button className="button primary" onClick={()=>setSelected(null)}>Close</button></div>
      </div>
    </div>}
  </>;
}
