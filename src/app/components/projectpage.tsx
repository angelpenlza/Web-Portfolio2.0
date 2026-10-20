'use client'

import Link from "next/link";
import { useCallback, useState } from "react"
import { Navbar } from "./navbar";
import Swiper from "./swiper";

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

  const leftImage = () => { 
    if(imgIndex <= 0) setImgIndex(imageLinks.length - 1); 
    else setImgIndex(imgIndex - 1);
  }

  const rightImage = () => {
    if(imgIndex >= imageLinks.length - 1) setImgIndex(0);
    else setImgIndex(imgIndex + 1);
  }

  const stack = techStack.map((icon) => {
    return <img 
      src={icon} 
      alt="" 
      key={icon} 
      className={`${colorPalette}-to-bottom-right-gradient stack`}
    />
  })

  const handleSwipe = ({deltaX, deltaY}: 
    { deltaX : number, deltaY: number }) => {
      console.log('swipe handled')
      if(Math.abs(deltaX) > Math.abs(deltaY)) {
        if(deltaX > 0) rightImage();
        else leftImage();
      }
  }

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
        <div 
          className={`project-images-container ${colorPalette}-to-bottom-right-gradient`}
        >
          <h2>A quick glance</h2>
          { images[imgIndex] }
          <div className="img-menu">{imageMenuButtons}</div>
        </div>
        <Swiper onSwipe={handleSwipe}>
          <div></div>
        </Swiper>
        {/* 
        WORK IN PROGRESS
        <code>{codeSnippet}</code>
        <p>{challengeDesc}</p> 
        */}
      </div>

    </div>
  )
}