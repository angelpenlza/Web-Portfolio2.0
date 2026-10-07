import BubblePage from "./components/bubblepage"

export default function Home() {
  return (
    <BubblePage
      header="Angel Penaloza"
      subheader="Full-Stack Developer"
      links={[
        ['/projects', 'Projects'], 
        ['/about', 'About Me'],
        ['/contact', 'Contact']
      ]}
      homeButton={false}
    />
  )
}