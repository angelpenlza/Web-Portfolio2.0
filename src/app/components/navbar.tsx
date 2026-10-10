'use client'

import Link from "next/link"
import { useState } from "react"

export function Navbar({ colorPalette, path }: { 
  colorPalette: string,
  path: string,
}) {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => { setShowMenu(!showMenu) };
  return (
    <div className={`navbar ${colorPalette}-to-bottom-gradient`}>
      <h1 className="navbar-title">Portfolio / {path}</h1>
      <div className="space"></div>
      <Link href='/'><img src='/Web-Portfolio2.0/home.svg' alt=""  className="icon" /></Link>
      <img src='/Web-Portfolio2.0/menu.svg' alt="" className="icon" onClick={toggleMenu}>
      </img>
      { showMenu ? <div className="menu">
        <Link 
          href='/projects/cora' 
          className={`menu-item ${colorPalette}-to-bottom-gradient`}
        >Cora</Link>
        <Link 
          href='/projects/wordle' 
          className={`menu-item ${colorPalette}-to-bottom-gradient`}
        >Wordle Clone</Link>
        <Link 
          href='/about' 
          className={`menu-item ${colorPalette}-to-bottom-gradient`}
        >About Me</Link>
        <Link 
          href='/contact' 
          className={`menu-item ${colorPalette}-to-bottom-gradient`}
        >Contact Me</Link>
      </div> : <></>}
  </div>
  )
}