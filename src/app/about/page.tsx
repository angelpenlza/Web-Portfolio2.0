import Link from "next/link";
import { Navbar } from "../components/navbar";

export default function About() {
  const colorPalette = "deep-sea";
  const InfoBlock = ({ title, details }: {
    title: string, 
    details: string[],
  }) => {
    return (
      <section className="glass project-description">
        <h1>{title}</h1>
        {/* WORK IN PROGRESS */}
      </section>
    )
  }
  return (
    <div className={`${colorPalette}-primary`}>
      <Navbar colorPalette="deep-sea" path="About"/>
      <div className="about-container">
        <h1>About Me</h1>
        <section className={`glass project-description`}>
          <h2>Education</h2>
          <p><strong>Degree: </strong> Bachelor of Science in Computer Science</p>
          <p><strong>School: </strong> California State University, Fullerton</p>
        </section>
        <section className="glass project-description">
          <h2>Coding Experience</h2>
        </section>
        <section className="glass project-description">
          <h2>Work Experience</h2>
        </section>
      </div>

    </div>
  )
}