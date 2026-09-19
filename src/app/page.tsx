import Link from "next/link";

const LinkBubble = ({ src, name }: {
  src: string, 
  name: string,
}) => {
  return (
    <Link 
      href={src} 
      className="homepage-link"
    >
      <div className="homepage-link-bubble">
        {name}
      </div>
    </Link>
  )
}

export default function Home() {
  return (
    <div className="homepage-container">
      <div className="homepage-bubble main-bubble-one"></div>
      <div className="homepage-bubble main-bubble-two"></div>

      <div className="homepage-title-container">
        <h1 className="homepage-name">Angel Penaloza</h1>
        <p className="homepage-label">Full-Stack Developer</p>
      </div>

      <div className="link-bubbles-container">
        <LinkBubble src="/projects" name="Projects" />
        <LinkBubble src="/about" name="About Me" />
        <LinkBubble src="/contact" name="Contact" />
      </div>
    </div>
  )
}