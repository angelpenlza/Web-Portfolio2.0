import Link from "next/link";
import { Navbar } from "../components/navbar";

export default function About() {
  const colorPalette = "deep-sea";
  const InfoBlock = ({ title, details }: {
    title: string, 
    details: string[][],
  }) => {
    const info: any = details.map((detail) => {
      return (
        <div className="info-container" key={detail[0]}>
          <i className="info-title">{detail[0]}</i>
          <p className="info-date">{detail[1]}</p>
          <p className="info-desc">{detail[2]}</p>
        </div>
      )
    })
    return (
      <section className="glass about-info-block">
        <h1 className="about-info-title">{title}</h1>
        { info }
      </section>
    )
  }
  return (
    <div className={`${colorPalette}-primary`}>
      <Navbar colorPalette="deep-sea" path="About"/>
      <div className="about-container">
        <h1 className="about-title">About Me</h1>

        <InfoBlock 
          title="Education"
          details={[
            [
              'California State University, Fullerton', 
              'August 2023 - May 2026',
              "Earned a Bachelor's Degree of Science in Computer Science."
            ],
            [
              'Fullerton College', 
              'August 2021 - May 2023',
              'Earned required units and took required classes to be considered a Junior Computer Science Major.'
            ]
          ]}
        />

        <InfoBlock
          title="Coding Experience"
          details={[
            [
              'TypeScript / JavaScript',
              '4 years',
              'Worked on multiple websites with multiple different JavaScript / TypeScript frameworks.'
            ],
            [
              'CSS',
              '4 years',
              'Learned to style, animate, and organize with CSS.'
            ],
            [
              'Leetcode',
              '5 years', 
              'Learned data structures to optimize/balance time complexity and memory complexity.'
            ]
          ]}
        />

        <InfoBlock 
          title="Work Experience"
          details={[
            [
              'Target -  Tech Specialist',
              '3 years 10 months', 
              'Learned to communicate with guests and coworkers. Learned the value of emotional intelligence and organized work.'
            ]
          ]}
        />
      </div>

    </div>
  )
}
