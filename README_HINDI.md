# KAVIAN SOLAR website starter

Yeh custom Next.js website ka initial code hai. Ismein responsive homepage, residential/commercial sections, solar calculator, WhatsApp click-to-chat aur sample project gallery hai.

## Local computer par chalayein
1. Node.js 20.9 ya newer install karein.
2. ZIP extract karein.
3. Folder mein PowerShell / Terminal open karein.
4. `npm install` chalayein.
5. `npm run dev` chalayein.
6. Browser mein http://localhost:3000 kholein.

Production check: `npm run build`

## WhatsApp
Number already +91 85272 60489 set hai. Zaroorat par `.env.example` ko `.env.local` mein copy karke number update karein.

## Gallery
Abhi gallery demo content se chal rahi hai. `data/projects.ts` mein title, location, capacity aur image URL edit karke gallery update hoti hai. Aapne simple admin login chuna tha; secure login + image upload next milestone mein Supabase Auth/Storage ke saath implement karna hoga. Is starter mein abhi admin login configured nahi hai.

## Important before live launch
- Demo project images/details ko actual KAVIAN SOLAR project photos/details se replace karein.
- Calculator ke assumptions (4 units/kW/day, 80% usable generation, ₹55,000/kW) sirf illustrative hain. Actual tariff, roof, shading, system design aur quotation se replace/confirm karein.
- Privacy notice, contact email, terms aur enquiry consent add karein.
- Website abhi kaviansolar.com par deploy nahi hui hai. Domain DNS aur hosting account owner ko configure karna hoga.
- WhatsApp par message auto-send nahi hota; user ko WhatsApp open hone ke baad Send press karna hota hai.
