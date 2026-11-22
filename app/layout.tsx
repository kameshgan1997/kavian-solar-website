import type { Metadata } from "next"; import "./globals.css";
export const metadata: Metadata = {title:"KAVIAN SOLAR | Rooftop Solar Solutions",description:"Residential and commercial rooftop solar solutions by KAVIAN SOLAR."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}