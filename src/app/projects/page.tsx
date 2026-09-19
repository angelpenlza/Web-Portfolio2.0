import Link from "next/link";

export default function Projects() {
  return (
    <div className="projects-containter">
      <div className='projects-header'>
        <div className="bubble project-bubble-one"></div>
        <div className="bubble project-bubble-two"></div>
        <div className="bubble project-bubble-three"></div>

        <Link href='/' className="homepage-link">
          <div className="projects-link-bubble">&#8962;</div>
        </Link>
        <h1 className="projects-title">Projects</h1>
        <p className="project-label">Select a project.</p>
      </div>
    </div>
  )
}