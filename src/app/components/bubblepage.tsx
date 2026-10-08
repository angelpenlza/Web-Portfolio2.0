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
      <div className="homepage-link-bubble glass">
        {name}
      </div>
    </Link>
  )
}

export default function BubblePage({ header, subheader, links, homeButton }: {
  header: string, 
  subheader: string, 
  links: string[][], 
  homeButton: boolean,
}) {

  const bubbles = links.map((link) => {
    return (
      <LinkBubble 
        src={link[0]}
        name={link[1]}
        key={link[0]}
      />
    )
  })

  return (
    <div className="homepage-container">
      {
        homeButton ? 
        <Link href='/'>
          <img src='/home.svg' alt="" className="home-button glass"/>
        </Link> : <></>
      }
      <div className="homepage-bubble main-bubble-one"></div>
      <div className="homepage-bubble main-bubble-two"></div>

      <div className="homepage-title-container">
        <h1 className="homepage-name">{header}</h1>
        <p className="homepage-label">{subheader}</p>
      </div>

      <div className="link-bubbles-container">
        {bubbles}
      </div>
    </div>
  )
}
