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

export default function BubblePage({ colorScheme, header, subheader, links }: {
  colorScheme: string, 
  header: string, 
  subheader: string, 
  links: string[][]
}) {
  const linkBubbles: any = links.forEach((link) => {
    return (
      <div>Link: {link[0]} Name: {link[1]}</div>
    )
  })

  return (
    <div className="homepage-container">
      <div className="homepage-bubble main-bubble-one"></div>
      <div className="homepage-bubble main-bubble-two"></div>

      <div className="homepage-title-container">
        <h1 className="homepage-name">{header}</h1>
        <p className="homepage-label">{subheader}</p>
      </div>

      <div className="link-bubbles-container">
        <LinkBubble src={links[0][0]} name={links[0][1]} />
        <LinkBubble src={links[1][0]} name={links[1][1]} />
      </div>


    </div>
  )
}
