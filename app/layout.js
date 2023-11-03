import './styles/globals.css'
import { Inter } from 'next/font/google'
import { League_Spartan,Libre_Baskerville} from "next/font/google";
import Footer from "@/app/components/footer/page";
import NavBar from "@/app/components/navbar/page";
import {Analytics} from "@vercel/analytics/react";


export const dynamic = 'force-dynamic'

const inter = Inter({ subsets: ['latin'] })
const spartan=League_Spartan({
  subsets:['latin']
})


export default function RootLayout({ children }) {


  return (
      <html lang="en">
        <body className={spartan.className}>
          <NavBar/>
          <div className="content">
              {children}
          </div>
          <Analytics/>
        <Footer/>
        </body>
      </html>
  )
}
