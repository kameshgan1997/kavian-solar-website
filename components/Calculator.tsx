"use client";
import {useMemo,useState} from "react"; import {waLink} from "@/lib/whatsapp";
export default function Calculator(){
 const [bill,setBill]=useState("2500"),[tariff,setTariff]=useState("8"),[type,setType]=useState("Residential"),[name,setName]=useState(""),[phone,setPhone]=useState(""),[city,setCity]=useState("Ghaziabad"),[pin,setPin]=useState("");
 const r=useMemo(()=>{const b=Math.max(0,+bill||0),t=Math.max(1,+tariff||8),kw=Math.max(1,Math.min(20,Math.ceil(b/(t*120)))),units=kw*4*30,saving=Math.min(b,units*t*.8),cost=kw*55000;return {kw,units,saving,cost,payback:saving?cost/(saving*12):0}},[bill,tariff]);
 const msg=`Namaste KAVIAN SOLAR, mujhe solar quotation chahiye.\\nName: ${name}\\nMobile: ${phone}\\nCity: ${city}\\nPIN: ${pin}\\nType: ${type}\\nMonthly bill: Rs ${bill}\\nTariff: Rs ${tariff}/unit\\nSuggested capacity: ${r.kw} kW\\nIndicative cost: Rs ${r.cost}\\nPlease contact me.`;
 const cleanPhone = phone.replace(/\D/g, "");

const ok =
  name.trim().length >= 2 &&
  /^[6-9]\d{9}$/.test(cleanPhone) &&
  city.trim().length > 1;
 return <div className="calcgrid"><div><small className="tag">FREE SOLAR ESTIMATE</small><h2>Calculate your solar savings</h2><p className="muted">Enter your monthly electricity bill to get an indicative rooftop solar estimate.</p><p className="note">Assumptions: 4 units/kW/day, 80% usable generation value and indicative EPC price ₹55,000/kW. Actual results depend on roof, shading, tariff, system design and site survey. Subsidy is not included.</p></div><div className="panel">
 <label>Monthly electricity bill (₹)<input type="number" min="0" value={bill} onChange={e=>setBill(e.target.value)}/></label><label>Tariff (₹ per unit)<input type="number" min="1" value={tariff} onChange={e=>setTariff(e.target.value)}/></label><label>Connection type<select value={type} onChange={e=>setType(e.target.value)}><option>Residential</option><option>Commercial</option></select></label>
 <div className="result"><b>Indicative estimate</b><div className="metrics"><div><small>Suggested capacity</small><strong>{r.kw} kW</strong></div><div><small>Monthly generation</small><strong>{r.units} units</strong></div><div><small>Monthly saving</small><strong>₹{Math.round(r.saving).toLocaleString("en-IN")}</strong></div><div><small>Indicative cost</small><strong>₹{r.cost.toLocaleString("en-IN")}</strong></div></div><p className="note">Approximate payback: {r.payback.toFixed(1)} years. Not a guaranteed saving or final quote.</p></div>
 <h3>Send estimate to WhatsApp</h3><label>Your name *<input value={name} onChange={e=>setName(e.target.value)} placeholder="Your name"/></label><label>10-digit mobile *<input value={phone} onChange={e=>setPhone(e.target.value)} maxLength={10} inputMode="numeric" placeholder="Mobile number"/></label><label>City / area *<input value={city} onChange={e=>setCity(e.target.value)}/></label><label>PIN code (optional)<input value={pin} onChange={e=>setPin(e.target.value)} maxLength={6}/></label>
 <a className={`btn ${ok?"":"disabled"}`} href={ok?waLink(msg):undefined} target="_blank" rel="noreferrer">Send enquiry on WhatsApp</a><p className="note">WhatsApp opens with a pre-filled message. Customer reviews and sends it; details are not sent silently.</p></div></div>
}