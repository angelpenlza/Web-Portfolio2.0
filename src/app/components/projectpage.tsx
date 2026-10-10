'use client'

import Link from "next/link";
import { useState } from "react"
import { Navbar } from "./navbar";

export function ProjectPage({ 
  header, subheader, date, desc, imageLinks, codeSnippet, challengeDesc, techStack, colorPalette, darkFont
}: {
    header: string,
    subheader: string, 
    date: string, 
    desc: string, 
    imageLinks: string[], 
    codeSnippet: string, 
    challengeDesc: string, 
    techStack: string[],
    colorPalette: string, 
    darkFont: string | null,
  }) {

  const [imgIndex, setImgIndex] = useState(0);
  const imageMenuButtons: any = [];
  const images = imageLinks.map((link, index) => {
    imageMenuButtons.push(
      <div 
        className="img-menu-btn glass" 
        key={index}
        onClick={() => { setImgIndex(index) }}
      ></div>
    )
    return <img src={link} alt="" key={index} className="image"/>
  })

  const stack = techStack.map((icon) => {
    return <img 
      src={icon} 
      alt="" 
      key={icon} 
      className={`${colorPalette}-to-bottom-right-gradient stack`}
    />
  })

  return (
    <div className={`project-page-container ${colorPalette}-secondary ${darkFont}`}>
      <Navbar colorPalette={colorPalette} path="Projects" />
      <div className="project-body">
        <h1 className="project-header">{header}</h1>
        <h2 className="project-subheader">{subheader}</h2>
        <div className={`project-description glass`}>
          <p className="project-date">{date}</p>
          <p>{desc}</p>
        </div>
        <div className="tech-stack-container glass">
          <h2 className="stack-title">Tech Stack</h2>
          { stack }
        </div>
        <div className={`project-images-container ${colorPalette}-to-bottom-right-gradient`}>
          <h2>A quick glance</h2>
          { images[imgIndex] }
          <div className="img-menu">{imageMenuButtons}</div>
        </div>

        {/* 
        WORK IN PROGRESS
        <code>{codeSnippet}</code>
        <p>{challengeDesc}</p> 
        */}
      </div>

    </div>
  )
}